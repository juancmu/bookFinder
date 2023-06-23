import React from 'react';

import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Finder from '../components/Finder';

const Home = () => {
  return (
    <main>


        <Navbar />
        <Finder /> 
        <Outlet />
    </main>
  )
}

export default Home
