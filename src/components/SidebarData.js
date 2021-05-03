import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Icons',
        path: '/icons',
        icon: <FaIcons.FaReact />,
        cName: 'nav-text'
    },
    {
        title: 'Maps',
        path: '/maps',
        icon: <AiIcons.AiFillPushpin />,
        cName: 'nav-text'
    },
    {
        title: 'Notifications',
        path: '/notifications',
        icon: <IoIcons.IoIosNotificationsOutline />,
        cName: 'nav-text'
    },
    {
        title: 'User Profile',
        path: '/user',
        icon: <AiIcons.AiOutlineUser />,
        cName: 'nav-text'
    },
    {
        title: 'Table List',
        path: '/table',
        icon: <FaIcons.FaPuzzlePiece />,
        cName: 'nav-text'
    },
    {
        title: 'Typography',
        path: '/typography',
        icon: <AiIcons.AiOutlineAlignCenter />,
        cName: 'nav-text'
    }

]