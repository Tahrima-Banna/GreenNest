import React, { use} from 'react';
import MyProfile from './../pages/MyProfile';
import MyContainer from './MyContainer';
import { Link, NavLink } from 'react-router';
import MyLink from './MyLink';
import { AuthContext } from './context/AuthContext';
import { CgEnter } from 'react-icons/cg';
import { toast } from 'react-toastify';
import { ClockLoader } from 'react-spinners';


const Navbar = () => {

  const {user,signOutFnc,setUser,loading,setLoading} =use(AuthContext);
   const handlelogOut=()=>{
          signOutFnc().then(()=>{
          toast.success("logOut successfully")
             setUser(null);
          }).catch((e)=>{
            toast.error(e.message);
          })
      }
        


    return (
       <div className="sticky top-0 z-50 bg-[#15803D] shadow-md">
        
             <MyContainer className="navbar ">
  
         <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <li><NavLink to={"/"}>Home</NavLink></li>
      <li><NavLink  to={"/plants"}>Plants</NavLink></li>
       <li><NavLink to={"/profile"}>MyProfile</NavLink></li>
      </ul>
    </div>
    <a className="text-[#FFFFFF] font-bold text-2xl lg:text-4xl">GreenNest</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><MyLink to={"/"} className="text-[#FFFFFF] font-bold">Home</MyLink></li>
      <li><MyLink to={"/plants"} className="text-[#FFFFFF] font-bold">Plants</MyLink></li>
      <li><MyLink to={"/profile"} className="text-[#FFFFFF] font-bold">MyProfile</MyLink></li>
    </ul>
  </div>
  <div className="navbar-end">
   
  {/* If user is logged in */}
{loading? <ClockLoader color='#ffffff'/>:user ? (
  <div className="dropdown dropdown-end">
    <div
      tabIndex={0}
      role="button"
      className="btn btn-ghost btn-circle avatar"
    >
      <div className="w-10 h-10 rounded-full">
        <img
          src={user.photoURL || "https://i.pravatar.cc/100"}
          alt="user"
        />
      </div>
    </div>

    <ul
      tabIndex="-1"
      className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
    >
      <li>
        <span className="justify-between">
          {user.displayName || "User"}
        </span>
      </li>
      <li>
        <button onClick={handlelogOut}>Logout</button>
      </li>
    </ul>
  </div>
) : (
  // If user NOT logged in → show buttons
  <div className="flex items-center">
    <button className="badge bg-[#fcfc15] border-0">
      <Link className='text-[#15803D] font-semibold' to='/register'>Register</Link>
    </button>

    <button className="badge bg-[#fcfc15] border-0 ml-5">
      <Link className='text-[#15803D] font-semibold' to='/login'>LogIn</Link>
    </button>
  </div>
)}

  </div>
    
</MyContainer>
       </div>
 
    );
};

export default Navbar;

