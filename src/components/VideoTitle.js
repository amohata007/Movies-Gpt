import React from "react";

const VideoTitle = (props) => {
  const { title, overview } = props;
  return (
    <div className="w-screen aspect-video py-72 px-16 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-2/5">{overview}</p>
      <div className="">
        <button className="text-lg bg-white text-black p-4 px-12 rounded-lg hover:opacity-75">
          ▶️ Play
        </button>
        <button className="text-lg ml-2 bg-gray-500 rounded-lg p-4 px-8 hover:opacity-75">
          ℹ️More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
