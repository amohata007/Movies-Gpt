import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://gtwallpaper.org/sites/default/files/wallpaper/246844/netflix-background-246844-2224740-3441109.png"
          alt="BG_Image"
        ></img>
      </div>
      <form className="rounded-lg bg-opacity-70 p-10 w-3/12 absolute bg-black text-white my-36 mx-auto left-0 right-0">
        <h1 className="text-3xl m-2 my-4 font-bold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="name"
            placeholder="Enter your Full Name"
            className="p-2 my-4 mx-2 w-full ml-1 bg-gray-700"
          ></input>
        )}
        <input
          type="email"
          placeholder="Enter your Email"
          className="p-2 my-4 mx-2 w-full ml-1 bg-gray-700"
        ></input>
        <input
          type="password"
          placeholder="Enter your Password"
          className="p-2 my-4 mx-2 w-full ml-1 bg-gray-700"
        ></input>
        <button className="p-2 mx-2 my-8 ml-1 w-full bg-red-700 rounded-lg">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-2 cursor-pointer" onClick={toggleSignIn}>
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already Registered!! Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
