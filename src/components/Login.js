import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, updateProfile
} from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";

const Login = () => {
  
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch()

  const name = useRef(null)
  const email = useRef(null);
  const password = useRef(null);
  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value, );
    setErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      //Sign up logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
  displayName: name.current.value
}).then(() => {
const {uid, email, displayName} =auth.currentUser;
    dispatch(addUser({uid: uid, email: email, displayName: displayName}))

}).catch((error) => {
 setErrorMessage(error.message)
});
         
        
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //Sign in Logic

      signInWithEmailAndPassword(auth,   email.current.value,
        password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          
          

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/bebd95d0-65f9-41a9-9d12-4794db63653e/web/IN-en-20250922-TRIFECTA-perspective_5e75cfb4-3797-4f17-866b-181ff91a51dd_large.jpg"
          alt="BG-IMG"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute flex flex-col bg-black bg-opacity-80 w-2/6 my-36 mx-auto left-0 right-0 p-16 text-white gap-4 rounded-lg "
      >
        <h1 className="font-bold text-4xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            ref={name}
            placeholder="Full Name"
            className="p-2 m-2 h-14 bg-gray-700 bg-opacity-70 hover:border border-gray-400-2px rounded-md "
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 m-2 h-14 bg-gray-700 bg-opacity-70 hover:border border-gray-400-2px rounded-md "
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-2 h-14  bg-gray-700 bg-opacity-70 hover:border border-gray-400-2px rounded-md"
        />
        <p className="text-xl text-red-500 m-3 ">{errorMessage}</p>
        <button
          className="p-4 m-2 bg-red-500 rounded-md text-xl font-semibold"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <h2 className="text-xl text-gray-400">
          {isSignInForm ? "New to Netflix?" : "Already Registered?"}
          <span
            className="font-semibold text-white cursor-pointer"
            onClick={toggleSignInForm}
          >
            {" "}
            {isSignInForm ? "Sign Up now" : "Sign In now"}
          </span>
        </h2>
      </form>
    </div>
  );
};

export default Login;
