import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;

export const getAllMovieList = async () => {
  try {
    const res = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching movie list", error);
  }
};
