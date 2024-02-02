import axios from "axios";

export const GetTrendingTVList = async () => {
  const language = "en-US";

  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/trending/tv/day?language=${language}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjExZjE2NWM5YWZhYTEwOWRlNzY0MGNiZDZhZDE3MyIsInN1YiI6IjY1YjQ5NDQ5MTI0MjVjMDBjYTQ3ZDhlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BOPW8y1BSHQorGbyLiz12rsP0RcYPs0y9URlCrN7O9g",
        },
      }
    );

    return res.data;
  } catch (error) {
    console.error("Error fetching popular TV list", error);
  }
};
