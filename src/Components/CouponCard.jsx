import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";

const CouponCard = ({ coupon, details }) => {
  const [copied, setCopied] = useState(false);

  const { condition, expiry_date, coupon_code, coupon_type, description } = coupon;
const {brand_logo, shop_Link} = details;
  return (
    <div>
      <div className="p-6 rounded-lg border shadow-xl text-center w-full mx-auto">
        <img className='lg:w-40 w-20 border rounded-xl mx-auto mb-4' src={brand_logo} alt="" />
       <div className="flex justify-around items-center mb-4 gap-10">
       <h3 className="text-xl font-semibold text-gray-800 ">
          Coupon Code:{" "}
          <span className="text-purple-500">{coupon_code}</span>
        </h3>

        <CopyToClipboard
          text={coupon_code}
          onCopy={() => {
            setCopied(true);
            toast.success("Copied Successful !")
            setTimeout(() => setCopied(false), 2000); 

          }}
        >
          <button className=" py-2 btn hover:bg-purple-500 hover:text-white text-md  rounded-md transition">
            {copied ? "Copied!" : "Copy Code"}
          </button>
        </CopyToClipboard>
       </div>
       <p className="border my-4"></p>
        <p className="text-gray-600 mb-2">
          {description}
        </p>
        <p className='font-bold mb-2'>Condition: <span className='font-normal text-gray-600'>{condition}</span></p>
        <p className='font-bold mb-2'>Coupon Type: <span className='font-normal text-gray-600'>{coupon_type}</span></p>
        <p className='font-bold mb-2'>Expire In:  <span className='font-normal text-gray-600'> {expiry_date}</span></p>
        <div className="font-bold text-lg text-gray-700 mb-4"></div>

  

        <button  onClick={() => window.open(shop_Link, "_blank")} className="w-full py-2 mt-2 btn btn-primary rounded-md transition">
          Use Now
        </button>
      </div>
      <ToastContainer
         position="top-center"
         autoClose={1000}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable
         pauseOnHover
         theme="light"
         ></ToastContainer>
    </div>
  );
};

export default CouponCard;