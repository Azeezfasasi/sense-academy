import React, { useContext, useEffect, useState } from "react";
import { Table, Pagination, Button, Modal } from "rsuite";
import { ProfileContext } from "@/assets/contextAPI/ProfileContext";

const { Column, HeaderCell, Cell } = Table;

const ManageUserMain = () => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordUserId, setPasswordUserId] = useState(null);
  const [newPassword, setNewPassword] = useState("");


  const {
    user,
    fetchAllUsers,
    deleteUser,
    disableUser,
    changeUserRole,
    updateUser,
  } = useContext(ProfileContext);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const fetchedUsers = await fetchAllUsers();
        setUsers(fetchedUsers);
      } catch (error) {
        alert("Failed to fetch users: " + error.message);
      }
    };
    getUsers();
  }, [fetchAllUsers]);

  const handleEdit = (user) => {
    setSelectedUser({ ...user }); // clone to prevent direct state mutation
    setShowModal(true);
  };

  const saveUserChanges = async () => {
    try {
      await updateUser(selectedUser._id, selectedUser);
      const updatedUsers = await fetchAllUsers();
      setUsers(updatedUsers);
      setShowModal(false);
    } catch (error) {
      alert("Failed to update user: " + error.message);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await deleteUser(id);
        setUsers((prev) => prev.filter((user) => user._id !== id));
      } catch (error) {
        alert("Delete failed: " + error.message);
      }
    }
  };

  const handleDisable = async (user) => {
    const confirmMsg = user.disabled
      ? "Are you sure you want to enable this user?"
      : "Are you sure you want to disable this user?";
      
    if (window.confirm(confirmMsg)) {
      try {
        const updatedUser = await disableUser(user._id, !user.disabled);
        setUsers((prevUsers) =>
          prevUsers.map((u) => (u._id === user._id ? updatedUser : u))
        );
        alert(`User has been ${updatedUser.disabled ? "disabled" : "enabled"}.`);
      } catch (error) {
        alert("Failed to update user status: " + error.message);
      }
    }
  };
  

  const handleChangeRole = async (id, newRole) => {
    if (!changeUserRole) {
      alert("Change role functionality not implemented!");
      return;
    }
    try {
      await changeUserRole(id, newRole);
      const updatedUsers = await fetchAllUsers();
      setUsers(updatedUsers);
      alert("Role updated!");
    } catch (error) {
      alert("Role update failed: " + error.message);
    }
  };

  const handleChangeLimit = (dataKey) => {
    setPage(1);
    setLimit(dataKey);
  };

  const data = users.slice(limit * (page - 1), limit * page);

  return (
    <div>
      <div style={{ padding: 10 }}>
        <Pagination size="md" layout={["total"]} total={users.length} />
      </div>

      <Table height={420} data={data}>
        {/* Serial Number Column */}
        <Column width={70}>
          <HeaderCell style={{ fontWeight: "bold", fontSize: "14px" }}>S/N</HeaderCell>
          <Cell>
            {(rowData, rowIndex) => (
              <span>{limit * (page - 1) + rowIndex + 1}</span>
            )}
          </Cell>
        </Column>
        <Column width={250}>
          <HeaderCell style={{ fontWeight: "bold", fontSize: "14px" }}>User ID</HeaderCell>
          <Cell dataKey="_id" />
        </Column>

        <Column width={200}>
          <HeaderCell style={{ fontWeight: "bold", fontSize: "14px" }}>First Name</HeaderCell>
          <Cell dataKey="firstName" />
        </Column>

        <Column width={200}>
          <HeaderCell style={{ fontWeight: "bold", fontSize: "14px" }}>Last Name</HeaderCell>
          <Cell dataKey="lastName" />
        </Column>

        <Column width={200}>
          <HeaderCell style={{ fontWeight: "bold", fontSize: "14px" }}>Role</HeaderCell>
          <Cell dataKey="role" />
        </Column>

        <Column width={250}>
          <HeaderCell style={{ fontWeight: "bold", fontSize: "14px" }}>Email</HeaderCell>
          <Cell dataKey="email" />
        </Column>

        <Column width={200}>
          <HeaderCell style={{ fontWeight: "bold", fontSize: "14px" }}>Actions</HeaderCell>
          <Cell>
            {(rowData) => (
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <Button size="xs" appearance="primary" onClick={() => handleEdit(rowData)}>Edit</Button>
                <Button
                  size="xs"
                  appearance="subtle"
                  color={rowData.disabled ? "green" : "orange"}
                  onClick={() => handleDisable(rowData)}
                >
                 {rowData.disabled ? "Enable" : "Disable"}
                </Button>
                <Button size="xs" appearance="ghost" color="red" onClick={() => handleDelete(rowData._id)}>Delete</Button>
              </div>
            )}
          </Cell>
        </Column>

        <Column width={250}>
          <HeaderCell style={{ fontWeight: "bold", fontSize: "14px" }}>Update Role and Password</HeaderCell>
          <Cell>
            {(rowData) => (
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <select
                  value={rowData.role}
                  onChange={(e) => handleChangeRole(rowData._id, e.target.value)}
                  style={{ fontSize: "12px", padding: "2px", borderRadius: "4px" }}
                >
                  <option value="Student">Student</option>
                  <option value="Instructor">Instructor</option>
                  <option value="Admin">Admin</option>
                </select>
                <Button
                  size="xs"
                  appearance="default"
                  onClick={() => {
                    setPasswordUserId(rowData._id);
                    setShowPasswordModal(true);
                  }}
                >
                  Change Password
                </Button>

              </div>
            )}
          </Cell>
        </Column>
      </Table>

      {/* Pagination Desktop */}
      <div className="hidden md:block p-4">
        <Pagination
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          maxButtons={5}
          size="xs"
          layout={["total", "-", "limit", "|", "pager"]}
          total={users.length}
          limitOptions={[10, 30, 50, 100]}
          limit={limit}
          activePage={page}
          onChangePage={setPage}
          onChangeLimit={handleChangeLimit}
        />
      </div>

      {/* Pagination Mobile */}
      <div className="md:hidden w-full flex justify-center items-center mt-4">
        <Pagination
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          maxButtons={5}
          size="xs"
          layout={["pager"]}
          total={users.length}
          limitOptions={[10, 30, 50, 100]}
          limit={limit}
          activePage={page}
          onChangePage={setPage}
          onChangeLimit={handleChangeLimit}
        />
      </div>

      {/* Edit Modal */}
      {selectedUser && (
        <Modal open={showModal} onClose={() => setShowModal(false)}>
          <Modal.Header>
            <Modal.Title>Edit User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                value={selectedUser.firstName}
                onChange={(e) => setSelectedUser({ ...selectedUser, firstName: e.target.value })}
                placeholder="First Name"
                className="p-2 border rounded"
              />
              <input
                type="text"
                value={selectedUser.lastName}
                onChange={(e) => setSelectedUser({ ...selectedUser, lastName: e.target.value })}
                placeholder="Last Name"
                className="p-2 border rounded"
              />
              <input
                type="email"
                value={selectedUser.email}
                onChange={(e) => setSelectedUser({ ...selectedUser, email: e.target.value })}
                placeholder="Email"
                className="p-2 border rounded"
              />
              <select
                value={selectedUser.role}
                onChange={(e) => setSelectedUser({ ...selectedUser, role: e.target.value })}
                className="p-2 border rounded"
              >
                <option value="Student">Student</option>
                <option value="Instructor">Instructor</option>
                <option value="Admin">Admin</option>
              </select>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button appearance="primary" onClick={saveUserChanges}>Save Changes</Button>
            <Button onClick={() => setShowModal(false)} appearance="subtle">Cancel</Button>
          </Modal.Footer>
        </Modal>
      )}

      {/* Modal for change password */}
      <Modal open={showPasswordModal} onClose={() => setShowPasswordModal(false)}>
        <Modal.Header>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New Password"
            className="p-2 border rounded w-full"
          />
        </Modal.Body>
        <Modal.Footer>
        <Button appearance="primary" onClick={async () => {
          if (newPassword.trim().length < 6) {
            alert("Password must be at least 6 characters.");
            return;
          }
          try {
            await updateUser(passwordUserId, { password: newPassword });
            setShowPasswordModal(false);
            setNewPassword("");
            alert("Password updated successfully.");
          } catch (error) {
            alert("Failed to change password: " + error.message);
          }
        }}>
          Save Password
        </Button>

          <Button appearance="subtle" onClick={() => setShowPasswordModal(false)}>Cancel</Button>
        </Modal.Footer>
      </Modal>


      {/* Extra Limit Selector for Mobile */}
      <div className="md:hidden flex justify-center mt-4">
        <Pagination
          size="md"
          layout={["limit"]}
          limitOptions={[10, 30, 50, 100]}
          limit={limit}
          onChangeLimit={handleChangeLimit}
        />
      </div>
    </div>
  );
};

export default ManageUserMain;

