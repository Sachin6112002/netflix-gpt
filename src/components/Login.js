import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)
  const toggleSignInForm = ()=>{
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header/>
   <div className='absolute'>
     <img src='https://assets.nflxext.com/ffe/siteui/vlv3/bebd95d0-65f9-41a9-9d12-4794db63653e/web/IN-en-20250922-TRIFECTA-perspective_5e75cfb4-3797-4f17-866b-181ff91a51dd_large.jpg' alt='BG-IMG'/>
   </div>
   <form  className='absolute flex flex-col bg-black bg-opacity-80 w-2/6 my-36 mx-auto left-0 right-0 p-16 text-white gap-4 rounded-lg '>
   <h1 className='font-bold text-4xl'>
    {isSignInForm ? "Sign In" : "Sign Up"}
   </h1>
   {!isSignInForm &&( <input type="text" placeholder='Full Name' className='p-2 m-2 h-14 bg-gray-700 bg-opacity-70 hover:border border-gray-400-2px rounded-md '/> ) }

    <input type="text" placeholder='Email Address' className='p-2 m-2 h-14 bg-gray-700 bg-opacity-70 hover:border border-gray-400-2px rounded-md '/>
    <input type="password" placeholder='Password' className='p-2 m-2 h-14  bg-gray-700 bg-opacity-70 hover:border border-gray-400-2px rounded-md'/>
   <button  className='p-4 m-2 bg-red-500 rounded-md text-xl font-semibold' >
    {isSignInForm ? "Sign In" : "Sign Up"}

   </button>
   <h2 className='text-xl text-gray-400'>
     {isSignInForm ? "New to Netflix?" : "Already Registered?"}<span className='font-semibold text-white cursor-pointer' onClick={toggleSignInForm} > {isSignInForm ? "Sign Up now" : "Sign In now"}</span>
   </h2>
   </form>
    </div>
  )
}

export default Login