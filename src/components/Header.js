import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { HEADER_LOGO, SIGN_OUT_LOGO } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const HandleGptSearchClick = () => {
    dispatch(toggleGptSearch());
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //Unsubs when component unmounts
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute w-full bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-48" src={HEADER_LOGO} alt="Movie_Logo"></img>
      {user && (
        <div className="flex p-2 m-2 space-x-2">
          <button
            className="py-2 px-4 m-2 rounded-lg text-white bg-red-500"
            onClick={HandleGptSearchClick}
          >
            {showGptSearch === false ? "GPT Search" : "HomePage"}
          </button>
          <img
            className="w-14 h-14 rounded-lg"
            src={user.photoURL ? user.photoURL : SIGN_OUT_LOGO}
            alt="SignOut"
          ></img>
          <button onClick={handleSignOut} className="text-xl text-white">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
