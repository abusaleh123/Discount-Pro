import React from 'react';
import Header from '../Header';
import img from '../../src/assets/wallpaperflare.com_wallpaper.jpg'
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
           <Helmet>
        <title>Home - Discount pro</title>
      </Helmet>
           <header>
            {/* Navbar */}
            <Header></Header>
            {/* Navbar */}
            </header>
   <Outlet>

   </Outlet>
          <footer>
            <Footer></Footer>
          </footer>
        </div>
    );
};

export default Home;