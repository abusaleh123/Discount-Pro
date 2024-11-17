// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBv4FqWxdw-jODMqNTlkatU23aR1nu2gVg",
  authDomain: "discount-pro-coupon-collecting.firebaseapp.com",
  projectId: "discount-pro-coupon-collecting",
  storageBucket: "discount-pro-coupon-collecting.firebasestorage.app",
  messagingSenderId: "482062526685",
  appId: "1:482062526685:web:adc5dd6e140a22fef09334"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default  auth;