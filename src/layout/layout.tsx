import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Layout: React.FC = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;
