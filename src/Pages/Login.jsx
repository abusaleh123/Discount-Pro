import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from 'react-router-dom';
import google from '../../src/assets/google.png'
import auth from '../firebase.init';
import { GoogleAuthProvider } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';

const Login = () => {

  const {loginUser, setUser, googleLogin,  showPassword, setShowPassword, setLoading, email, setEmail} = useContext(AuthContext);
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider()

// console.log(auth, provider);

    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
        .then((result) => {
          setUser(result);
          toast.success("Sign In Success");
          navigate("/")
        })
        .catch(error  => {
          // console.log("Error" , error.message);
          toast.error("Sign In Failed")
        })
}
const loginWithGoogle = () => {
  googleLogin(auth, provider)
  .then((result) => {
    setUser(result)
    navigate("/")
  })
  .catch((error) => {
    toast.error( error.message || "Sign In Failed")
  })
 }
    return (
      <div>
         <Helmet>
        <title>Login - Discount pro</title>
      </Helmet>
        <div className="hero " data-aos="zoom-out"> 
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-64 md:w-full  md:max-w-max shrink-0 border border-orange-300 ">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" 
                onChange={(e) => setEmail(e.target.value)}
                required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={!showPassword ? "password" : "text"} name='password' placeholder="password" className="input input-bordered" required />
                <button 
                  type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="  w-fit absolute md:bottom-48 md:right-12 right-12 bottom-[220px] transform  ">{showPassword ?  <FaEyeSlash />   : <FaEye />}
                
                </button>
                <label className="label">
                  <Link to={"/reset-password"} className="label-text-alt link link-hover">Forgot password?</Link>
                </label>
              
              </div>  
              <div className="form-control mt-6">
                <button className="btn bg-orange-400">Login</button>
              </div>
              <p className="text-center mt-1">Already Have An Account? <Link to={"/register"}><span className="text-red-400 font-bold">Register</span></Link></p>
            </form>
          </div>
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
      
      <div className="">
      <div className="divider w-2/12 mx-auto divider-">OR</div>
      <button data-aos="zoom-in" onClick={loginWithGoogle} className="border lg:w-72 mx-auto py-1 px-2 rounded-full flex gap-6 items-center">
      <img className="w-10" src={google}  alt="" />
      <p className="md:text-lg">Continue With Google</p>
      </button>
      </div>
      </div>
    );
};

export default Login;