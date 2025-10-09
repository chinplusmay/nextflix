import React, { useState, useRef } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validate'


const Login = () => {
  const[isSignUp, SetIsSignUp] = useState(false);

  const email = useRef(null);
  const password = useRef(null);

  const[errorMessage, SetErrorMessage] = useState(null);

  const toggleSignUp = () => {
    SetIsSignUp(!isSignUp);
  }
  const handleButtonClick = () => {
    // console.log(email, password);
    const message = checkValidateData(email.current.value, password.current.value);
    SetErrorMessage(message);
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

      <form 
          className='w-3/12 absolute p-10 bg-black/70 my-36 mx-auto right-0 left-0 text-white'
          onSubmit={(e) => e.preventDefault()}
      >
          <button onClick={handleButtonClick}>{isSignUp ? "Sign Up" : "Sign In"}</button>
        <h1 className='text-white text-4xl font-bold my-2 p-2  w-full'>{isSignUp ? "Sign Up" : "Sign In"}</h1>
        <input 
          type="email"
          ref={email}
          placeholder='Email address' 
          className='my-2 p-2  w-full bg-gray-700 rounded-md'
        />

        {isSignUp && <input type="text" placeholder='Full Name' className='my-2 p-2  w-full bg-gray-700 rounded-md'/>}
        <input 
          type="password" 
          ref={password}
          placeholder='Password' 
          className='my-2 p-2  w-full bg-gray-700 rounded-md'
        />
        <p className='text-red-500 font-bold py-2 text-sm'>{errorMessage}</p>

        <button 
          className='my-2 p-2  w-full bg-red-700 rounded-md'
          onClick={handleButtonClick}
          
        >Login</button>

        <p 
          className='my-2 p-2 w-full cursor-pointer ' 
          onClick={toggleSignUp}>{isSignUp ? "Already have an account? Sign in now."  : "New to Netflix? Sign up now."}
        </p>
      </form>
  </div>
  )
}

export default Login