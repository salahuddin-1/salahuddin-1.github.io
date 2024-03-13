import { Box, Image, Text, VStack, useBreakpointValue } from "@chakra-ui/react";
import AppPageHeading from "../../../ui/components/AppPageHeading";
import AppMaterialButton from "../../../ui/components/AppMaterialButton";
import { useHomepageViewModel } from "src/lib/providers/HomepageViewModelProvider";
import AppPageSubheading from "src/lib/ui/components/AppPageSubheading";
import { Link } from "react-router-dom";
import { RoutePaths } from "src/lib/navigation/route_paths";
import AnimateOnLoad from "@components/AnimateOnLoad";
import LottieHeroAnimation from "../components/LottieHeroAnimation";
import ticTacToeimage from "@assets/tic_tac_toe_table.png";
import profilePhotoHero from "@assets/profile_photo_hero.jpeg";

const HeroSection = () => {
  const viewModel = useHomepageViewModel();

  const lottieWidth =
    useBreakpointValue({
      base: "200px",
      md: "250px",
      lg: "300px",
    }) ?? "250px";

  // The animation on load properties
  const animationOnLoadProps = viewModel.animationOnLoadProps;

  return (
    <Box
      display="flex"
      flexDirection={{
        base: "column",
        md: "row",
      }}
    >
      <Box
        justifyContent="center"
        flex="3"
        display="flex"
        flexDirection="column"
      >
        <AnimateOnLoad
          delay={animationOnLoadProps.delay()}
          translateY={animationOnLoadProps.translateY}
        >
          <AppPageHeading>Paint your ideas in pixels</AppPageHeading>
        </AnimateOnLoad>

        <Box height="30px" />

        <AnimateOnLoad
          delay={animationOnLoadProps.delay()}
          translateY={animationOnLoadProps.translateY}
        >
          <AppPageSubheading>
            We help small-to-medium companies and agencies build highly scalable
            softwares and help them do more in less time
          </AppPageSubheading>
        </AnimateOnLoad>

        <Box height="25px" />

        <AnimateOnLoad
          delay={animationOnLoadProps.delay()}
          translateY={animationOnLoadProps.translateY}
        >
          <Link to={RoutePaths.WORK}>
            <AppMaterialButton onClick={() => {}}>
              View our portfolio
            </AppMaterialButton>
          </Link>
        </AnimateOnLoad>
      </Box>

      <Box height="75px" />
      <Box marginX="75px" width="0.05px" height="inherit" bg="white"></Box>

      {/* Profile Image and Designation */}
      <Box
        position="relative"
        flex="2"
        display="flex"
        justifyContent="center"
        alignItems="center"
        backgroundColor=""
      >
        {/* <AnimateOnLoad duration={1} delay={0.75} translateY={100}> */}
        <Image src={ticTacToeimage}></Image>
        {/* </AnimateOnLoad> */}

        <_ProfileImage />

        {/* <Box
          borderRadius="50%"
          top="30px"
          right="30px"
          position="absolute"
          boxShadow="-2px 5px 40px 0px rgba(250,250,250,0.25)"
          border="1px solid white"
          // boxSize="25%"
          // aspectRatio={1 / 1}
          height="10vw"
          width="10vw"
          bg="red"
        >
          <img src={profilePhotoHero}></img>
        </Box> */}
      </Box>
    </Box>
  );
};

const _ProfileImage = () => {
  const size = useBreakpointValue({
    base: "30%",
    sm: "25%",
    md: "45%",
    lg: "35%",
    "2xl": "20%",
  });

  const fontSizeTitle = useBreakpointValue({
    base: "20px",
    sm: "35px",
    md: "20px",
    lg: "35px",
    "2xl": "45px",
  });

  const fontSizeSubtitle = useBreakpointValue({
    base: "10px",
    sm: "15px",
    md: "10px",
    lg: "15px",
    "2xl": "20px",
  });

  return (
    <VStack
      alignItems={{
        base: "center",
        md: "end",
      }}
      top={{
        md: "45px",
      }}
      right={{
        md: "35px",
      }}
      position="absolute"
    >
      <Image
        src={profilePhotoHero}
        alt="Profile Photo Hero"
        borderRadius="full"
        height={size}
        width={size}
        aspectRatio={1 / 1}
        objectFit="cover"
        boxShadow="-2px 5px 40px 0px rgba(250,250,250,0.3)"
        border="1px solid white"
      />

      <Box height="20px"></Box>

      <Text
        textAlign={{
          base: "center",
          md: "end",
        }}
        fontSize={fontSizeTitle}
        fontWeight="400"
      >
        Salahuddin Shaikh
      </Text>

      <Text
        textAlign={{
          base: "center",
          md: "end",
        }}
        fontSize={fontSizeSubtitle}
        fontWeight="400"
      >
        Software Engineer
      </Text>
    </VStack>
  );
};

export default HeroSection;
