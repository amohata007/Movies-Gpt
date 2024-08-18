import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = ({ movieId }) => {
  const dispatch = useDispatch();
  const videoBg = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);

    const trailer = json.results.filter(
      (video) => video.name === "Official Trailer"
    );
    dispatch(addTrailerVideo(trailer[0]));
  };
  useEffect(() => {
    videoBg();
  }, []);
};

export default useMovieTrailer;
