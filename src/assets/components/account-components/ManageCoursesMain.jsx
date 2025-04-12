import React from 'react';
import { Table, Pagination, Button } from 'rsuite';

const { Column, HeaderCell, Cell } = Table;

const ManageCoursesMain = () => {
  const [limit, setLimit] = React.useState(10);
  const [page, setPage] = React.useState(1);

  const mockCourses = [
    { id: 1, courseName: "React for Beginners", courseCategory: "Web Development", coursePrice: "$49.99" },
    { id: 2, courseName: "Advanced Node.js", courseCategory: "Backend Development", coursePrice: "$59.99" },
    { id: 3, courseName: "UI/UX Design Fundamentals", courseCategory: "Design", coursePrice: "$39.99" },
    { id: 4, courseName: "Python for Data Science", courseCategory: "Data Science", coursePrice: "$69.99" },
    { id: 5, courseName: "Digital Marketing 101", courseCategory: "Marketing", coursePrice: "$29.99" },
    { id: 6, courseName: "Fullstack Web Development", courseCategory: "Web Development", coursePrice: "$99.99" },
    { id: 7, courseName: "Machine Learning Basics", courseCategory: "Artificial Intelligence", coursePrice: "$79.99" },
    { id: 8, courseName: "Photography Masterclass", courseCategory: "Creativity", coursePrice: "$45.00" },
    { id: 9, courseName: "Ethical Hacking Essentials", courseCategory: "Cybersecurity", coursePrice: "$54.99" },
    { id: 10, courseName: "SQL for Beginners", courseCategory: "Database", coursePrice: "$34.99" },
    { id: 11, courseName: "Kubernetes Essentials", courseCategory: "DevOps", coursePrice: "$64.99" },
  ];

  const handleChangeLimit = (dataKey) => {
    setPage(1);
    setLimit(dataKey);
  };

  // Paginated data
  const data = mockCourses.filter((v, i) => {
    const start = limit * (page - 1);
    const end = start + limit;
    return i >= start && i < end;
  });

  return (
    <div>
      <div style={{ padding: 10 }}>
        <Pagination
          size="md"
          layout={['total']}
          total={mockCourses.length}
        />
      </div>
      <Table height={420} data={data}>
        <Column width={50} align="center">
          <HeaderCell style={{ fontWeight: "bold", fontSize: "14px" }}>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={200}>
          <HeaderCell style={{ fontWeight: "bold", fontSize: "14px" }}>Course Name</HeaderCell>
          <Cell dataKey="courseName" />
        </Column>

        <Column width={200}>
          <HeaderCell style={{ fontWeight: "bold", fontSize: "14px" }}>Course Category</HeaderCell>
          <Cell dataKey="courseCategory" />
        </Column>

        <Column width={200}>
          <HeaderCell style={{ fontWeight: "bold", fontSize: "14px" }}>Price</HeaderCell>
          <Cell dataKey="coursePrice" />
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
          total={mockCourses.length}
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
            layout={['total',]}
            total={mockCourses.length}
            limitOptions={[10, 30, 50, 100]}
            limit={limit}
            activePage={page}
            onChangePage={setPage}
            onChangeLimit={handleChangeLimit}
          />
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
            total={mockCourses.length}
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

export default ManageCoursesMain;
