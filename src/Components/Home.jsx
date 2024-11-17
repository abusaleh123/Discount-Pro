import React from 'react';
import Header from '../Header';
import img from '../../src/assets/wallpaperflare.com_wallpaper.jpg'

const Home = () => {
    return (
        <div>
           <header>
            {/* Navbar */}
            <Header></Header>
            {/* Navbar */}
       <section>
             {/* Banner */}
<div className='bgimage  w-10/12 mx-auto rounded-xl'>
    <div className='opacity-100'>
<h1 className='text-white text-6xl w-6/12 font-bold  '>Your One-Stop Destination for Incredible Discounts!</h1>
    </div>
</div>
            {/* Banner */}
       </section>
           </header>
        </div>
    );
};

export default Home;