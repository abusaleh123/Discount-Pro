import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";


const Register = (e) => {
  const {createNewUser, setUser, showPassword } = useContext(AuthContext);
 const handleRegister = (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const photo = e.target.photo.value;
  const password = e.target.password.value;
  console.log(name,email,photo, password);

  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
  if(!passwordRegex.test(password)){
    return toast.error("Password must have one uppercase and one lowercase")
  };
  if(password.length < 6){
    return toast.error("Password Should be at least 6 character")
  }

  createNewUser(email, password)
  .then((result) => {
    console.log(result)
    setUser(result);
    toast.success("Register Successful");
 })
 .catch(error => {
  console.log( "Error", error.message)
  toast.error(error.message || "Failed")
 })

 }


    return (
        <div className="hero ">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="md:text-4xl text-2xl text-start font-bold">Register Now</h1>
          </div>
          <div className="card bg-base-100 w-96 max-w-sm shrink-0 border border-green-400 ">
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={`password`} name="password" placeholder="Password" className="input input-bordered" required />
               
              </div>
              <div className="form-control mt-6">
               <button className="btn bg-green-400 text-lg ">Register </button>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    );
};

export default Register;