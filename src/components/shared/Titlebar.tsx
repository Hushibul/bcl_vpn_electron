/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from 'react';
import {
  DashLg,
  ShieldFill,
  WindowFullscreen,
  WindowStack,
  XLg,
} from 'react-bootstrap-icons';

const Titlebar = () => {
  const [isMaximized, setIsMaximized] = useState(true);

  const minimizeApp = () => {
    window.windowManipulation.minimizeApp();
  };

  const maximizeRestore = async () => {
    window.windowManipulation.maximizeRestore();

    try {
      setIsMaximized(await window.windowManipulation.maxRestoreState());
    } catch (err) {
      console.log(err);
    }
  };

  const closeApp = () => {
    window.windowManipulation.closeApp();
  };

  return (
    <header className='w-full px-4 py-3 bg-body flex items-center justify-between shadow-md shadow-sidebar sticky z-50 top-0 h-12'>
      <div className='flex items-center gap-x-1 basis-full drag'>
        <ShieldFill width={20} height={20} />
        <span className='font-semibold block uppercase'>Cyber Shield</span>
      </div>
      <div className='flex items-center gap-x-3 no-drag'>
        <button className='p-1' onClick={minimizeApp}>
          <DashLg width={12} height={12} />
        </button>
        <button className='p-1' onClick={maximizeRestore}>
          {isMaximized ? (
            <WindowFullscreen width={12} height={12} />
          ) : (
            <WindowStack width={12} height={12} />
          )}
        </button>

        <button className='p-1' onClick={closeApp}>
          <XLg width={12} height={12} />
        </button>
      </div>
    </header>
  );
};

export default Titlebar;
