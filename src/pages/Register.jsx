import React, { useState } from 'react';
import MyContainer from './../components/MyContainer';
import { Link } from 'react-router';
import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';
import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { auth } from './../firebase/firebase.config';
import { toast } from 'react-toastify';
import { GoogleAuthProvider } from 'firebase/auth';

const googleProvider= new GoogleAuthProvider();

const Register = () => {

   const[show,setShow]=useState(false);

   const handleRegister=(e)=>{
        e.preventDefault();

        const email=e.target.email?.value;
        const photoURL=e.target.photo?.value;
        const displayName =e.target.name?.value;
        const password=e.target.password?.value;
     
        const Regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

        if(!Regexp.test(password)){
          toast.error("Password must contain at least one uppercase letter,one lowercase letter,one digit, include at least one special charactersand Password must be at least 6 characters long.");
          return;
        }

        createUserWithEmailAndPassword(auth,email,password)
        .then((res)=>{
          updateProfile(res.user,{
            displayName,
            photoURL,
          }).then((res)=>{
            console.log(res);
            toast.success("signup successfully");   
          }).catch((e)=>{
            toast.error(e.message);
          })
           
        }).catch(e=>{
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
    return (
       <MyContainer>
         <div className='flex justify-center min-h-screen items-center'>
         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
            <h1 className='font-semibold text-2xl text-center'>Register your account</h1>
      <form onSubmit={handleRegister} className="card-body">
    
            {/* Name */}
              <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder="Name" />
        
             
           {/* photourl*/}
          <label className="label">PhotoURL</label>
         
          <input type="text" name='photo' className="input" placeholder="photourl" />
            <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="email" />
          <div className='relative'>
            <label className="label">Password</label>
          <input type={show ? "text":"password"} name='password' className="input" placeholder="Password" />
          <span onClick={()=>setShow(!show)} className='absolute bottom-3 right-9 z-50 cursor-pointer'>{show? <FaEye/>:<IoEyeOff/>}</span>
          </div>
          <button type='submit' className="btn btn-neutral mt-4">Register</button>
         
<p className='font-semibold text-center pt-5'>Already Have An Account ? 
            <Link className='text-[rgb(90,79,79)]' to='/login'>LogIn</Link></p>
    
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

export default Register;