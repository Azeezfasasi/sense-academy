import React from "react";
import { Table, Pagination, Button } from "rsuite";

const { Column, HeaderCell, Cell } = Table;

// Mock data function to generate 100 fake users
const mockUsers = (count = 100) => {
  const roles = ["Admin", "Instructor", "Student"];
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    firstName: `First${i + 1}`,
    lastName: `Last${i + 1}`,
    role: roles[i % roles.length],
    email: `user${i + 1}@example.com`,
  }));
};

const defaultData = mockUsers(100);

const ManageUserMain = () => {
  const [limit, setLimit] = React.useState(10);
  const [page, setPage] = React.useState(1);

  const handleChangeLimit = (dataKey) => {
    setPage(1);
    setLimit(dataKey);
  };

  const data = defaultData.filter((v, i) => {
    const start = limit * (page - 1);
    const end = start + limit;
    return i >= start && i < end;
  });

  return (
    <div>
      <Table height={420} data={data}>
        <Column width={50} align="center">
          <HeaderCell style={{fontWeight: "bold", fontSize: "14px"}}>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={200} fixed>
          <HeaderCell style={{fontWeight: "bold", fontSize: "14px"}}>First Name</HeaderCell>
          <Cell dataKey="firstName" />
        </Column>

        <Column width={200}>
          <HeaderCell style={{fontWeight: "bold", fontSize: "14px"}}>Last Name</HeaderCell>
          <Cell dataKey="lastName" />
        </Column>

        <Column width={200}>
          <HeaderCell style={{fontWeight: "bold", fontSize: "14px"}}>Role</HeaderCell>
          <Cell dataKey="role" />
        </Column>

        <Column width={200} flexGrow={1}>
          <HeaderCell style={{fontWeight: "bold", fontSize: "14px"}}>Email</HeaderCell>
          <Cell dataKey="email" />
        </Column>

        <Column width={200} flexGrow={1}>
          <HeaderCell style={{ fontWeight: "bold", fontSize: "14px" }}>Action</HeaderCell>
          <Cell style={{ padding: '6px' }}>
            {(rowData) => (
              <Button appearance="link" onClick={() => alert(`Editing course id: ${rowData.id}`)}>
                Edit
              </Button>
            )}
          </Cell>
        </Column>
      </Table>

      <div style={{ padding: 20 }}>
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
          total={defaultData.length}
          limitOptions={[10, 30, 50]}
          limit={limit}
          activePage={page}
          onChangePage={setPage}
          onChangeLimit={handleChangeLimit}
        />
      </div>
    </div>
  );
};

export default ManageUserMain;
