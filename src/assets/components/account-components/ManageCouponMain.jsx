import React from 'react';
import { Table, Pagination, Button } from 'rsuite';

const { Column, HeaderCell, Cell } = Table;

// ✅ Mock coupon data function
const mockCoupons = (count = 50) => {
  const coupons = [];
  for (let i = 1; i <= count; i++) {
    coupons.push({
      id: i,
      couponName: `Discount ${i}`,
      couponCode: `CODE${1000 + i}`,
      couponPrice: `$${(Math.random() * 50 + 10).toFixed(2)}`,
    });
  }
  return coupons;
};

const coupons = mockCoupons();

const ManageCouponMain = () => {
  const [limit, setLimit] = React.useState(10);
  const [page, setPage] = React.useState(1);

  const defaultData = mockCoupons(50); // You can change 35 to any number of mock entries

  const handleChangeLimit = (dataKey) => {
    setPage(1);
    setLimit(dataKey);
  };

  const data = defaultData.slice(limit * (page - 1), limit * page);

  return (
    <div>
      <div style={{ padding: 10 }}>
        <Pagination
          size="md"
          layout={['total']}
          total={coupons.length}
        />
      </div>
      <Table height={420} data={data}>
        <Column width={50} align="center">
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={200}>
          <HeaderCell>Coupon Name</HeaderCell>
          <Cell dataKey="couponName" />
        </Column>

        <Column width={200}>
          <HeaderCell>Coupon Code</HeaderCell>
          <Cell dataKey="couponCode" />
        </Column>

        <Column width={200}>
          <HeaderCell>Price</HeaderCell>
          <Cell dataKey="couponPrice" />
        </Column>

        <Column width={200} flexGrow={0}>
          <HeaderCell>Action</HeaderCell>
          <Cell>
            {(rowData) => (
              <Button appearance="link" onClick={() => alert(`Coupon ID: ${rowData.id}`)}>
                Edit
              </Button>
            )}
          </Cell>
        </Column>
      </Table>

      {/* <div style={{ padding: 20 }}>
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
          total={defaultData.length}
          limitOptions={[10, 30, 50]}
          limit={limit}
          activePage={page}
          onChangePage={setPage}
          onChangeLimit={handleChangeLimit}
        />
      </div> */}
      <div style={{ padding: 20 }} className='hidden md:block'>
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
      <div className='md:hidden w-full flex flex-row gap-6 justify-center items-center mt-4 mx-auto'>
          <Pagination
            prev
            next
            first
            last
            ellipsis
            boundaryLinks
            maxButtons={5}
            size="xs"
            layout={['pager']}
            total={coupons.length}
            limitOptions={[10, 30, 50, 100]}
            limit={limit}
            activePage={page}
            onChangePage={setPage}
            onChangeLimit={handleChangeLimit}
          /> 
        </div>

        <div className='md:hidden flex flex-row justify-center items-start mt-4 mx-auto'>
        <Pagination
            size="md"
            layout={['limit']}
            limitOptions={[10, 30, 50, 100]}
            limit={limit}
            onChangeLimit={handleChangeLimit}
          />
      </div>

    </div>
  );
};

export default ManageCouponMain;
