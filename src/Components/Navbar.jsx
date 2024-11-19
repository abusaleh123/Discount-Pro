import { Link, NavLink, useLocation } from "react-router-dom";
import logo from '../../src/assets/hot-sale.png';
import { CiUser } from "react-icons/ci";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";


const Navbar = () => {
  const location = useLocation();
const {user, logOut} = useContext(AuthContext);
const backgroundColor = location.pathname === "/brands" ? "bg-[#DE2C5C] w-full py-6 " : "bg-white";
    const links = <>
    <li className="text-lg font-semibold"><Link to={"/"}>Home</Link></li>
    <li className="text-lg font-semibold"><Link to={"/brands"}>Brands</Link></li>
   {
    user && <>
     <li className="text-lg font-semibold"><NavLink to={"/my-profile"}>My Profile</NavLink></li>
    </>
   }
    <li className="text-lg font-semibold"><Link to={"/about"}>About Dev</Link></li>
        
    </>
    return (
       <div className={`py-4 ${backgroundColor}`}>
         <div className={`navbar w-11/12 ${backgroundColor} mx-auto`}>
  <div className="navbar-start">
    <div className="dropdown">
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
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {
            links
        }
      </ul>
    </div>
    <div className="flex ">
        <img className="w-10 object-cover" src={logo} alt="" />
    <a className="btn btn-ghost text-3xl font-bold">Discount Pro</a>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {
        links
    }
    </ul>
  </div>
  <div className="navbar-end gap-4 ">
    <Link to={"/register"} className="btn btn-ghost text-lg border border-green-400"><CiUser className="text-green-400 font-bold text-2xl" />Register</Link>
    {
      user ? <button onClick={logOut} className="btn  text-lg bg-red-500">Log Out</button>: <Link to={"/login"} className="btn btn-ghost text-lg bg-orange-400">Login</Link>
    }
   
  </div>
</div>
<p className="border  mx-auto lg:mt-4"></p>
       </div>
    );
};

export default Navbar;