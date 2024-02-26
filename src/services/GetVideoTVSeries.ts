import axios from "axios";

const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

export const GetVideoTVSeries = async (TVSeries_id: number) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/tv/${TVSeries_id}/videos?language=en-US`,
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
    console.error(error);
  }
};
