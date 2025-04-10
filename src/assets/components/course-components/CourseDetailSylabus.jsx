import { Accordion, Placeholder, Stack, Avatar } from 'rsuite';

const Header = props => {
  const { avatarUrl, title, lessonCount, subtitle, ...rest } = props;
  return (
    <Stack {...rest} spacing={10}>
      <Stack spacing={2} direction="column" alignItems="flex-start">
        <div>{title}</div>
        <div style={{ color: 'var(--rs-text-secondary)', fontSize: 12 }}>{lessonCount}</div>
      </Stack>
    </Stack>
  );
};

const CourseDetailSylabus = () => (
  <Accordion bordered defaultActiveKey={1}>
    <Accordion.Panel
      header={
        <Header
          title="Introduction to UX Design"
          lessonCount="5 Lessons"
        />
      }
      eventKey={1}
    >
     <ul>
     <li className='mb-4'>
        <div className="flex items-center gap-4">
          <div className='w-[30px] rounded-[3px] px-2'>
            <i className="fa-solid fa-file rounded"></i>
          </div>
          <div className='w-full flex flex-row gap-2 items-center justify-between'>
            <p className='text-[14px] font-normal'>Start Here First (Important Course Details)</p>
            <span>00:56</span>
          </div>
        </div>
      </li>
      <li>
        <div className="flex items-center gap-4">
          <div className='w-[30px] px-2'>
            <i className="fa-solid fa-video rounded"></i>
          </div>
          <div className='w-full flex flex-row gap-2 items-center justify-between'>
            <p className='text-[14px] font-normal'>Introduction to UX Design</p>
            <span>00:56</span>
          </div>
        </div>
      </li>
     </ul>
    </Accordion.Panel>
    <Accordion.Panel
      header={
        <Header
          title="Basics of User-Centered Design"
          lessonCount="5 Lessons"
        />
      }
      eventKey={2}
    >
      <ul>
     <li className='mb-4'>
        <div className="flex items-center gap-4">
          <div className='w-[30px] rounded-[3px] px-2'>
            <i className="fa-solid fa-file rounded"></i>
          </div>
          <div className='w-full flex flex-row gap-2 items-center justify-between'>
            <p className='text-[14px] font-normal'>Understanding the Basics of UX Design</p>
            <span>03:16</span>
          </div>
        </div>
      </li>
      <li>
        <div className="flex items-center gap-4">
          <div className='w-[30px] px-2'>
            <i className="fa-solid fa-video rounded"></i>
          </div>
          <div className='w-full flex flex-row gap-2 items-center justify-between'>
            <p className='text-[14px] font-normal'>Introduction to UX Design Tools</p>
            <span>05:23</span>
          </div>
        </div>
      </li>
     </ul>
    </Accordion.Panel>
  </Accordion>
);

export default CourseDetailSylabus;