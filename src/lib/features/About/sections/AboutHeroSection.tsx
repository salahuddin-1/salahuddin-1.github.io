import { Box, VStack, Image, Text, useTheme } from "@chakra-ui/react";
import AnimateOnLoad from "@components/AnimateOnLoad";
import AppPageHeading from "@components/AppPageHeading";
import AppSectionHeading from "@components/AppSectionHeading";
import { useAboutViewModel } from "src/lib/providers/AboutViewModelProvider";
import profilePhotoHero from "@assets/profile_photo_5.jpeg";
import { SectionSpacing } from "@components/SectionSpacing";
import { CustomTheme } from "src/theme";
import AppMaterialButton from "@components/AppMaterialButton";
import { Link } from "react-router-dom";
import { AppConstants } from "src/domain/constants/AppConstants";

const AboutHeroSection = () => {
  const viewModel = useAboutViewModel();
  const theme = useTheme<CustomTheme>();

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
              Hi, I'm Salahuddin Shaikh, I have 5 years of experience in Cross
              Platform Mobile Application Development using Flutter and have
              helped many businesses by providing them a good quality software
              with great User Experience. I have 3 years of corporate experience
              working on Enterprise Banking applications and on complex
              algorithms and complex problems. Throughout my career, I've
              successfully developed 13 working applications, showcasing my
              expertise in the field. You're invited to explore all of them in
              my portfolio.
            </Text>

            <Box height="30px" />

            <Text>
              Throughout my journey in Capital Bank of Jordan, I've engineered
              17+ modules and their submodules, including the complex Western
              Union module, where I developed dynamic UI strategies utilizing
              the polymorphism principle. Besides mobile development, I've
              ventured into web development, honing my skills in React with
              TypeScript. I've launched my portfolio website and crafted web
              solutions using Firebase as the backend. I've also dabbled in
              UI/UX design, creating websites and mobile apps for various
              clients. In my journey, I've embraced Python for automating tasks
              and generating boilerplate code. Recently, I've delved into
              Backend Development using Nest JS, completing courses
            </Text>

            <Box height="30px" />

            <Text>
              During my engineering days, I launched my first product and
              developed an E-commerce app. Additionally, I created a private
              social media app for my college, incorporating unique features
              like the "Banker's algorithm" for authentication.
            </Text>

            {/* <Box height="30px" /> */}

            {/* <AppSectionHeading>What I do?</AppSectionHeading> */}

            {/* <Box height="10px" /> */}

            {/* <Text>
              I help people solve their business problems with software. I
              assist traditional offline businesses in transitioning online by
              developing customized Software Systems tailored to their needs.
            </Text> */}

            <Box height="30px" />

            <_GetToKnowMeButton />
          </VStack>
        </Box>

        <Box height="60px" />

        <_StackImage />
      </Box>
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

export const _GetToKnowMeButton = () => {
  return (
    <Link to={AppConstants.LINKEDIN_LINK} target="_blank">
      <AppMaterialButton onClick={() => {}}>Get to know me</AppMaterialButton>
    </Link>
  );
};
