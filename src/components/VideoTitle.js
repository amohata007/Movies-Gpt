import React from "react";

const VideoTitle = (props) => {
  const { title, overview } = props;
  return (
    <div className="w-screen h-screen md:py-48 py-24 md:px-16 px-6 absolute text-white bg-gradient-to-r from-black">
      <h1 className="md:text-4xl text-xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-2/5">{overview}</p>
      <div className="my-4 md:my-0">
        <button className="text-lg bg-white text-black md:p-4 p-2 md:px-12 px-4 rounded-lg hover:opacity-75">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block text-lg ml-2 bg-gray-500 rounded-lg p-4 px-8 hover:opacity-75">
          ℹ️More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
