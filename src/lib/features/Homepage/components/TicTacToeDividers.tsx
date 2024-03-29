import {
  Box,
  Flex,
  ResponsiveValue,
  useBreakpointValue,
  useTheme,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { AppColor } from "src/domain/constants/AppColor";
import {
  getNextMargin,
  getPrevMargin,
} from "src/lib/utils/get_assymetric_margins";
import { CustomTheme } from "src/theme";

interface Props {
  height: ResponsiveValue<number | (string & {})>;
}

const TicTacToeDividers = (props: Props) => {
  const noOfVDividers =
    useBreakpointValue({
      base: 4,
      md: 7,
      lg: 4,
      xl: 8,
      "2xl": 12,
    }) ?? 0;

  const noOfHDividers =
    useBreakpointValue({
      base: 5,
      lg: 5,
      xl: 5,
    }) ?? 0;

  const vDividersList: ReactElement[] = [];
  const hDividersList: ReactElement[] = [];

  let topMargin: number = 13;
  let bottomMargin: number = -10;

  let leftMargin: number = 13;
  let rightMargin: number = -10;

  const verticalDividers = () => {
    for (let index = 0; index < noOfVDividers; index++) {
      topMargin = getPrevMargin(topMargin);
      bottomMargin = getNextMargin(bottomMargin);

      vDividersList.push(
        <Box
          key={index}
          width="0.1px"
          // bg={theme.colors.tableDivider}
          bg={AppColor.LIGHT_GRAY_100}
          marginTop={topMargin}
          marginBottom={bottomMargin}
        ></Box>
      );
    }

    return vDividersList;
  };

  const horizontalDividers = () => {
    for (let index = 0; index < noOfHDividers; index++) {
      leftMargin = getPrevMargin(leftMargin);
      rightMargin = getNextMargin(rightMargin);

      hDividersList.push(
        <Box
          key={index}
          height="0.1px"
          // bg={theme.colors.tableDivider}
          bg={AppColor.LIGHT_GRAY_100}
          marginLeft={leftMargin}
          marginRight={rightMargin}
        ></Box>
      );
    }

    return hDividersList;
  };

  const theme = useTheme<CustomTheme>();

  return (
    <Box position="relative" height={props.height}>
      <Flex bg="" justifyContent="space-evenly" height="100%">
        {verticalDividers()}
      </Flex>

      <Flex
        position="absolute"
        flexDir="column"
        top="0px"
        width="100%"
        height="100%"
        justifyContent="space-evenly"
      >
        {horizontalDividers()}
      </Flex>
    </Box>
  );
};

export default TicTacToeDividers;
