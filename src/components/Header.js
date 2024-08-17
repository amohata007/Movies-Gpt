import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});
  };
  return (
    <div className="absolute w-full ml-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-48"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Movie_Logo"
      ></img>
      {user && (
        <div className="flex p-2 m-2 space-x-2">
          <img
            className="w-14 h-14 rounded-lg"
            // src="https://cdn-icons-png.freepik.com/256/16697/16697253.png?semt=ais_hybrid"
            src={
              user.photoURL
                ? user.photoURL
                : "https://cdn-icons-png.freepik.com/256/16697/16697253.png?semt=ais_hybrid"
            }
            alt="SignOut"
          ></img>
          <button onClick={handleSignOut} className="text-xl">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
