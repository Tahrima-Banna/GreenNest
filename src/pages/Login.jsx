import React, { useState } from 'react';
import MyContainer from '../components/MyContainer';
import { Link } from 'react-router';
import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';
import { signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import { toast } from 'react-toastify';
import { GoogleAuthProvider } from 'firebase/auth';



const googleProvider= new GoogleAuthProvider();

const Login = () => {

    // const [user,setUser]=useState({})
     const[show,setShow]=useState(false);

      const handlelogIn=(e)=>{
            e.preventDefault();
        const email=e.target.email?.value;
        const password=e.target.password?.value;
        console.log("login entered",{email,password});
        signInWithEmailAndPassword(auth,email,password)
        .then((res)=>{
          console.log(res);
          //setUser(res.user)
          toast.success("logIn successfully");
        }).catch(e=>{
           
          console.log(e);
          toast.error(e.message);
        })
      }

      
          const handleGoogleIn=()=>{
            signInWithPopup(auth, googleProvider)
            .then((res)=>{
                      console.log(res);
                      //setUser(res.user)
                      toast.success("logIn successfully");
                    }).catch(e=>{
                       
                      console.log(e);
                      toast.error(e.message);
                    })
      
          }

      const handlelogOut=()=>{
         signOut(auth).then(()=>{
          toast.success("logOut successfully")
         }).catch((e)=>{
           toast.error(e.message);
         })
      }
    return (
        <MyContainer>
            <div className='flex justify-center min-h-screen items-center'>
         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
            <h1 className='font-semibold text-2xl text-center'>Login your account</h1>
      <form onSubmit={handlelogIn} className="card-body">
        
          {/* email */}
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          {/* password */}
          <div className='relative'>
            <label className="label">Password</label>
          <input type={show ? "text":"password"} name='password' className="input" placeholder="Password" />
          <span onClick={()=>setShow(!show)} className='absolute bottom-3 right-9 z-50 cursor-pointer'>{show? <FaEye/>:<IoEyeOff/>}</span>
          </div>
          <div><a className="link link-hover">Forgot password?</a></div>
      
          <p className='font-semibold text-center pt-5'>Dont’t Have An Account ? <Link className='text-[#8a7676]' to='/register'>Register</Link></p>
          <button className="btn btn-neutral mt-4">Login</button>
      
      </form>
      <div className="divider mx-5">OR</div>
          <button onClick={handleGoogleIn} className="btn bg-white text-black border-[#e5e5e5] mx-4">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Continue with Google
</button>
    </div>
     </div>
    </MyContainer>
    );
};

export default Login;