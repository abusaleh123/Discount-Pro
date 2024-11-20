import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const UpdateInformation = () => {
    const {updateProfiler, setUser, setLoading} = useContext(AuthContext);
    const navigate = useNavigate()
    const handleUpdate = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        updateProfiler({displayName: name, photoURL : photo})
        .then((result) => {
            setUser(result)
            setLoading(true)
          navigate("/my-profile")
        })
        .catch(error => {
          // console.log("Error", error.message);
        })
    }
    return (
        <div className="hero ">
           <Helmet>
        <title>Update Profile - Discount pro</title>
      </Helmet>
        <div className="hero-content flex-col lg:w-96 " data-aos="flip-left" >
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Update Profile</h1>
          
          </div>
          <div className="card bg-base-100 w-64 md:w-full  md:max-w-max shrink-0 shadow-2xl">
            <form onSubmit={handleUpdate} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="New Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URl</span>
                </label>
                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
               
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-ghost bg-orange-400 md:text-lg ">Update Information</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default UpdateInformation;