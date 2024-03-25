import { SectionSpacing } from "@components/SectionSpacing";
import BasePage from "src/lib/base/BasePage";
import { useAboutViewModel } from "src/lib/providers/AboutViewModelProvider";
import AboutHeroSection from "./sections/AboutHeroSection";
import { Box, Image, Text } from "@chakra-ui/react";
import profilePhotoHero from "@assets/profile_photo_5.jpeg";

const About = () => {
  const viewModel = useAboutViewModel();

  return (
    <BasePage>
      {/* About Hero Section */}
      <AboutHeroSection />
      <SectionSpacing />

      <Box
        flexDir="row"
        display="flex"
        minHeight="500px"
        // height="500px"

        bg=""
      >
        <Box flex={5} bg="red" display="flex" alignItems="center">
          <Text>
            Hi, I'm Salahuddin Shaikh, the founder of an agency that helps small
            to medium-sized businesses go online by creating custom Software
            Systems using the latest technologies. I have 5 years of experience
            in developing cross-platform mobile applications with Flutter. I've
            built apps in many domains and recently served as a team lead at
            Capital Bank of Jordan for almost 3 years.
          </Text>
        </Box>

        <_StackImage />
      </Box>
    </BasePage>
  );
};

export const _StackImage = () => {
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      pos="relative"
      display="flex"
      flex={5}
      bg="pink"
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

export default About;
