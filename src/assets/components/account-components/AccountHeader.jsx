import React, {useState, useContext} from 'react';
import senselogo from '../../image/senselogo.png'
import { Link } from 'react-router-dom';
import heart from '../../image/heart.svg';
import bell from '../../image/bell.svg';
import cart from '../../image/cart.svg';
import profileimage from '../../image/profileimage.svg';
import HamburgerMenu from './MobileMenu';
import { Button, Menu, Portal, CloseButton, Dialog } from "@chakra-ui/react"
import { ProfileContext } from '@/assets/contextAPI/ProfileContext';
import LogoutComponent from './LogoutComponent';

function AccountHeader() {
    const { user, loading, logout } = useContext(ProfileContext);

    if (loading) {
        return <div>Loading...</div>; // Or a more sophisticated loading spinner
    }

  return (
    <>
    <div className="w-full flex flex-row justify-between lg:justify-between items-center bg-white h-[65px] sticky top-0 z-50 border-b overflow-x-hidden px-6">

        {/* Hamburger Menu */}
        <HamburgerMenu />
        
        {/* Logo */}
        <Link to="/" className="flex flex-row items-center justify-between w-fit pl-4 lg:pl-0 relative">
            <img className="shrink-0 w-[150px] h-[40px]"
            src={senselogo}
            />
        </Link>

        {/* Top Right */}
        <div className="flex flex-row items-center justify-start gap-6 md:gap-8  mr-[30px] md:mr-[10px]">
            <Link to="" className="flex flex-row items-start justify-start relative">
                <img className="shrink-0 w-6 h-6 relative overflow-visible" src={heart} />
            </Link>
            {/* Notification pop up */}
            <Dialog.Root scrollBehavior="inside" size="sm">
                <Dialog.Trigger asChild>
                    <Button variant="outline">
                        <img className="shrink-0 w-6 h-6 relative overflow-visible"
                        src={bell}
                        />
                    </Button>
                </Dialog.Trigger>
                <Portal>
                    <Dialog.Backdrop />
                    <Dialog.Positioner>
                        <Dialog.Content>
                            <Dialog.Header>
                                <Dialog.Title>
                                    <p className='text-[20px] md:text-[24px]'>Your Notifications</p>
                                </Dialog.Title>
                            </Dialog.Header>
                            <Dialog.CloseTrigger asChild>
                                <CloseButton size="sm" />
                            </Dialog.CloseTrigger>
                            <Dialog.Body>
                            <ul>
                                <li>one</li>
                                <li>one</li>
                                <li>one</li>
                                <li>one</li>
                            </ul>
                            </Dialog.Body>
                        </Dialog.Content>
                    </Dialog.Positioner>
                </Portal>
            </Dialog.Root>

            {/* Profile dropdown */}
            <Menu.Root>
                <Menu.Trigger asChild>
                    <Button variant="outline" size="sm">
                        <img src={user.profileImage || profileimage} alt="" className='w-10 h-10 rounded-[50%]'/>
                        <div className='flex flex-col items-start gap-0'>
                            <p className='text-[13px] md:text-[14px] mb-[-10px] font-[600]'>{user.firstName} {user.lastName}</p>
                            <p className='text-[13px] md:text-[14px] font-thin'>{user.role}</p>
                        </div>
                    </Button>
                </Menu.Trigger>
                <Portal>
                    <Menu.Positioner>
                        <Menu.Content>
                            <Menu.Item value="assessment" as={Link} to="/app/assessment" style={{textDecoration: "none", color: "black", cursor: "pointer"}}>
                                Assessment
                            </Menu.Item>
                            
                            <Menu.Item value="certificates" as={Link} to="/app/certificates" style={{textDecoration: "none", color: "black", cursor: "pointer"}}>
                                Certificates
                            </Menu.Item>
                            
                            <Menu.Item value="profile" as={Link} to="/app/profile" style={{textDecoration: "none", color: "black", cursor: "pointer"}}>
                                Profile
                            </Menu.Item>
                            <Menu.Item value="settings" as={Link} to="/app/settings" style={{textDecoration: "none", color: "black", cursor: "pointer"}}>
                                Settings
                            </Menu.Item>
                            {/* <Menu.Item value="logout" as={Link} style={{textDecoration: "none", color: "red", cursor: "pointer"}} onClick={logout}>
                                Logout
                            </Menu.Item> */}
                            <div className='w-[80%] border' style={{textDecoration: "none", color: "red", cursor: "pointer"}}>
                                <LogoutComponent />
                            </div>
                        </Menu.Content>
                    </Menu.Positioner>
                </Portal>
            </Menu.Root>
        </div>        
    </div>

    </>
  )
}

export default AccountHeader