import { Box, Input, InputGroup } from "@chakra-ui/react";
import { COLORS } from "../../../constants";
import { SearchIcon } from "@chakra-ui/icons";

type InputSearchSpecificProps = {
  borderWidth?: string;
};

type InputSearchProps = {
  value?: string;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  disabled?: boolean;
  autoFocus?: boolean;
  className?: string;
  maxLength?: number;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const InputSearch = (
  props: InputSearchProps & InputSearchSpecificProps
) => {
  const {
    onChange,
    value,
    onBlur,
    onFocus,
    onKeyDown,
    onKeyUp,
    placeholder,
    borderWidth = "4px",
    ...others
  } = props;

  return (
    <Box
      position="absolute"
      padding="0px 12px 10px"
      borderLeft={`${borderWidth} solid white`}
      borderRight={`${borderWidth} solid white`}
      borderBottom={`${borderWidth} solid white`}
      borderRadius="0px 0px 52px 52px"
      width="full"
      maxWidth="600px"
      bottom="0"
      transform="translate(0,100%)"
      backgroundColor={COLORS.Primary_Navy_Blue}
      shadow="dark-lg"
    >
      <InputGroup position="relative">
        <Input
          className=""
          size="lg"
          textAlign="center"
          color="black"
          backgroundColor="white"
          border="0px solid white"
          borderRadius="0px 0px 40px 40px"
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          placeholder={placeholder}
          value={value}
          padding="0px 40px"
          {...others}
        />
        <SearchIcon
          color={COLORS.Secondary_Indigo}
          boxSize="24px"
          position="absolute"
          right="32px"
          bottom="12px"
        />
      </InputGroup>
    </Box>
  );
};
