import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider";
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import google from '../../src/assets/google.png'
import { GoogleAuthProvider } from "firebase/auth";
import auth from "../firebase.init";
import { signInWithPopup } from "firebase/auth";
import { Helmet } from "react-helmet-async";


const Register = () => {
  const {createNewUser, setUser, showPassword, setShowPassword , setLoading, googleSignup,updateProfiler } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
 const handleRegister = (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const photo = e.target.photo.value;
  const password = e.target.password.value;
  // console.log(name,email,photo, password);
    setUser("")
    createNewUser("")
    setLoading(true)

  if(password.length < 6){
    return toast.error("Password Should be at least 6 character")
  }
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
  if(!passwordRegex.test(password)){
    return toast.error("Password must have one uppercase and one lowercase")
  };


  createNewUser(email, password)
  .then((result) => {
    // console.log(result)
    toast.success("Register Successful");
    setUser(result);
    setLoading(true);
    updateProfiler({displayName: name, photoURL : photo})
    .then(() => {
      navigate("/")
    })
 })
 .catch(error => {
  // console.log( "Error", error.message)
  toast.error(error.message || "Failed")
 })

 }
 const signInWithGoogle = () => {
  googleSignup(auth, provider )
  .then((result) => {
  const user = result.user;
  setUser({
    ...user,
    photoURL : user.photoURL ||" https://i.ibb.co.com/sJVY95W/2.png",
  })
  navigate("/")
  return result
  })
  .catch((error) => {
    // console.log("Error", error)
    toast.error( error.message || "Sign In Failed")
  })
 }


    return (
      <div>
         <Helmet>
        <title>Register - Discount pro</title>
      </Helmet>
        <div className="hero ">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="md:text-4xl text-2xl text-start font-bold">Register Now</h1>
          </div>
          <div className="card bg-base-100 w-96 max-w-sm shrink-0 border border-orange-400 ">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" name="photo"  placeholder="Photo URL" className="input input-bordered" required />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                
                </label>
                <input type={!showPassword ? "password" : "text"} name="password" placeholder="Password" className="input input-bordered" required />
                <button 
                  type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="  w-fit absolute top-1/2 right-3 transform bottom-2">{showPassword ?  <FaEyeSlash /> : <FaEye /> }
                
                </button>
               
            
              </div>
              <div className="form-control mt-6">
               <button className="btn bg-orange-400 text-lg ">Register </button>
              </div>
              <p className="text-center mt-1">Already Have An Account? <Link to={"/login"}><span className="text-red-400 font-bold">Login</span></Link></p>
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
         ></ToastContainer>
      </div>


      <div className="">
      <div className="divider w-2/12 mx-auto divider-">OR</div>
      <button onClick={signInWithGoogle} className="border  lg:w-72 mx-auto py-1 px-2 rounded-full flex gap-6 items-center">
      <img className="w-10" src={google} alt="" />
      <p className="text-lg">Continue With Google</p>
      </button>
      </div>
      </div>
    );
};

export default Register;