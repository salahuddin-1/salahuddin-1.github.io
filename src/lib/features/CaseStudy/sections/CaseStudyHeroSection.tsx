import { Box, useTheme, Text } from "@chakra-ui/react";
import AnimateOnLoad from "@components/AnimateOnLoad";
import AppPageHeading from "@components/AppPageHeading";
import { CaseStudyProp } from "@datautils/case_studies";
import { useCaseStudyViewModel } from "src/lib/providers/CaseStudyProvider";
import { CustomTheme } from "src/theme";

interface CaseStudyHeroSectionProps {
  caseStudyProp: CaseStudyProp;
}

const CaseStudyHeroSection = (props: CaseStudyHeroSectionProps) => {
  const viewmodel = useCaseStudyViewModel();
  const animationOnLoadProps = viewmodel.animationOnLoadProps;

  console.log(props.caseStudyProp?.projectName ?? "");

  return (
    <Box>
      <AnimateOnLoad
        delay={animationOnLoadProps.delay()}
        translateY={animationOnLoadProps.translateY}
      >
        <Text
          // textColor={theme.colors.workTech}
          fontSize={12}
          fontWeight="300"
        >
          Case study
        </Text>
      </AnimateOnLoad>

      <Box height="15px" />

      <AnimateOnLoad
        delay={animationOnLoadProps.delay()}
        translateY={animationOnLoadProps.translateY}
      >
        <AppPageHeading>
          {props.caseStudyProp?.projectName ?? ""}
        </AppPageHeading>
      </AnimateOnLoad>
    </Box>
  );
};

export default CaseStudyHeroSection;
