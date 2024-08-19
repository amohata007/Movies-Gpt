import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMoviesSuggestion from "./GptMoviesSuggestion";
import { GPT_SEARCH_IMAGE } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={GPT_SEARCH_IMAGE} alt="Bg_Image" />
      </div>
      <GptSearchBar />
      <GptMoviesSuggestion />
    </div>
  );
};

export default GptSearch;
