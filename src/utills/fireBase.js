// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEx3lYQWUMi7bup4EeZdP8OhzvK9dte50",
  authDomain: "netflixgpt-bcc19.firebaseapp.com",
  projectId: "netflixgpt-bcc19",
  storageBucket: "netflixgpt-bcc19.firebasestorage.app",
  messagingSenderId: "283739809595",
  appId: "1:283739809595:web:0e499f5251fc676f5e391e",
  measurementId: "G-QNVSG7FXV6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();