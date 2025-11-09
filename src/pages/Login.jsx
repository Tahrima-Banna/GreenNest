import React from 'react';
import MyContainer from '../components/MyContainer';
import { Link } from 'react-router';

const Login = () => {
    return (
        <MyContainer>
            <div className='flex justify-center min-h-screen items-center'>
         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
            <h1 className='font-semibold text-2xl text-center'>Login your account</h1>
      <form className="card-body">
        <fieldset className="fieldset">
          {/* email */}
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          {/* password */}
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
      
          <p className='font-semibold text-center pt-5'>Dont’t Have An Account ? <Link className='text-[#8a7676]' to='/register'>Register</Link></p>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
    </div>
     </div>
        </MyContainer>
    );
};

export default Login;