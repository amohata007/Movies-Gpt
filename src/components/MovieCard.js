import React from "react";
import { IMAGE_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 m-2">
      <img alt="movie_card" src={IMAGE_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
