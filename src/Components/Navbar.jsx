import { Link, NavLink, useLocation } from "react-router-dom";
import logo from '../../src/assets/hot-sale.png';
import { CiUser } from "react-icons/ci";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


const Navbar = () => {
  const location = useLocation();
const {user, logOut} = useContext(AuthContext);
const backgroundColor = location.pathname === "/brands" ? "bg-[#0F1821] w-full py-6 " : location.pathname === "/about" ? "bg-[#0F1821]": "bg-white";
const textColor = location.pathname === "/brands" ? "text-white" : location.pathname === "/about" ? "text-white" : "text-normal";
    const links = <>
    <li className="text-lg font-semibold"><Link to={"/"}>Home</Link></li>
    <li className="text-lg font-semibold"><Link to={"/brands"}>Brands</Link></li>
   {
    user && <>
     <li className="text-lg font-semibold"><Link to={"/my-profile"}>My Profile</Link></li>
    </>
   }
    <li className="text-lg font-semibold"><Link to={"/about"}>About Dev</Link></li>
        
    </>
    return (
       <div className={`py-4 ${backgroundColor} ${textColor} ` } 
       >
         <div className={`navbar lg:w-11/12 w-full  mx-auto`} data-aos="fade-up">
  <div className="navbar-start">
    <div className="dropdown" >
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>

      <ul
        tabIndex={0} className="menu menu-sm dropdown-content  text-white  bg-[#1C2D3D] rounded-box z-30 mt-3 w-52 p-2 shadow"
        >
        {
            links
        }
      </ul>

    </div> 
      <Link to={"/"}>
    <div className="flex justify-center items-center  ">
        <img className="lg:w-16 w-8 object-cover lg:mb-4 ml-6 md:ml-10 lg:ml-0 " src={logo} alt="" />
    {
      user ? <a className="btn btn-ghost hidden md:block text-3xl font-bold">Discount Pro</a> : <a className="btn btn-ghost hidden lg:block lg:text-3xl text-lg font-bold">Discount Pro</a>
    }
    </div> 
    </Link>
  </div>
<div className="flex flex-col w-full">
<div class="text-center mb-4 md:mb-0 hidden lg:block">
     {
      user &&  <h1 class="text-lg font-semibold text-gray-800">
      Welcome, <span class="text-purple-600">{user.displayName}</span>!
    </h1>
     }
    </div>
  <div className="navbar-center hidden lg:flex">
 
    <ul className="menu menu-horizontal px-1 w-full">

    {
        links
    }
    
    </ul>
  </div>
</div>
  <div className="navbar-end gap-4 ">
   {
    user ? <>
    <div className=" flex  justify-center items-center gap-2 mr-2 lg:mr-0">
      <img className="w-10 h-10 max-w-10 rounded-full object-cover" src={user.photoURL} alt="" />
     <div>
     <h2 className=" md:text-lg hidden md:block font-bold">{user.displayName}</h2>
     <h2 className="text-sm hidden md:block md:font-semibold">{user.email}</h2>
     </div>
    </div>
    </> :  <Link to={"/register"} className="btn md:flex  btn-ghost md:text-lg border   border-orange-400"><CiUser className="text-orange-400 flex font-bold md:text-2xl" />Register</Link>
   }

<div>
{
      user ? <Link to={"/"} onClick={logOut} className="btn  md:text-lg items-center w-24 md:w-28 lg:w-auto  btn-ghost border-orange-400">Log Out</Link>: <Link to={"/login"} className="btn btn-ghost text-sm  md:text-lg border border-orange-400">Login</Link>
    }
</div>
  
   
  </div>
</div>
<p className="border  mx-auto lg:mt-4"></p>

       </div>
    );
};

export default Navbar;