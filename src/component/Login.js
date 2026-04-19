import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidData, auth   } from "../utills/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Login() {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);


    const email = useRef();
    const password = useRef();

    const handleButtonClick = () =>{
       const message =  checkValidData( email.current.value, password.current.value);
       setErrorMessage(message);
      if(message) return;
     if(!isSignInForm){
      // sign up Logic
      createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

     }
     else{
      // sign in logic


     }

    }

    const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);

    }

 
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6a77b075-d304-4342-a055-c9e435c98b6f/web/IN-en-20260406-TRIFECTA-perspective_82b47017-148f-45be-8db8-d82a0f936d18_large.jpg"
          alt="background"
        />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="w-1/2 absolute bg-black flex flex-col p-12 my-36 mx-auto right-0 left-0 text-white bg-gradient-to-b from-black">
        
        <h1 className="font-bold text-xl m-2">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        { !isSignInForm && 
        <input
          type="text"
          placeholder="Username"
          className="p-2 m-2 bg-gray-600"
        />}
        <input
        ref={email}
          type="email"
          placeholder="Email Address"
          className="p-2 m-2 bg-gray-600"
        />
        <input
        ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-2 bg-gray-600"
        />
        <p className="m-2 text-red-500">{errorMessage}</p>
        <button className="bg-red-600 p-2 m-2" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="m-2 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already have an account? Sign In"}</p>
      </form>
    </div>
  );
}
