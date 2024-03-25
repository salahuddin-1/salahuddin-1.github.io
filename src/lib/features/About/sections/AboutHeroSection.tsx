import { Box } from "@chakra-ui/react";
import AnimateOnLoad from "@components/AnimateOnLoad";
import AppPageHeading from "@components/AppPageHeading";
import { useAboutViewModel } from "src/lib/providers/AboutViewModelProvider";

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
    </Box>
  );
};

export default AboutHeroSection;
