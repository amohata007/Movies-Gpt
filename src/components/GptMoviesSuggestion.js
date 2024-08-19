import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMoviesSuggestion = () => {
  const movies = useSelector((store) => store.movies);
  const result = movies.searchedMovies;
  if (!result) return null;

  // console.log(movieResults, "CheckMovies");
  return (
    <div className="p-4 m-4 bg-black">
      {result.length > 0 ? (
        <MovieList title={"Searched Results"} movies={movies.searchedMovies} />
      ) : (
        <h1 className="text-white text-2xl text-center">
          "No Such Results Found."
        </h1>
      )}
    </div>
  );
};

export default GptMoviesSuggestion;
