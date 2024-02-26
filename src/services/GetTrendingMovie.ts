import axios from "axios";
const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

const language = "en-US";
export const GetTrendingMovie = async () => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?language=${language}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching movie list", error);
  }
};
