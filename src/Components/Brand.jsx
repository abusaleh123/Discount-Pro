import React from 'react';
import { RiCoupon3Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
const Brand = ({brand}) => {
    const {_id,brand_logo,brand_name, rating, description, totalCoupons, category, isSaleOn} = brand;
    // if(brand.isSaleOn){
    //   return
    // }
    return (
       <div className=' w-full rounded-xl flex gap-12 items-center text-start  hover:border-green-300 border-2 p-6 '>
        <div>
          <img className='w-96 rounded-xl border transition ease-in-out delay-150  hover:origin-top hover:rotate-8' src={brand_logo} alt="" />
        </div>
        <div className=''>
          <h1 className='md:text-3xl font-bold'>{brand_name}</h1>
          <h2 className="font-bold mt-4 mb-1">Rating</h2>

    <div className='flex gap-2 items-center'>
    <div className="rating rating-md">
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-7"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input
    type="radio"
    name="rating-7"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-100" />
  {/* <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" /> */}
</div>
<p className='py-1 px-3 border bg-slate-100 rounded-full'>{rating}</p>
    </div>
      <div>
        <p className="text-gray-400 mt-4">{description}</p>
        <p className='my-2'>Coupon Category: <span className='font-bold'> {category}</span></p>
        {
          isSaleOn && <div>
            <p className="animate-bounce mt-3 md:ml-6 text-red-500">Sale Is On</p>
          </div>
        }
       
      <Link to={`/brand/${_id}`}><button className='btn bg-[#DE2C5C] text-white mt-'>View Coupons</button></Link>
      </div>

        </div>
       </div>
    );
};

export default Brand;