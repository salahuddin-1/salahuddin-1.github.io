import { useTheme } from "@chakra-ui/react";
import { CustomTheme } from "../../../theme";

interface AppDividerProps {
  color?: string;
}

const AppDivider = (props: AppDividerProps) => {
  const theme = useTheme<CustomTheme>();

  const dividerStyle = {
    height: "1px",
    width: "100%",
    backgroundColor: props.color ?? theme.colors.appDivider,
  };

  return <div style={dividerStyle}></div>;
};

export default AppDivider;
