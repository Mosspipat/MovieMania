import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;

export const GetCreateGuestSession = async () => {
  try {
    const res = await axios.get(
      "https://api.themoviedb.org/3/authentication/guest_session/new",
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
