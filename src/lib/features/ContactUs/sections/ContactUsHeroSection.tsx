import { Box, Flex, Text, useTheme } from "@chakra-ui/react";
import AnimateOnLoad from "@components/AnimateOnLoad";
import { useContactUsViewModel } from "src/lib/providers/ContactUsViewModelProvider";
import AppPageHeading from "src/lib/ui/components/AppPageHeading";
import AppPageSubheading from "src/lib/ui/components/AppPageSubheading";
import AnimationOnLoadProperties from "src/lib/utils/animation_on_load_properties";
import { CustomTheme } from "src/theme";

const ContactUsHeroSection = () => {
  const theme = useTheme<CustomTheme>();

  const contactUsVM = useContactUsViewModel();
  const animationOnLoadProps = contactUsVM.animationOnLoadProps;

  return (
    <Flex flexDirection="column">
      <AnimateOnLoad
        delay={animationOnLoadProps.delay()}
        translateY={animationOnLoadProps.translateY}
      >
        <Text fontSize={12} fontWeight="300">
          Get in touch
        </Text>
      </AnimateOnLoad>

      <Box height="15px" />

      <AnimateOnLoad
        delay={animationOnLoadProps.delay()}
        translateY={animationOnLoadProps.translateY}
      >
        <AppPageHeading>
          Let's work together and create something great
        </AppPageHeading>
      </AnimateOnLoad>

      <Box height="30px" />

      <AnimateOnLoad
        delay={animationOnLoadProps.delay()}
        translateY={animationOnLoadProps.translateY}
      >
        <AppPageSubheading>
          Take the first step by filling out the form below, and I'll reach back
          to you within 2 business days.
        </AppPageSubheading>
      </AnimateOnLoad>
    </Flex>
  );
};

export default ContactUsHeroSection;
