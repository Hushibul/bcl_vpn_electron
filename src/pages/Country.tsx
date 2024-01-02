import React, { ChangeEvent, useState } from 'react';
import { ArrowLeftShort, ArrowRight, Check } from 'react-bootstrap-icons';
import { Link, useNavigate } from 'react-router-dom';
import { countries } from '../constants/country';

const Country: React.FC = () => {
  const navigate = useNavigate();
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const searchCountry = (event: ChangeEvent<HTMLInputElement>) => {
    const result = countries.filter((country) =>
      country?.name
        .toLocaleLowerCase()
        .includes(event?.target?.value.toLocaleLowerCase())
    );

    setFilteredCountries(result);
  };

  return (
    <div className='container pt-3 basis-[calc(100%-200px)] mx-auto'>
      <button onClick={() => navigate(-1)}>
        <span className='bg-sidebar p-1 rounded-sm block w-8 h-8'>
          <ArrowLeftShort className='mx-auto' size={20} />
        </span>
      </button>

      <div className='mt-2'>
        <h2 className='text-white text-lg'>Virtual location</h2>

        <input
          onChange={(event) => searchCountry(event)}
          type='search'
          className='px-3 py-2 text-sm bg-sidebar rounded w-full mt-3 placeholder:text-gray-500 focus-within:outline-none'
          placeholder='Search Locations'
        />
      </div>

      <div className='mt-3'>
        <h4 className='text-sm'>Selected Location</h4>

        <div className='flex items-center justify-between py-2 px-2 hover:bg-sidebar mt-3 rounded-sm'>
          <div className='flex gap-2 items-center'>
            <div className='w-10 h-auto overflow-hidden object-cover'>
              <img src='./images/country/flag-of-Japan.png' />
            </div>
            <span className='text-sm font-semibold'>Auto</span>
          </div>
          <button className='rounded-full p-1 bg-sky-600'>
            <Check size={20} />
          </button>
        </div>
      </div>

      <ul className='mt-3 overflow-y-auto'>
        <li className='text-sm mb-2'>
          All locations({filteredCountries?.length})
        </li>
        {filteredCountries.map((item) => (
          <li
            className='flex items-center justify-between p-2 rounded hover:bg-sidebar group'
            key={item?.id}
          >
            <div className='flex items-center gap-x-3'>
              <div className='w-10 h-auto'>
                <img src={item?.imgPath} alt={item?.name} />
              </div>
              <span className='block'>{item?.name}</span>
            </div>

            {!item?.cities && (
              <button className='text-sky-600 font-semibold hidden group-hover:block'>
                Connect
              </button>
            )}

            {item?.cities && (
              <Link
                className='hidden group-hover:block'
                to={item?.path}
                state={{
                  cities: item?.cities,
                  imgPath: item?.imgPath,
                  countryName: item?.name,
                }}
              >
                <ArrowRight width={20} height={20} />
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Country;
