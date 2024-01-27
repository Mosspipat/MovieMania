import { Tag as MyTag } from "@chakra-ui/react";

type TagProps = {
  label: string;
};

export const Tag = (props: TagProps) => {
  const { label } = props;
  return (
    <MyTag backgroundColor="red" color="white">
      {label}
    </MyTag>
  );
};
