import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;

export const getUserID = async () => {
  try {
    const res = await axios.get(
      "https://api.themoviedb.org/3/account/20948963",
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
