import React, { useEffect, useState } from 'react';
import { Table, Pagination, Button, Modal, Form, Input, DatePicker } from 'rsuite';
import { useCoupon } from '@/assets/contextAPI/CouponContext';

const { Column, HeaderCell, Cell } = Table;

const ManageCouponMain = () => {
  const { coupons, fetchCoupons, deleteCoupon, updateCoupon, disableCoupon, loading } = useCoupon();
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState(null);

  useEffect(() => {
    fetchCoupons(); // Fetch coupons on component mount
  }, [fetchCoupons]);

  const handleChangeLimit = (dataKey) => {
    setPage(1);
    setLimit(dataKey);
  };

  const data = coupons.slice(limit * (page - 1), limit * page);

  const handleDisable = async (id) => {
    if (window.confirm('Are you sure you want to disable this coupon?')) {
      await disableCoupon(id);
      fetchCoupons(); // Refresh the coupon list
    }
  };

  const handleEdit = (coupon) => {
    setSelectedCoupon(coupon); // Set the selected coupon for editing
    setEditModalOpen(true); // Open the edit modal
  };

  const handleSave = async () => {
    if (selectedCoupon) {
      await updateCoupon(selectedCoupon._id, selectedCoupon); // Update the coupon
      fetchCoupons(); // Refresh the coupon list
      setEditModalOpen(false); // Close the modal
    }
  };

  const handleChange = (value, field) => {
    setSelectedCoupon({ ...selectedCoupon, [field]: value }); // Update the selected coupon's field
  };

  return (
    <div>
      <div style={{ padding: 10 }}>
        <Pagination size="md" layout={['total']} total={coupons.length} />
      </div>
      <Table height={420} data={data}>
        <Column width={200}>
          <HeaderCell style={{fontWeight: "bold"}}>Coupon Code</HeaderCell>
          <Cell dataKey="code" />
        </Column>

        <Column width={200}>
          <HeaderCell style={{fontWeight: "bold"}}>Discount</HeaderCell>
          <Cell>
            {(rowData) =>
              rowData.type === 'Percentage'
                ? `${rowData.discount}%`
                : `₦${rowData.discount}`
            }
          </Cell>
        </Column>

        <Column width={200}>
          <HeaderCell style={{fontWeight: "bold"}}>Expiry Date</HeaderCell>
          <Cell>
            {(rowData) =>
              rowData.expiryDate
                ? new Date(rowData.expiryDate).toLocaleDateString('en-CA')
                : 'N/A'
            }
          </Cell>
        </Column>

        <Column width={200}>
          <HeaderCell style={{fontWeight: "bold"}}>Status</HeaderCell>
          <Cell>
            {(rowData) => (rowData.isActive ? 'Active' : 'Disabled')}
          </Cell>
        </Column>

        <Column width={300}>
          <HeaderCell style={{fontWeight: "bold"}}>Action</HeaderCell>
          <Cell>
            {(rowData) => (
              <>
                <Button appearance="link" onClick={() => handleEdit(rowData)}>
                  Edit
                </Button>
                <Button
                  appearance="link"
                  color="red"
                  onClick={async () => {
                    if (window.confirm('Are you sure you want to delete this coupon?')) {
                      try {
                        await deleteCoupon(rowData._id);
                        fetchCoupons();
                      } catch (error) {
                        console.error('Failed to delete coupon:', error.message); // Debugging: Log the error
                      }
                    }
                  }}
                >
                  Delete
                </Button>
                <Button
                  appearance="link"
                  color="orange"
                  onClick={() => handleDisable(rowData._id)}
                  disabled={!rowData.isActive} // Disable button if already disabled
                >
                  Disable
                </Button>
              </>
            )}
          </Cell>
        </Column>
      </Table>

      <div style={{ padding: 20 }} className="hidden md:block">
        <Pagination
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          maxButtons={5}
          size="xs"
          layout={['total', '-', 'limit', '|', 'pager']}
          total={coupons.length}
          limitOptions={[10, 30, 50, 100]}
          limit={limit}
          activePage={page}
          onChangePage={setPage}
          onChangeLimit={handleChangeLimit}
        />
      </div>

      {/* Edit Modal */}
      <Modal open={editModalOpen} onClose={() => setEditModalOpen(false)}>
        <Modal.Header>
          <Modal.Title>Edit Coupon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedCoupon && (
            <Form fluid>
              <Form.Group controlId="code">
                <Form.ControlLabel>Coupon Code</Form.ControlLabel>
                <Input
                  value={selectedCoupon.code}
                  onChange={(value) => handleChange(value, 'code')}
                />
              </Form.Group>
              <Form.Group controlId="discount">
                <Form.ControlLabel>Discount</Form.ControlLabel>
                <Input
                  type="number"
                  value={selectedCoupon.discount}
                  onChange={(value) => handleChange(value, 'discount')}
                />
              </Form.Group>
              <Form.Group controlId="type">
                <Form.ControlLabel>Discount Type</Form.ControlLabel>
                <select
                  value={selectedCoupon.type}
                  onChange={(e) => handleChange(e.target.value, 'type')}
                  className="w-full border rounded-md p-2"
                >
                  <option value="Percentage">Percentage</option>
                  <option value="Fixed">Fixed</option>
                </select>
              </Form.Group>
              <Form.Group controlId="expiryDate">
                <Form.ControlLabel>Expiry Date</Form.ControlLabel>
                <DatePicker
                  value={new Date(selectedCoupon.expiryDate)}
                  onChange={(value) => handleChange(value, 'expiryDate')}
                  format="yyyy-MM-dd"
                />
              </Form.Group>
              <Form.Group controlId="isActive">
                <div className='flex flex-row justify-start items-center gap-1'>
                <Form.ControlLabel>Status</Form.ControlLabel>
                <input 
                  type="checkbox" 
                  checked={selectedCoupon.isActive} 
                  onChange={(e) => handleChange(e.target.checked, 'isActive')} 
                />
                </div>

              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSave} appearance="primary">
            Save
          </Button>
          <Button onClick={() => setEditModalOpen(false)} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ManageCouponMain;