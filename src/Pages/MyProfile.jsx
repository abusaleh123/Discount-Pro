import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
import auth from '../firebase.init';
import image from '../../src/assets/pexels-pixabay-531880.jpg'
import { Helmet } from 'react-helmet-async';

const MyProfile = () => {
  const {user, setUser, updateProfiler} = useContext(AuthContext);
  

    return (
        <div>
           <Helmet>
        <title>Profile - Discount pro</title>
      </Helmet>
          
          <div>

      <div className="bg-cover bg-center " style={{ backgroundImage: `url(${image})` }} data-aos="zoom-in">
        <div className="flex justify-center items-center h-full bg-black pt-16 pb-24 bg-opacity-50">
          {
            user && <div className='text-center mx-auto justify-center flex flex-col items-center'>
              <img className='w-52 rounded-full h-52 object-cover mb-8' src={user.photoURL} alt="User Profile Picture" />
              <h1 className="text-2xl w-11/12 mx-auto md:text-4xl text-white font-bold">Hey <span className="text-purple-500">{user.displayName} </span>, Welcome to Your Profile !</h1>
            </div>
          }
        </div>
      </div>

      <div className="container mx-auto p-6 mt-16 " >
        <div className="md:max-w-4xl md:text-center mx-auto bg-white p-6 rounded-lg border-orange-400 border" data-aos="zoom-out" >
          <div className=" text-center space-x-6" data-aos="flip-left" >
            <img src={user && user.photoURL} alt="User Photo" className="w-52 h-52 md: mx-auto  object-cover rounded-full" />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Name: {user && user.displayName}</h2>
              <p className="text-sm text-gray-500 mb-2"><span className='text-md font-bold text-black'>Email:</span> {user && user.email}</p>
              <Link to="/update" className="mt-2 btn btn-ghost border-orange-400  hover:text-blue-700">Update Profile</Link>
            </div>
          </div>
        </div>
      </div>
    </div>

        </div>
    );
};

export default MyProfile;