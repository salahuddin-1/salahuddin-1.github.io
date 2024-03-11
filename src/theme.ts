import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import "@fontsource/poppins";
import { AppColor } from "./domain/constants/AppColor";

export interface CustomTheme {
  config?: ThemeConfig;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    tableDivider: string;
    appDivider: string;
    footer: string;
    footerText: string;
    workTech: string;
    inputBorderColor?: string;

    // Add other color properties as needed
  };
  styles: {
    global: {
      "html, body": {
        bg: string;
        color: string;
      };
    };
  };
  fonts: {
    heading: string;
    body: string;
  };
}

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    primary: AppColor.BLACK,
    secondary: AppColor.WHITE,
    accent: AppColor.DARK_BLUE,
    tableDivider: AppColor.GRAY_300,
    appDivider: "#c1c1c1",
    footer: AppColor.BLACK,
    footerText: AppColor.DARK_GRAY,
    workTech: "#7F7F7F",
    inputBorderColor: "#ABABAB",
  },
  styles: {
    global: {
      "html, body": {
        bg: AppColor.BLACK,
        color: AppColor.WHITE,
      },
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
} as CustomTheme);

export default theme;
