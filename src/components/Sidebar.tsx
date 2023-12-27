import React from 'react';
import {
  GearFill,
  House,
  InfoCircleFill,
  PersonCircle,
  QuestionCircleFill,
} from 'react-bootstrap-icons';

import { NavLink } from 'react-router-dom';

type sidebarItemType = {
  id: number;
  name: string;
  icon: JSX.Element;
  path: string;
};

const Sidebar = () => {
  const menu: sidebarItemType[] = [
    {
      id: 1,
      name: 'Home',
      icon: <House size={25} />,
      path: '/',
    },
    {
      id: 2,
      name: 'Accounts',
      icon: <PersonCircle size={25} />,
      path: '/accounts',
    },
    {
      id: 3,
      name: 'About',
      icon: <InfoCircleFill size={25} />,
      path: '/about',
    },
    {
      id: 4,
      name: 'Support',
      icon: <QuestionCircleFill size={25} />,
      path: '/support',
    },
    {
      id: 5,
      name: 'Settings',
      icon: <GearFill size={25} />,
      path: '/settings',
    },
  ];

  return (
    <aside className='w-[200px] h-screen bg-sidebar pt-16'>
      <ul className='flex flex-col'>
        {menu.map((item: sidebarItemType) => (
          <li key={item?.id}>
            <NavLink
              className='flex items-center gap-4 text-white w-full pl-6 text-md py-3 hover:bg-body cursor-pointer'
              to={item?.path}
            >
              <span>{item?.icon}</span>
              <span>{item?.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
