import { Box, useTheme } from "@chakra-ui/react";
import { CustomTheme } from "../../../theme";
import { AppColor } from "src/domain/constants/AppColor";

interface Props {
  children: string | JSX.Element;
  onClick: () => void | null;
  type?: "button" | "submit" | "reset";
  height?: string;
  width?: string;
  isDisabled?: boolean;
}

const AppMaterialButton = (props: Props) => {
  const theme = useTheme<CustomTheme>();

  return (
    <Box
      disabled={props.isDisabled}
      type={props.type}
      onClick={() => props.onClick()}
      width={props.width === undefined ? "fit-content" : props.width}
      height={props.height}
      paddingX="25px"
      paddingY="10px"
      backgroundColor={theme.colors.secondary}
      // border={`0.1px solid ${AppColor.LIGHT_GRAY_100}`}
      borderRadius="10px"
      textColor={theme.colors.primary}
      boxSizing="border-box"
      fontWeight={400}
      fontSize="13px"
      as="button"
      cursor={props.isDisabled ? "not-allowed" : "pointer"}
    >
      {props.children}
    </Box>
  );
};

export default AppMaterialButton;
