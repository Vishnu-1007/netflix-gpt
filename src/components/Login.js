import { useState } from "react";
import Header from "./Header";

const Login = () => {
    
        const[isSignInForm, setIsSignInForm] = useState(true)
        const toggleSignInForm = ()=>{
            setIsSignInForm(!isSignInForm)
        }

      return (
    <div>
      <Header />
      <div className=" absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7c9e63f7-5b5d-43a4-a3fb-41917ac25301/web/IN-en-20251013-TRIFECTA-perspective_7bc35267-b383-4fb3-b173-eae32292d42e_large.jpg"
          alt="logo"
        ></img>
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70">
      <h1 className="font-bold text-3xl">{isSignInForm ? "SignIn" : "SignUp"}</h1> 

        {!isSignInForm  && (<input type="text" placeholder="First Name" className="p-4 my-4 w-full bg-gray-900"></input>)}

        <input type="text" placeholder="Email" className="p-4 my-4 w-full bg-gray-900"></input>
        <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-900"></input>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSignInForm ? "SignIn" : "SignUp"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registerd Sign In"}</p>
      </form>
    </div>
  );
};

export default Login;
