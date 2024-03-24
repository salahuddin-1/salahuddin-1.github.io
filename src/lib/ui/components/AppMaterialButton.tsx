import { Box, useTheme } from "@chakra-ui/react";
import { CustomTheme } from "../../../theme";
import { AppColor } from "src/domain/constants/AppColor";
import { motion } from "framer-motion";

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

  // return (
  //   <motion.div
  //     style={{
  //       backgroundColor: theme.colors.secondary,
  //       width: props.width === undefined ? "fit-content" : props.width,
  //       borderRadius: "10px",
  //       color: AppColor.BLACK,
  //     }}
  //     whileHover={{
  //       backgroundColor: theme.colors.primary,
  //       transition: { duration: 0.1 },
  //       borderRadius: "10px",
  //       border: `0.1px solid ${AppColor.LIGHT_GRAY_100}`,
  //       color: AppColor.WHITE,
  //       // scale: 1.09,
  //       // translateY: 20,

  //       // transition: { duration: 0.5 },
  //     }}
  //   >
  //     <Box
  //       disabled={props.isDisabled}
  //       type={props.type}
  //       onClick={() => props.onClick()}
  //       width={props.width === undefined ? "fit-content" : props.width}
  //       height={props.height}
  //       paddingX="25px"
  //       paddingY="10px"
  //       // backgroundColor={theme.colors.secondary}
  //       // border={`0.1px solid ${AppColor.LIGHT_GRAY_100}`}
  //       borderRadius="10px"
  //       // textColor={theme.colors.primary}
  //       boxSizing="border-box"
  //       fontWeight={400}
  //       fontSize="13px"
  //       as="button"
  //       cursor={props.isDisabled ? "not-allowed" : "pointer"}
  //     >
  //       {props.children}
  //     </Box>
  //   </motion.div>
  // );
};

export default AppMaterialButton;
