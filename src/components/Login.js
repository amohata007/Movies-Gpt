import React, { useRef, useState } from "react";
import Header from "./Header";
import { Validation } from "../utils/Validation";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMAGE, USER_LOGO } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [displayErrMessage, setDisplayErrMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  const checkValidation = () => {
    const errMessage = Validation(email.current.value, password.current.value);

    setDisplayErrMessage(errMessage);

    //If error then just return
    if (errMessage) return;

    //Sign up Sign In logic

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_LOGO,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // Profile updated!
              // ...
            })
            .catch((error) => {
              setDisplayErrMessage(error);
              // An error occurred
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setDisplayErrMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setDisplayErrMessage(errorCode + "-" + errorMessage);
          if (errorCode === "auth/invalid-credential") {
            setDisplayErrMessage("Invalid Crendentials. Please Try Again.");
          }
        });
    }
  };

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen object-cover md:h-full"
          src={BG_IMAGE}
          alt="BG_Image"
        ></img>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="rounded-lg bg-opacity-70 p-10 md:w-3/12 w-4/5 absolute bg-black text-white my-36 mx-auto left-0 right-0"
      >
        <h1 className="text-3xl m-2 my-4 font-bold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="name"
            placeholder="Enter your Full Name"
            className="p-2 my-4 mx-2 w-full ml-1 bg-gray-700"
          ></input>
        )}
        <input
          ref={email}
          type="email"
          placeholder="Enter your Email"
          className="p-2 my-4 mx-2 w-full ml-1 bg-gray-700"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Enter your Password"
          className="p-2 my-4 mx-2 w-full ml-1 bg-gray-700"
        ></input>
        <p className="py-2 font-bold text-red-500">{displayErrMessage}</p>
        <button
          className="p-2 mx-2 my-8 ml-1 w-full bg-red-700 rounded-lg"
          onClick={checkValidation}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="p-2 cursor-pointer hover:underline"
          onClick={toggleSignIn}
        >
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already Registered!! Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
