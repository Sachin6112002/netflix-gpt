// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAd_EwKEzsTZJxkm-p83287Kt6diEOI1JQ",
  authDomain: "netflix-gpt-44fbd.firebaseapp.com",
  projectId: "netflix-gpt-44fbd",
  storageBucket: "netflix-gpt-44fbd.firebasestorage.app",
  messagingSenderId: "629212292655",
  appId: "1:629212292655:web:7691bc276c53d63bc488da",
  measurementId: "G-B0ZLQS2CMX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export  const auth = getAuth();
