import { Box, useTheme, Text } from "@chakra-ui/react";
import AnimateOnLoad from "@components/AnimateOnLoad";
import AppPageHeading from "@components/AppPageHeading";
import React from "react";
import { useCaseStudyViewModel } from "src/lib/providers/CaseStudyProvider";
import { CustomTheme } from "src/theme";

const CaseStudyHeroSection = () => {
  const viewmodel = useCaseStudyViewModel();
  const theme = useTheme<CustomTheme>();
  const animationOnLoadProps = viewmodel.animationOnLoadProps;

  return (
    <Box>
      <AnimateOnLoad
        delay={animationOnLoadProps.delay()}
        translateY={animationOnLoadProps.translateY}
      >
        <Text
          // textColor={theme.colors.workTech}
          fontSize={12}
          fontWeight="600"
        >
          Case study
        </Text>
      </AnimateOnLoad>

      <Box height="15px" />

      <AnimateOnLoad
        delay={animationOnLoadProps.delay()}
        translateY={animationOnLoadProps.translateY}
      >
        <AppPageHeading>Capital Bank of Jordan</AppPageHeading>
      </AnimateOnLoad>
    </Box>
  );
};

export default CaseStudyHeroSection;
