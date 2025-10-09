import React, { useState } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'


const Login = () => {
  const[isSignUp, SetIsSignUp] = useState(false);

  const toggleSignUp = () => {
    SetIsSignUp(!isSignUp);
  }

  return (
    <div >
      <Header />
      <div className='absolute'>
        <img
          className=""
          src={"https://assets.nflxext.com/ffe/siteui/vlv3/25f808aa-cecb-4753-8541-9a79f40c18ae/web/IN-en-20251006-TRIFECTA-perspective_507f47be-8780-4697-92cb-0f6c78177b6e_medium.jpg"}
          alt="bg"
        />
      </div>
      <form className='w-3/12 absolute p-10 bg-black/70 my-36 mx-auto right-0 left-0 text-white'>
        <h1 className='text-white text-4xl font-bold my-2 p-2  w-full'>{isSignUp ? "Sign Up" : "Sign In"}</h1>
        <input type="email" placeholder='Email address' className='my-2 p-2  w-full bg-gray-700 rounded-md'/>
        {isSignUp && <input type="text" placeholder='Full Name' className='my-2 p-2  w-full bg-gray-700 rounded-md'/>}
        <input type="password" placeholder='Password' className='my-2 p-2  w-full bg-gray-700 rounded-md'/>
        <button className='my-2 p-2  w-full bg-red-700 rounded-md'>Login</button>
        <p className='my-2 p-2 w-full cursor-pointer ' onClick={toggleSignUp}>
          {isSignUp ? "Already have an account? Sign in now."  : "New to Netflix? Sign up now."}
        </p>
      </form>
  </div>
  )
}

export default Login