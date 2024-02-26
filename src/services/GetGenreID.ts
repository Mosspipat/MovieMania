import axios from "axios";
const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

export const GetGenreIDS = async () => {
  try {
    const res = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?language=en",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: "application/json",
        },
      },
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
};
