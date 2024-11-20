import React, { useContext } from 'react';
import auth from '../firebase.init';
import { AuthContext } from '../AuthProvider';
import { sendPasswordResetEmail } from 'firebase/auth';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ForgotPassword = () => {
    const {resetPassword, email, setUser} = useContext(AuthContext);
    const navigate = useNavigate()
    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
        .then(() => {
          setUser(null)
            toast.success("Reset Email Sent");
            window.open('https://mail.google.com', '_blank');
            navigate("/")
        })
        .catch(error => {
          // console.log("Error", error.message);
        })
        
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
           <Helmet>
        <title>Forgot Password - Discount pro</title>
      </Helmet>
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Forgot Password</h2>
        <form >
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1  focus:ring-orange-500"
              value={email}
              readOnly
            //   onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="button"
            className="w-full bg-orange-400 text-lg py-2 rounded-lg  transition"
            onClick={handleResetPassword}
          >
            Reset Password
          </button>
        </form>
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
        >
        </ToastContainer>
    </div>
    );
};

export default ForgotPassword;