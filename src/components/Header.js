import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
  const user = useSelector(store=> store.user)

  
  const navigate = useNavigate();
  const handleSignOut = ()=>{



signOut(auth).then(() => {
  navigate('/')
}).catch((error) => {
  navigate("/error")
});
  }
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center '>
 

    <img className='w-44'  
    src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"   alt="Logo">
  
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