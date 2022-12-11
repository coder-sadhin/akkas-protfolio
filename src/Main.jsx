import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';

const Main = () => {
    return (
        <div className='max-w-screen-2xl'>
            <Navbar />
            <Outlet></Outlet>
        </div>
    )
};

export default Main;