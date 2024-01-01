import React from 'react';
import Home from '../pages/Home';
import Layout from './layout';

import {
  Route,
  RouterProvider,
  createHashRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import About from '../pages/About';
import Accounts from '../pages/Accounts';
import City from '../pages/City';
import Country from '../pages/Country';
import Settings from '../pages/Settings';
import Support from '../pages/Support';

const App = () => {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/accounts' element={<Accounts />} />
        <Route path='/country' element={<Country />} />
        <Route path='/about' element={<About />} />
        <Route path='/support' element={<Support />} />
        <Route path='/settings' element={<Settings />} />
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
