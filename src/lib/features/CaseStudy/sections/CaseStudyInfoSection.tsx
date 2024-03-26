import { Box, Image, VStack, Text, HStack } from "@chakra-ui/react";
import profilePhotoHero from "@assets/projects/capital_1.png";
import { DeviceTypeEnum } from "src/domain/enums/device_type_enum";
import ticTacToeimage from "@assets/tic_tac_toe_table.png";
import { AppColor } from "src/domain/constants/AppColor";
import AppDivider from "@components/AppDivider";

const CaseStudyInfoSection = () => {
  return (
    <Box>
      <VStack bg="red" alignItems="start">
        {/* Index */}
        <_IndexComponent />

        <Box
          height={{
            base: "30vw",
            sm: "70px",
            md: "20px",
          }}
        />

        <Box
          display="flex"
          // alignItems="center"
          alignItems={{
            base: "center",
            md: "start",
          }}
          flexDirection={{
            base: "column",
            md: "row",
            // md: "row-reverse", // on odd index
          }}
        >
          {/* Project Image */}
          <_ImageComponent />

          <Box
            height={{
              base: "40vw",
              sm: "100px",
              md: "50px",
            }}
          />

          {/* Feature Description */}
          <_FeatureDescription />
        </Box>

        <Box height="50px" />

        <AppDivider
        // color={AppColor.LIGHT_GRAY_100}
        />
      </VStack>
    </Box>
  );
};

export default CaseStudyInfoSection;

// ----------------------------------------------- PRIVATE COMPONENTS -------------------------------------------------

const _IndexComponent = () => {
  return (
    <Text fontSize="35px" bg="green">
      01
    </Text>
  );
};

const _ImageComponent = () => {
  return (
    <Box
      bg="orange"
      maxHeight="70vh"
      height={{
        md: "35vw",
        lg: "40vw",
      }}
      flex={1}
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {/* Tic Tac Toe Image */}
      <Image
        bg="blue"
        objectFit="contain"
        height={{
          base: "100%",
          sm: "450px",
          md: "100%",
        }}
        src={ticTacToeimage}
        alt="tic-tac-toe"
      />

      {/* UI Design Image */}
      <Image
        marginX={{
          md: "60px",
          lg: "0px",
        }}
        height={{
          base: "160%",
          sm: "120%",
          md: "100%",
        }}
        position="absolute"
        objectFit="fill"
        src={profilePhotoHero}
        alt="profile"
        borderRadius={{
          // RESPONSIVE
          base: "30px",
          sm: "30px",
          md: "20px",
          lg: "30px",
          "2xl": "60px",
        }}
        border={{
          // RESPONSIVE
          base: `6px solid ${AppColor.LIGHT_GRAY_100}`,
          sm: `7px solid ${AppColor.LIGHT_GRAY_100}`,
          md: `7px solid ${AppColor.LIGHT_GRAY_100}`,
          lg: `9px solid ${AppColor.LIGHT_GRAY_100}`,
          "2xl": `15px solid ${AppColor.LIGHT_GRAY_100}`,
        }}
      />
    </Box>
  );
};

const _FeatureDescription = () => {
  return (
    <Text
      marginLeft={{
        base: "0px",
        md: "40px",
        // md: "0px", // on odd index
      }}
      marginRight={{
        base: "0px",
        // md: "40px", // on odd index
      }}
      flex={2}
      bg="purple"
    >
      Onboarding: One of the most challenging modules I worked on was the
      onboarding process. It involved intricate decision-making functions and
      complex logic. I integrated the Microblink SDK to scan Jordanian user IDs,
      retrieve data, and authenticate users. Additionally, I developed a custom
      frame and utilized the "camera" plugin to capture users' Live Photos,
      which were then sent to the backend for verification. The module also
      included a sophisticated Resumption flow to allow users to resume their
      journey if interrupted.
    </Text>
  );
};
