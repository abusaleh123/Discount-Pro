import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import 'animate.css';
import Section from './Section';
const Banner = () => {
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch('./coupon.json')
        .then(res => res.json())
        .then(data => setBrands(data))
},[]);
const saleOn = brands.filter(isSale => isSale.isSaleOn)
    return (
        <div>
                <section>
             {/* Banner */}
<div className='bgimage  w-10/12 mx-auto rounded-xl pt-20 pb-40 px-10 mt-10 text-center  ' data-aos="fade-down"
 
    >
    <div className='flex flex-col justify-center items-center' >
<h1 className='  text-white text-6xl w-6/12 font-bold leading-tight' >Your One-Stop Destination for Incredible Discounts!</h1>
<p className=  ' text-white w-2/4 text-center mt-4'>Discount PRO simplifies savings by collecting coupons from top Bangladeshi e-commerce stores, enabling users to browse, copy, and redeem discounts effortlessly.</p>
<button className='btn mt-6 btn-ghost bg-purple-300 text-xl'>See Below</button>
    </div>
</div>
            {/* Banner */}
       </section>

       <div className='lg:w-10/12 w-11/12 mx-auto mt-10' >
        <h1 className="text-4xl font-semibold ">Top Brands</h1>
        <Marquee pauseOnHover className='border  py-4 mt-6 rounded-xl border-green-400' >
          {
            brands.map((logo, idx) => <Link to={"/brands"} className='flex ' data-aos="zoom-in-left" ><img key={idx} className='w-20 flex mr-12 rounded-full ' src={logo.brand_logo}></img></Link>)
          }
        </Marquee>
        
       </div>

       <div className='mt-20 '>
<h1 className="text-3xl mb-10 font-bold w-10/12 mx-auto">Brand with Active Status</h1>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto w-10/12  gap-8' >
{
    saleOn.length > 0 ? saleOn.map((brand) => (
        <div className="card text-start border bg-base-100"  data-aos="flip-up" >
          <div data-aos="zoom-in">
  <figure className="px-10 pt-10">
   <Link to={"/brands"}>
   <img
      src={brand.brand_logo}
      alt="brand"
      className="rounded-xl w-52 border" />
   </Link>
  </figure>
  <div className="card-body items-center text-start" >
    <h2 className="card-title text-2xl font-semibold ">{brand.brand_name}</h2>
    <p>{brand.description}</p>
    <p className="font-semibold">Total Coupons: {brand.totalCoupons}</p>
    <p className="font-bold">Category:<span className='text-red-400 font-normal'> {brand.category}</span></p>
    <div className="card-actions">
      {/* <button className="btn w-full btn-ghost   md:w-96 border border-green-400 ">Buy Now</button> */}
    </div>
    </div>
  </div>
</div>
    )) : <p>No Data is Available</p>
}
</div>
       </div>


<Section></Section>
  

        </div>
    );
};

export default Banner;