import React from 'react';
import { Accordion, Placeholder, Stack, Avatar } from 'rsuite';
import couponicon from '../../image/couponicon.svg';

const Header = props => {
  const { avatarUrl, title, subtitle, ...rest } = props;
  return (
    <Stack {...rest} spacing={10} direction='row' alignItems="flex-center" className='w-full'>
      <div className='flex flex-row items-center justify-start gap-2'>
        <Avatar src={couponicon} alt={title} style={{width: "24px", height: "24px", backgroundColor: "transparent"}} />
        <Stack spacing={2} direction="column" alignItems="flex-center">
        <div>{title}</div>
        </Stack>
      </div>
    </Stack>
  );
};

const ApplyCoupon = () => (
  <Accordion bordered defaultActiveKey={1} className='w-full'>
    <Accordion.Panel
      header={
        <Header
          avatarUrl={couponicon}
          title="APPLY COUPON CODE"
        />
      }
      eventKey={1} className='w-full'
    >
      <div className='w-full flex flex-row justify-between items-center gap-4'>
        <input type="text" placeholder='Enter Coupon here' className='border border-solid border-gray-300 py-2 px-2 rounded-md w-full'/>
        <div className='bg-blue-400 py-2 px-4 rounded-md cursor-pointer'>APPLY</div>
      </div>
    </Accordion.Panel>
  </Accordion>
);

export default ApplyCoupon;