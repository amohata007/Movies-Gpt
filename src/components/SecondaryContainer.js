import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    //movies.nowPlayingMovies resolve a bug instead of just movies
    movies.nowPlayingMovies &&
    movies.popularMovies &&
    movies.trendingMovies &&
    movies.upcomingMovies && (
      <div className=" bg-black">
        <div className="md:-mt-72 md:pl-12 pl-2 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies.trendingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
