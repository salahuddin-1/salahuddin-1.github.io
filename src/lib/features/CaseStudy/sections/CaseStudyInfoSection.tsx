import { Box, Image, VStack, Text, HStack } from "@chakra-ui/react";
import profilePhotoHero from "@assets/projects/capital_1.png";
import { DeviceTypeEnum } from "src/domain/enums/device_type_enum";
import ticTacToeimage from "@assets/tic_tac_toe_table.png";

const CaseStudyInfoSection = () => {
  return (
    <Box>
      <VStack bg="red" alignItems="start">
        {/* Index */}
        <_IndexComponent />

        <Box display="flex" justifyContent="center" alignItems="center">
          {/* Project Image */}
          <_ImageComponent />

          {/* Feature Description */}
          <_FeatureDescription />
        </Box>
      </VStack>
    </Box>
  );
};

export default CaseStudyInfoSection;

// ----------------------------------------------- PRIVATE COMPONENTS -------------------------------------------------

const _IndexComponent = () => {
  return <Text bg="green">01</Text>;
};

const _ImageComponent = () => {
  return (
    <Box
      bg="orange"
      maxHeight="70vh"
      height={{
        md: "60vw",
        lg: "40vw",
      }}
      flex={1}
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Image
        objectFit="contain"
        height="100%"
        src={ticTacToeimage}
        alt="tic-tac-toe"
      />
      <Image
        paddingX={{
          md: "30px",
          lg: "0px",
        }}
        // height="100px"
        // width="100px"
        height="100%"
        position="absolute"
        // maxHeight="70vh"
        // height={{
        //   md: "60vw",
        //   lg: "40vw",
        // }}
        objectFit="contain"
        // flex={1}
        src={profilePhotoHero}
        alt="profile"
      />
    </Box>
  );
};

const _FeatureDescription = () => {
  return (
    <Text flex={2} bg="purple">
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
