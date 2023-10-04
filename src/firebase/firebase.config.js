// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5QxQ-6GoED8BYfGgFaxp01KZEto-sn_4",
  authDomain: "react-dragon-news-auth-4d640.firebaseapp.com",
  projectId: "react-dragon-news-auth-4d640",
  storageBucket: "react-dragon-news-auth-4d640.appspot.com",
  messagingSenderId: "206534290018",
  appId: "1:206534290018:web:175248fc9d97261362bf3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;