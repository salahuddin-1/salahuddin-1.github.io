import { Text } from "@chakra-ui/react";

interface Props {
  children: string;
  fontSize?: number;
  fontColor?: string;
  letterSpacing?: number;
}

const AppPageSubheading = (props: Props) => {
  return (
    <Text
      letterSpacing={props.letterSpacing ?? 1}
      fontSize={props.fontSize ?? 14}
      color={props.fontColor}
    >
      {props.children}
    </Text>
  );
};

export default AppPageSubheading;
