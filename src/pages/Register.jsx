import React from 'react';
import MyContainer from './../components/MyContainer';
import { Link } from 'react-router';

const Register = () => {
    return (
       <MyContainer>
         <div className='flex justify-center min-h-screen items-center'>
         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
            <h1 className='font-semibold text-2xl text-center'>Register your account</h1>
      <form  className="card-body">
        <fieldset className="fieldset">
            {/* Name */}
              <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder="Name" />
        
             
           {/* photourl*/}
          <label className="label">PhotoURL</label>
         
          <input type="text" name='photo' className="input" placeholder="photourl" />
            <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
         
          <p className='font-semibold text-center pt-5'>Already Have An Account ? 
            <Link className='text-[rgb(90,79,79)]' to='/login'>LogIn</Link></p>
          <button type='submit' className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </form>
    </div>
     </div>
       </MyContainer>
    );
};

export default Register;