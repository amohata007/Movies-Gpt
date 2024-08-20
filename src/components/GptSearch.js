import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMoviesSuggestion from "./GptMoviesSuggestion";
import { GPT_SEARCH_IMAGE } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className="absolute -z-10">
        <img
          className="h-screen object-cover md:h-full"
          src={GPT_SEARCH_IMAGE}
          alt="Bg_Image"
        />
      </div>
      <div className="pt-[30%] md:pt-0">
        <GptSearchBar />
        <GptMoviesSuggestion />
      </div>
    </>
  );
};

export default GptSearch;
