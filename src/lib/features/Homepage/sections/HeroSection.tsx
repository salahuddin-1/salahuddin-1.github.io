import {
  Box,
  Button,
  HStack,
  Image,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import AppPageHeading from "../../../ui/components/AppPageHeading";
import AppMaterialButton from "../../../ui/components/AppMaterialButton";
import { useHomepageViewModel } from "src/lib/providers/HomepageViewModelProvider";
import AppPageSubheading from "src/lib/ui/components/AppPageSubheading";
import { Link } from "react-router-dom";
import { RoutePaths } from "src/lib/navigation/route_paths";
import AnimateOnLoad from "@components/AnimateOnLoad";
import ticTacToeimage from "@assets/tic_tac_toe_table.png";
import profilePhotoHero from "@assets/profile_photo_5.jpeg";
import { AppColor } from "src/domain/constants/AppColor";
import LottieGreenSignal from "../components/LottieGreenSignal";

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
        lg: "row",
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
          <AppPageHeading>
            Transform Your Ideas into User-friendly Mobile Applications
          </AppPageHeading>
        </AnimateOnLoad>

        <Box height="30px" />

        <AnimateOnLoad
          delay={animationOnLoadProps.delay()}
          translateY={animationOnLoadProps.translateY}
        >
          {/* <AppPageSubheading fontSize={17} letterSpacing={0}>
            Need a mobile app for Android and iOS? Or a web app for all
            browsers? A custom software system?
          </AppPageSubheading>

          <Box height="40px" />

          <AppPageSubheading fontSize={17} letterSpacing={0}>
            As a Mobile App Developer Expert, I solve business problems with
            software. I help traditional businesses go online by building
            customized mobile apps tailored to their needs.
          </AppPageSubheading>

          <Box height="40px" /> */}

          <AppPageSubheading fontSize={15} letterSpacing={0}>
            Let me guide you in developing high-quality, robust, scalable, and
            secure mobile apps with a user-centric design approach, putting the
            end-user first.
          </AppPageSubheading>
        </AnimateOnLoad>

        <Box height="35px" />

        <AnimateOnLoad
          delay={animationOnLoadProps.delay()}
          translateY={animationOnLoadProps.translateY}
        >
          <Link to={RoutePaths.WORK}>
            <AppMaterialButton onClick={() => {}}>
              View my portfolio
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
        height="100%"
      >
        {/* <AnimateOnLoad duration={1} delay={0.75} translateY={100}> */}
        <Image src={ticTacToeimage}></Image>
        <_ProfileImage />
        {/* </AnimateOnLoad> */}
      </Box>
    </Box>
  );
};

const _ProfileImage = () => {
  const viewModel = useHomepageViewModel();

  const size = useBreakpointValue({
    base: "30%",
    sm: "25%",
    lg: "35%",
    "2xl": "20%",
  });

  const fontSizeTitle = useBreakpointValue({
    base: "20px",
    sm: "35px",
    lg: "35px",
    "2xl": "45px",
  });

  const fontSizeSubtitle = useBreakpointValue({
    base: "10px",
    sm: "15px",
    lg: "15px",
    "2xl": "20px",
  });

  return (
    <VStack
      alignItems={{
        base: "center",
        lg: "end",
      }}
      top={{
        lg: "45px",
      }}
      right={{
        lg: "35px",
      }}
      position="absolute"
      bg=""
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
        border="4px solid white"
      />

      <Box height="20px"></Box>

      <Text
        textAlign={{
          base: "center",
          lg: "end",
        }}
        fontSize={fontSizeTitle}
        fontWeight="400"
      >
        Salahuddin Shaikh
      </Text>

      {/* Cross-platform Mobile App Developer */}

      <Text
        textAlign={{
          base: "center",
          lg: "end",
        }}
        fontSize={fontSizeSubtitle}
        fontWeight="400"
      >
        Software Engineer
      </Text>

      <Box height="20px"></Box>

      <HStack>
        <HStack
          // paddingX="20px"
          paddingRight="20px"
          paddingY="3px"
          borderRadius="30px"
          border={`1px solid ${AppColor.LIGHT_GRAY_100}`}
        >
          <Box height="30px" width="30px">
            <LottieGreenSignal width="40px" />
          </Box>

          <Box width="5px"></Box>

          <Text
            textAlign={{
              base: "center",
              lg: "end",
            }}
            fontSize="11px"
            fontWeight="200"
          >
            Open to work
          </Text>
        </HStack>

        <Box width="20px"></Box>

        <Text
          textAlign={{
            base: "center",
            lg: "end",
          }}
          fontSize="14px"
          fontWeight="200"
        >
          Mumbai, India
        </Text>

        <Text
          textAlign={{
            base: "center",
            lg: "end",
          }}
          fontSize="14px"
          fontWeight="200"
        >
          {viewModel.getLocalTime()} IST
        </Text>
      </HStack>
    </VStack>
  );
};

export default HeroSection;
