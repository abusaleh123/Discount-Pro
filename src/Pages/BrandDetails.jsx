import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CouponCard from '../Components/CouponCard';

const BrandDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();


    const details = data.find((brand) => brand._id === id);

    if(!details) {
        return <p>Not found</p>
    }

const {brand_name, brand_logo, rating, coupons} = details;


    return (
        <div className='flex flex-col items-center'>
          <img className='lg:w-72 w-40 rounded-xl mb-4' src={brand_logo} alt="" />
          <h1 className='lg:text-7xl text-4xl font-bold'>{brand_name}</h1>
          <p className='text-2xl mt-4'>Rating: <span className='text-red-400'> {rating}/5</span></p>

<div className="mt-20 grid md:grid-cols-2 gap-6">
{
    coupons.map((coupon, idx) => <CouponCard key={idx} coupon={coupon} details= {details} ></CouponCard>)
}
</div>
       
        </div>
    );
};
 
export default BrandDetails;