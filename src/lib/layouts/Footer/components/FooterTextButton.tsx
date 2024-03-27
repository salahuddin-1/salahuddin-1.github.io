import { useTheme, Text } from "@chakra-ui/react";
import { CustomTheme } from "src/theme";

export interface FooterTextButtonProps {
  children?: string;
  onClick: () => void;
  fontSize?: number | string;
  label?: string;
}

const FooterTextButton = ({
  children,
  onClick,
  fontSize = 12,
}: FooterTextButtonProps) => {
  const theme = useTheme<CustomTheme>();

  return (
    <Text
      cursor="pointer"
      onClick={() => {
        onClick();
      }}
      color={theme.colors.accent}
      letterSpacing={1}
      fontSize={fontSize}
    >
      {children}
    </Text>
  );
};

export default FooterTextButton;
