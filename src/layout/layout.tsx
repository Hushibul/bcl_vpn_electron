import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/shared/Sidebar';
import Titlebar from '../components/shared/Titlebar';

const Layout: React.FC = () => {
  return (
    <>
      <Titlebar />
      <div className='flex'>
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
