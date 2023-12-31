import React from 'react';
import { ArrowRight, Power } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const connectVpn = () => {
    new Notification('BCL_VPN', { body: 'VPN Connection Successfully' });
  };

  return (
    <div className='container flex flex-col items-center basis-[calc(100%-200px)]'>
      <div className='h-3/4 flex items-center'>
        <button
          onClick={connectVpn}
          className='flex items-center justify-center p-8 rounded-full border-4 border-sky-600 hover:bg-sky-600 duration-300'
        >
          <Power size={75} />
        </button>
      </div>
      <div className='w-full h-1/4 flex items-center'>
        <Link to={'/country'} className='py-3 px-4 bg-sidebar rounded w-1/2'>
          <span className='block text-left text-sm font-light'>
            Virtual Location
          </span>
          <div className='mt-2 flex justify-between items-center'>
            <span className='block text-sm'>Auto</span>
            <span>
              <ArrowRight size={16} />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
