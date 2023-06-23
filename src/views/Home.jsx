import React from 'react';

import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Finder from '../components/Finder';
import outletImg from "../images/banner-1559400_1280.jpg";

const Home = () => {
  return (
  

<>
        <Navbar />
        <Finder /> 
        <Outlet />
        <div><img src = {outletImg} alt = "" /></div>

        </>
  
  )
}

export default Home
