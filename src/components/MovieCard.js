import React from "react";
import { IMAGE_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-48 m-2 hover:scale-150 cursor-pointer">
      <img alt="movie_card" src={IMAGE_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
