import React from 'react';
import { ArrowLeftShort } from 'react-bootstrap-icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { citiesType } from '../constants/country';

const City: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { cities, imgPath, countryName } = location.state;

  return (
    <div className='container pt-3 basis-[calc(100%-200px)]'>
      <button onClick={() => navigate(-1)}>
        <span className='bg-sidebar p-1 rounded-sm block w-8'>
          <ArrowLeftShort className='mx-auto' size={20} />
        </span>
      </button>

      <div className='mt-2 flex flex-col gap-y-2 items-center'>
        <img className='w-16 h-auto' src={imgPath} alt={countryName} />
        <h3 className=' font-bold'>{countryName}</h3>
        <span className='block text-sm'>
          {cities?.length}
          {cities.location > 1 ? ' location' : ' locations'}
        </span>
      </div>

      <div className='mt-3'>
        <h4 className='text-sm'>Selected Location</h4>

        <div className='flex items-center justify-between py-2 px-2 hover:bg-sidebar mt-3 rounded-sm'>
          <div className='flex gap-2 items-center'>
            <div className='w-10 h-auto overflow-hidden object-cover'>
              <img src={imgPath} />
            </div>
            <span className='text-sm font-semibold'>{countryName}</span>
          </div>
        </div>
      </div>

      <ul className='mt-3'>
        <li className='text-sm mb-2'>Cites({cities?.length})</li>
        {cities.map((item: citiesType) => (
          <li
            className='flex items-center justify-between p-2 rounded hover:bg-sidebar group'
            key={item?.id}
          >
            <div className='flex items-center gap-x-3'>
              <div className='w-10 h-auto'>
                <img src={imgPath} alt={countryName} />
              </div>
              <span className='block'>{item?.name}</span>
            </div>

            <button className='text-sky-600 font-semibold hidden group-hover:block'>
              Connect
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default City;
