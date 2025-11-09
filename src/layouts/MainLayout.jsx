import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main  className='min-h-[calc(100vh-285px)] bg-[#F0FDF4]'>
                <Outlet></Outlet>
            </main>

            <Footer>
          
            </Footer>
        </div>
    );
};

export default MainLayout;