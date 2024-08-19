import React from "react";

const GptSearchBar = () => {
  return (
    <div className="pt-24 flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12">
        <input
          type="text"
          className=" m-4 p-4 col-span-9"
          placeholder="What do you want to watch today?"
        ></input>
        <button className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
