import { Button, ButtonGroup, Flex, SystemStyleObject } from "@chakra-ui/react";
import { COLORS } from "../../../constants";

export const AuthPanel = () => {
  const hoverCss: SystemStyleObject = {
    backgroundColor: "white",
    color: `transparent`,
    transform: `scale(1.05)`,
    border: `2px solid ${COLORS.Tertiary_Magenta}`,
    textShadow: `-4px -2px 1px  black , 4px 4px 5px rgba(0,0,0,0.4);`,
    boxShadow: `inset 0px 0px 2px 2px rgba(0, 0, 0, 0.4)`,
  };

  return (
    <Flex
      position="absolute"
      top={0}
      transform={`translate(0%,25%)`}
      right={2}
      gap={2}
    >
      <ButtonGroup>
        <Button
          color={"transparent"}
          textShadow={`0px 0px 0px white`}
          backgroundColor={COLORS.Accent_Purple}
          transition={`0.5s ease-in`}
          borderRadius={24}
          border={"2px solid white"}
          _hover={hoverCss}
        >
          Login
        </Button>
        <Button
          color={"transparent"}
          textShadow={`0px 0px 0px white`}
          backgroundColor={COLORS.Accent_Purple}
          transition={`0.5s ease-in`}
          borderRadius={24}
          border={"2px solid white"}
          _hover={hoverCss}
        >
          Log out
        </Button>
      </ButtonGroup>
    </Flex>
  );
};
