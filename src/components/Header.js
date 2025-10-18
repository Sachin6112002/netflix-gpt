import React from 'react'
import { useEffect } from "react";
import {  signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {  onAuthStateChanged } from "firebase/auth";
import {LOGO} from "../utils/constants"
import { addUser, removeUser } from "../utils/userSlice";
const Header = () => {
  const user = useSelector(store=> store.user)
  const dispatch = useDispatch() 
  
  const navigate = useNavigate();
    useEffect(()=>{
      const unsubscribe= onAuthStateChanged(auth, (user) => {
  if (user) {
    const {uid, email, displayName} = user;
    dispatch(addUser({uid: uid, email: email, displayName: displayName}))
    navigate("/browser")

  } else {
    dispatch(removeUser())
    navigate("/")
    
  }
});
return ()=> unsubscribe();

    },[])
  const handleSignOut = ()=>{



signOut(auth).then(() => {
 
}).catch((error) => {
  navigate("/error")
});
  }
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center '>
 

    <img className='w-44'  
    src= {LOGO}   alt="Logo">
  
    </img>
   <div className='w-58 flex gap-4 
   '>
     <span className='font-semibold text-white'>{user?.displayName
}</span>
{user && (<button className='w-32 h-8 bg-red-500 rounded-md font-semibold  text-white ' onClick={handleSignOut}>
  SignOut
</button>)}
   </div>
    </div>
  )
}

export default Header