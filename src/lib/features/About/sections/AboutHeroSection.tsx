import { Box } from "@chakra-ui/react";
import AnimateOnLoad from "@components/AnimateOnLoad";
import AppPageHeading from "@components/AppPageHeading";
import { SectionSpacing } from "@components/SectionSpacing";
import { useAboutViewModel } from "src/lib/providers/AboutViewModelProvider";
import { useHomepageViewModel } from "src/lib/providers/HomepageViewModelProvider";

const AboutHeroSection = () => {
  const viewModel = useAboutViewModel();

  const animationOnLoadProps = viewModel.animationOnLoadProps;

  return (
    <Box>
      <AnimateOnLoad
        delay={animationOnLoadProps.delay()}
        translateY={animationOnLoadProps.translateY}
      >
        <AppPageHeading>About me</AppPageHeading>
      </AnimateOnLoad>
      <SectionSpacing />
    </Box>
  );
};

export default AboutHeroSection;
