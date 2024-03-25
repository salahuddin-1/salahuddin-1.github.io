import { Box, VStack, Image, Text } from "@chakra-ui/react";
import AnimateOnLoad from "@components/AnimateOnLoad";
import AppPageHeading from "@components/AppPageHeading";
import AppSectionHeading from "@components/AppSectionHeading";
import { useAboutViewModel } from "src/lib/providers/AboutViewModelProvider";
import profilePhotoHero from "@assets/profile_photo_5.jpeg";
import { SectionSpacing } from "@components/SectionSpacing";
import EmploymentHistorySection from "./EmploymentHistorySection";

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

      <Box
        flexDir={{
          base: "column-reverse",
          md: "row",
        }}
        display="flex"
        minHeight={{
          md: "300px",
          lg: "500px",
        }}
        bg=""
      >
        <Box
          flex={5}
          bg=""
          display="flex"
          alignItems="start"
          // alignItems="start"
        >
          <VStack alignItems="start">
            <Text>
              Hi, I'm Salahuddin Shaikh, the founder of an agency that helps
              small to medium-sized businesses go online by creating custom
              Software Systems using the latest technologies. I have 5 years of
              experience in developing cross-platform mobile applications with
              Flutter.
            </Text>

            <Box height="30px" />

            <AppSectionHeading>What I do?</AppSectionHeading>

            <Box height="10px" />

            <Text>
              I help people solve their business problems with software. I
              assist traditional offline businesses in transitioning online by
              developing customized Software Systems tailored to their needs.
            </Text>
          </VStack>
        </Box>

        <Box height="60px" />

        <_StackImage />
      </Box>

      {/* <SectionSpacing /> */}

      {/* <EmploymentHistorySection /> */}
    </Box>
  );
};

export default AboutHeroSection;

// ----------------------------------------------- PRIVATE COMPONENTS -------------------------------------------------

const _StackImage = () => {
  return (
    <Box
      height={{
        base: "60vw",
        sm: "80vw",
        md: "auto",
      }}
      // height=""
      justifyContent="center"
      alignItems="center"
      pos="relative"
      display="flex"
      flex={{
        md: 5,
      }}
      bg=""
    >
      <Image
        paddingX="50px"
        objectFit="cover"
        position="absolute"
        src={profilePhotoHero}
      />

      <Box width="50%" bg="pink"></Box>

      <Box height="100%" width="50%" bg="white"></Box>
    </Box>
  );
};
