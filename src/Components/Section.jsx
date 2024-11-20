import React from 'react';
import easy from '../../src/assets/responsive-design.png'
import verified from '../../src/assets/ticket.png'
import Updates from '../../src/assets/real-time.png'
import trust from '../../src/assets/trust.png'
import logo from '../../src/assets/hot-sale.png'
import elc from '../../src/assets/elc.jpg'
import winter from '../../src/assets/83rpIkbEsTInh.png'
import popular from '../../src/assets/A carousel or grid of logos for popular brands_ Book Nook, Fashion Fista, Fitness Pro, Tech Land, Pet.png'
import coupon from '../../src/assets/cc.jpg'
import flashSale from '../../src/assets/flash-sale.jpg'
import trend from '../../src/assets/trending.jpg'

const Section = () => {
    return (
        
       <div className='lg:mt-16'>
       {/* Content Section */}
       <div className="bg-[#0F1821] py-16">
         <div className="w-10/12 mx-auto text-center" >
           <h1 className="text-4xl font-bold text-white">Our Mission</h1>
           <p className="mt-6 text-lg text-gray-400">
             We are dedicated to helping you save more and live better by simplifying access to discounts, deals, and exclusive offers across the biggest brands in Bangladesh.
           </p>
           <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 mt-10" >
             <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
               <img
                 src={easy}
                 alt="Easy Platform"
                 className="mx-auto mb-4 w-16"
               />
               <h2 className="text-lg font-semibold">Easy Platform</h2>
               <p className="text-sm text-gray-600 mt-2">
                 Navigate and find deals with ease on our user-friendly platform.
               </p>
             </div>
             <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg" data-aos="fade-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
               <img
                 src={verified}
                 alt="Verified Coupons"
                 className="mx-auto mb-4 w-16"
               />
               <h2 className="text-lg font-semibold">Verified Coupons</h2>
               <p className="text-sm text-gray-600 mt-2">
                 Only the best and verified coupons, tailored for you.
               </p>
             </div>
             <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
               <img
                 src={Updates}
                 alt="Real-time Updates"
                 className="mx-auto mb-4 w-16"
               />
               <h2 className="text-lg font-semibold">Real-time Updates</h2>
               <p className="text-sm text-gray-600 mt-2">
                 Get notified of the latest sales and discounts in real time.
               </p>
             </div>
             <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg" data-aos="fade-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
               <img
                 src={trust}
                 alt="Trusted Community"
                 className="mx-auto mb-4 w-16"
               />
               <h2 className="text-lg font-semibold">Trusted by Thousands</h2>
               <p className="text-sm text-gray-600 mt-2">
                 Join a growing community of savvy shoppers who trust us.
               </p>
             </div>
           </div>
         <div className='flex justify-center'>
         <button onClick={()=>document.getElementById('my_modal_4').showModal()} className="btn  text-white px-6 py-3 mt-8 btn-outline border-orange-400 ">
             Learn More
           </button>
         </div>
         </div>
       </div>
     
       {/* Gallery Section */}
       <div className="mt-20 mb-10">
         <h1 className="md:text-6xl font-bold text-center ">Be Inspired</h1>
         <p className='text-center  text-gray-600 mt-4'>Hover your cursor over the card for details.</p>
       </div>
       <div className='grid md:grid-cols-2 lg:grid-cols-3 w-10/12 gap-6 p-6 mx-auto '>
       {/* Card 1 */}
       <div className=" border p-4 rounded-xl mx-auto" data-aos="fade-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
         <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg" >
                 <img
                   src={elc}
                   className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                 />
                 <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center">
                    <h1 className="lg:text-6xl text-white font-bold mb-6">Electronics</h1>
                   <h2 className="text-white text-xl mb-2 font-semibold">Exclusive Discounts on Electronics</h2>
                   <p className="text-gray-300">Get up to 40% off on top electronics brands. Limited time offer!</p>
                   <p className='text-gray-300 mt-2'>Showcase exclusive deals to entice users.</p>
                 </div>
               </div>
         </div>
       {/* Card 2 */}
       <div className="mx-auto  border p-4 rounded-xl " data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
         <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg" >
                 <img
                   src={winter}
                   className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                 />
                 <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center">
                    <h1 className="lg:text-5xl text-white font-bold mb-6">Seasonal Campaign</h1>
                   <h2 className="text-white text-xl mb-2 font-semibold">Seasonal Savings Event</h2>
                   <p className="text-gray-300">Discover unbeatable discounts for the winter season. Stay warm and save more!</p>
                   <p className='text-gray-300 mt-2'>Promote seasonal campaigns.</p>
                 </div>
               </div>
         </div>
         
       {/* Card 3 */}
       <div className="mx-auto  border p-4 rounded-xl" data-aos="fade-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
         <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg" >
                 <img
                   src={popular}
                   className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                 />
                 <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center">
                    <h1 className="lg:text-4xl text-white font-bold mb-6">Popular Brands Showcase</h1>
                   <h2 className="text-white text-xl mb-2 font-semibold">Shop from Top Brands</h2>
                   <p className="text-gray-300 ">Find amazing deals from your favorite brands, all in one place.</p>
                   <p className='text-gray-300 mt-2'>Highlight the variety of brands available on the platform.</p>
                 </div>
               </div>
         </div>
       {/* Card 4 */}
       <div className=" mx-auto  border p-4 rounded-xl" data-aos="fade-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
         <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg" >
                 <img
                   src={coupon}
                   className="w-full h-[250px] lg:h-[460px] object-cover hover:scale-110 transition-transform duration-300"
                 />
                 <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center">
                    <h1 className="lg:text-5xl text-white font-bold mb-6">Coupon of the Day</h1>
                   <h2 className="text-white text-xl mb-2 font-semibold">Today's Top Coupon</h2>
                   <p className="text-gray-300">Save an extra 20% with this exclusive coupon. Don't miss out!</p>
                   <p className='text-gray-300 mt-2'>Encourage immediate action by featuring time-sensitive coupons..</p>
                 </div>
               </div>
         </div>
       {/* Card 5 */}
       <div className=" mx-auto  border p-4 rounded-xl" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
         <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg" >
                 <img
                   src={flashSale}
                   className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                 />
                 <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center">
                    <h1 className="lg:text-6xl text-white font-bold mb-6">Limited-Time Flash Sale</h1>
                   <h2 className="text-white text-xl mb-2 font-semibold">Flash Sale: Ends Soon!</h2>
                   <p className="text-gray-300">Grab exclusive discounts before the time runs out. Shop now!</p>
                   <p className='text-gray-300 mt-2'>Add urgency to encourage immediate purchases.</p>
                 </div>
               </div>
         </div>
       {/* Card 6 */}
       <div className=" mx-auto  border p-4 rounded-xl" data-aos="fade-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
         <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg" >
                 <img
                   src={trend}
                   className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                 />
                 <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center" >
                    <h1 className="lg:text-6xl text-white font-bold mb-6">Trending Deals</h1>
                   <h2 className="text-white text-xl mb-2 font-semibold">Trending Now</h2>
                   <p className="text-gray-300">Explore the hottest deals of the season. Get them before they're gone!</p>
                   <p className='text-gray-300 mt-2'>Showcase popular, in-demand products.</p>
                 </div>
               </div>
         </div>
       </div>




{/* Modal */}


<dialog id="my_modal_4" className="modal">
  <div  className="modal-box w-11/12 max-w-5xl bg-[#0F1821] text-center flex flex-col items-center">

  <img className='w-40' src={logo} alt="" />
  <h2 className="text-2xl font-bold mb-2 text-white mt-4">More About Us</h2>
    <p className="text-gray-400 mb-6">
        At our platform, we bring together the best discounts, verified coupons, and real-time updates to simplify your shopping experience. Join thousands of happy users in unlocking unbeatable savings today!
      </p>

      <h3 className="text-xl font-semibold mb-2 text-white">Key Features:</h3>
      <ul className="list-disc pl-5 mb-6 text-gray-400">
        <li>Exclusive discounts and deals from top brands</li>
        <li>Personalized offers based on your preferences</li>
        <li>Easy-to-use interface with smart search filters</li>
      </ul>


      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <p className="italic text-gray-600">I saved 50% on my favorite brand thanks to this platform! </p>
        <p className="font-bold text-gray-800 mt-2"> Abu Saleh Noor, Happy Shopper</p>
      </div>
    <div className="modal-action">
      <form method="dialog">
        <button className="btn md:w-52 border-orange-400 btn-ghost text-white">Close</button>
      </form>
    </div>
  </div>
</dialog>

{/* Modal */}




     </div>
    );
};

export default Section;