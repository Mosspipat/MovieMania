import axios from "axios";

const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

export const GetSearchMovieDetailInformation = async (name: string) => {
  try {
    const res = await axios(
      `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          accept: "application/json",
        },
      },
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
