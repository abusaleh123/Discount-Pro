import React from 'react';
import Header from '../Header';
import img from '../../src/assets/wallpaperflare.com_wallpaper.jpg'
import { Outlet } from 'react-router-dom';

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
            
          </footer>
        </div>
    );
};

export default Home;