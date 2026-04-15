import Header from "./Header";
import { useState } from "react";

export default function Login() {

    const [isSignInForm, setIsSignInForm] = useState(true)

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
      <form className="w-1/2 absolute bg-black flex flex-col p-12 my-36 mx-auto right-0 left-0 text-white bg-gradient-to-b from-black">
        
        <h1 className="font-bold text-xl m-2">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        { !isSignInForm && <input
          type="text"
          placeholder="Username"
          className="p-2 m-2 bg-gray-600"
        />}
        <input
          type="email"
          placeholder="Email Address"
          className="p-2 m-2 bg-gray-600"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 m-2 bg-gray-600"
        />
        <button className="bg-red-600 p-2 m-2 ">{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="m-2 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already have an account? Sign In"}</p>
      </form>
    </div>
  );
}
