import { isUndefined } from "lodash";
import { BiSolidHappyBeaming, BiSolidMehAlt } from "react-icons/bi";
import { FaMeh, FaSmile } from "react-icons/fa";
import { HiEmojiSad } from "react-icons/hi";

export const UseScoreVisuals = () => {
  const colorScore = (score?: number) => {
    if (!isUndefined(score)) {
      if (score <= 2) {
        return `rgba(255, 0, 0, 1.0)`;
      } else if (score <= 4) {
        return `rgba(255, 165, 0, 1.0)`;
      } else if (score <= 6) {
        return `rgba(255, 255, 0, 1.0)`;
      } else if (score <= 8) {
        return `rgba(144, 238, 144, 1.0)`;
      } else if (score <= 10) {
        return `rgba(0, 255, 0, 1.0)`;
      }
    }
  };

  const emojiScore = (score?: number) => {
    if (!isUndefined(score)) {
      if (score <= 2) {
        return <HiEmojiSad />;
      } else if (score <= 4) {
        return <BiSolidMehAlt />;
      } else if (score <= 6) {
        return <FaMeh />;
      } else if (score <= 8) {
        return <FaSmile />;
      } else if (score <= 10) {
        return <BiSolidHappyBeaming />;
      }
    }
  };

  return { colorScore, emojiScore };
};
