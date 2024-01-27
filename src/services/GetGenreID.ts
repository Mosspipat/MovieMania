import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;

export const GetGenreIDS = async () => {
  try {
    const res = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?language=en",
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          Accept: "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
};
