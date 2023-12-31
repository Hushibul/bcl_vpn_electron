import React from 'react';
import Home from '../pages/Home';
import Layout from './layout';

import {
  Route,
  RouterProvider,
  createHashRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Accounts from '../pages/Accounts';
import City from '../pages/City';
import Country from '../pages/Country';

const App = () => {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/accounts' element={<Accounts />} />
        <Route path='/country' element={<Country />} />
        <Route path='/:countryName' element={<City />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
