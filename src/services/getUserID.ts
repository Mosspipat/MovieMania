import axios from "axios";
const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
console.log("🚀: ~ accessToken:", accessToken);

export const GetUserID = async () => {
  try {
    const res = await axios.get(
      "https://api.themoviedb.org/3/account/20948963",
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
