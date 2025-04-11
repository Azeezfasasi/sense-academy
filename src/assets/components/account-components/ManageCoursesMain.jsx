import React from 'react';
import { Table, Pagination } from 'rsuite';

const { Column, HeaderCell, Cell } = Table;
// const defaultData = mockUsers(100);

const ManageCoursesMain = () => {
  const [limit, setLimit] = React.useState(10);
  const [page, setPage] = React.useState(1);

//   const handleChangeLimit = dataKey => {
//     setPage(1);
//     setLimit(dataKey);
//   };

//   const data = defaultData.filter((v, i) => {
//     const start = limit * (page - 1);
//     const end = start + limit;
//     return i >= start && i < end;
//   });

  return (
    <div>
      <Table height={420}>
        <Column width={50} align="center" fixed>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={200} fixed>
          <HeaderCell>Course Name</HeaderCell>
          <Cell dataKey="firstName" />
        </Column>

        <Column width={200}>
          <HeaderCell>Course Category</HeaderCell>
          <Cell dataKey="lastName" />
        </Column>

        <Column width={200}>
          <HeaderCell>Price</HeaderCell>
          <Cell dataKey="city" />
        </Column>
        <Column width={200} flexGrow={1}>
          <HeaderCell>Action</HeaderCell>
          <Cell dataKey="email" />
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
          layout={['total', '-', 'limit', '|', 'pager']}
        //   total={defaultData.length}
          limitOptions={[10, 30, 50]}
          limit={limit}
          activePage={page}
        //   onChangePage={setPage}
        //   onChangeLimit={handleChangeLimit}
        />
      </div>
    </div>
  );
};

export default ManageCoursesMain;