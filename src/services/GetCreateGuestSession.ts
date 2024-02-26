import axios from "axios";
import { UseGuestSessionType } from "../hooks/type";
const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

export const GetCreateGuestSession = async () => {
  try {
    const res = await axios.get(
      "https://api.themoviedb.org/3/authentication/guest_session/new",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: "application/json",
        },
      },
    );
    return res.data as UseGuestSessionType;
  } catch (error) {
    console.error("Error fetching data", error);
  }
};
