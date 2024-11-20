import React from 'react';
import Header from '../Header';
import img from '../../src/assets/wallpaperflare.com_wallpaper.jpg'
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
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