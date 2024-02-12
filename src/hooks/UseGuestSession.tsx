import { useState } from "react";

import { GetCreateGuestSession } from "../services";
import { UseGuestSessionType } from "./type";

export const UseGuestSession = () => {
  const [guestSessionId, setGuestSessionId] = useState<UseGuestSessionType>(
    {} as UseGuestSessionType
  );

  const fetchSession = async () => {
    try {
      const sessionId = await GetCreateGuestSession();
      console.log("test guest session");
      localStorage.setItem("guestSessionId", sessionId?.guest_session_id || "");
      setGuestSessionId(sessionId as UseGuestSessionType);
    } catch (error) {
      console.error("Error fetching guest session:", error);
    }
  };

  return { guestSessionId, fetchSession };
};
