import axios from "axios";
const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

type GetAllMovieList = {
  language?: string;
  page?: number;
};

export const GetPopularMovieList = async (props: GetAllMovieList) => {
  const { language = "en-US", page = 1 } = props;

  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?language=${language}&page=${page}`,
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
    console.error("Error fetching popular movie list", error);
  }
};
