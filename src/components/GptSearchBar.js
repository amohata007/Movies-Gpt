import React, { useRef } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addSearchMovies } from "../utils/moviesSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const fetchMovies = async (userInput) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        userInput +
        "&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addSearchMovies(json.results));
    console.log(json.results);
  };
  const handleSearch = () => {
    const userInput = searchText.current.value;

    //search movie in tmdb
    fetchMovies(userInput);
  };
  return (
    <div className="pt-24 flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className=" m-4 p-4 col-span-9"
          placeholder="What do you want to watch today?"
        ></input>
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
