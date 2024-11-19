import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
import auth from '../firebase.init';

const MyProfile = () => {
  const {user, setUser, updateProfiler} = useContext(AuthContext);
  

    return (
        <div>
          
          <div>

      <div className="bg-cover bg-center h-80" style={{ backgroundImage: 'url(https://via.placeholder.com/800x400)' }}>
        <div className="flex justify-center items-center h-full bg-black bg-opacity-50">
          <h1 className="text-4xl text-white font-bold">Welcome to Your Profile</h1>
        </div>
      </div>

      <div className="container mx-auto p-6">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center space-x-6">
            <img src={user.photoURL} alt="User Photo" className="w-24 h-24 rounded-full" />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">User Name</h2>
              <p className="text-sm text-gray-500">user@example.com</p>
              <Link to="/update" className="text-blue-500 mt-2 block hover:text-blue-700">Update Information</Link>
            </div>
          </div>
        </div>
      </div>
    </div>

        </div>
    );
};

export default MyProfile;