import styled from "styled-components";
import { COLORS } from "../../constants";

export const StyledCard = styled.div`
  /* Set the card container to flex and column direction */
  display: flex;
  flex-direction: column;
  cursor: pointer;

  /* Set the height of the card to auto */
  height: auto;

  .container {
    position: relative;
    overflow: hidden;
    .overview {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 2em;
      color: white;
      background-color: ${COLORS.Tertiary_Magenta};
      transform: translateY(101%);
      transition: transform 0.3s ease-in;
      z-index: 1;
    }
  }

  /* Adjust hover behavior as per your requirement */
  .container:hover .overview {
    transform: translateY(0%);
  }
`;
