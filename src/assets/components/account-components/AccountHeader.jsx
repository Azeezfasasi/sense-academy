import React, {useState} from 'react';
import senselogo from '../../image/senselogo.png'
import { Link } from 'react-router-dom';
import heart from '../../image/heart.svg';
import bell from '../../image/bell.svg';
import cart from '../../image/cart.svg';
import profileimage from '../../image/profileimage.svg';
import HamburgerMenu from './MobileMenu';
import { Button, Menu, Portal, CloseButton, Dialog } from "@chakra-ui/react"

function AccountHeader() {
  return (
    <>
    <div className="flex flex-row justify-between lg:justify-evenly items-center bg-white h-[65px] sticky top-0 z-50 border-b overflow-x-hidden">

        {/* Hamburger Menu */}
        <HamburgerMenu />
        
        {/* Logo */}
        <Link to="/" className="flex flex-row items-center justify-between w-fit pl-4 lg:pl-0 relative">
            <img className="shrink-0 w-[150px] h-[40px]"
            src={senselogo}
            />
        </Link>

        {/* Search */}
        <div className="hidden rounded-lg border-solid border-grey-700 border lg:flex flex-row gap-1 items-center justify-start h-fit w-[622px] relative">
            <span className="fa fa-search ml-1"></span>
            <input type='search' placeholder='Search Courses...' className="text-grey-700 text-left font-['Inter-Medium',_sans-serif] text-xs font-medium relative w-[95%] pt-2.5 pb-2.5 pl-2.5" />
        </div>
        <Link to="" className="hidden lg:block text-grey-700 text-left font-['Inter-Medium',_sans-serif] text-sm leading-5 font-medium border p-2 rounded-md">
            Teach on Sense Academy
        </Link>

        {/* Top Right */}
        <div className="flex flex-row items-center justify-start gap-6 md:gap-8 w-[180px] mr-[10px] md:mr-0">
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
                        <img src={profileimage} alt="" className='w-10 h-10'/>
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
                            <Menu.Item value="logout" as={Link} to="/" style={{textDecoration: "none", color: "red", cursor: "pointer"}}>
                                Logout
                            </Menu.Item>
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