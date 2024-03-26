import { Box, Image, VStack, Text, HStack } from "@chakra-ui/react";
import profilePhotoHero from "@assets/projects/capital_1.png";
import ticTacToeimage from "@assets/tic_tac_toe_table.png";
import { AppColor } from "src/domain/constants/AppColor";
import AppDivider from "@components/AppDivider";
import { CaseStudyProp } from "@datautils/case_studies";

interface CaseStudyInfoSectionProps {
  caseStudyProp: CaseStudyProp;
}

const CaseStudyInfoSection = (props: CaseStudyInfoSectionProps) => {
  return (
    <Box>
      <_CaseStudyEntity isOddIndex={false} />
      <_CaseStudyEntity isOddIndex={true} />
      <_CaseStudyEntity isOddIndex={false} isLastIndex={true} />
    </Box>
  );
};

export default CaseStudyInfoSection;

// ----------------------------------------------- PRIVATE COMPONENTS -------------------------------------------------

interface _CaseStudyEntityProps {
  isOddIndex: boolean;
  isLastIndex?: boolean;
}

export const _CaseStudyEntity = (props: _CaseStudyEntityProps) => {
  const getSeparationDivider = () => {
    if (props.isLastIndex) {
      return <></>;
    }

    return (
      <Box
        width="100%"
        marginY={{
          base: "70px",
          lg: "100px",
        }}
      >
        <AppDivider
        // color={AppColor.LIGHT_GRAY_100}
        />
      </Box>
    );
  };

  return (
    <VStack bg="" alignItems="start">
      {/* <Box height="50px" /> */}

      {/* Index */}
      <_IndexComponent />

      <Box
        height={{
          base: "30vw",
          sm: "70px",
          lg: "20px",
        }}
      />

      <Box
        display="flex"
        // alignItems="center"
        alignItems={{
          base: "center",
          lg: "start",
        }}
        flexDirection={{
          base: "column",
          // on odd index
          lg: props.isOddIndex ? "row-reverse" : "row",
        }}
      >
        {/* Project Image */}
        <_ImageComponent />

        <Box
          height={{
            base: "40vw",
            sm: "100px",
            lg: "50px",
          }}
        />

        {/* Feature Description */}
        <_FeatureDescription isOddIndex={props.isOddIndex} />
      </Box>

      {/* <Box height="50px" /> */}

      {getSeparationDivider()}
    </VStack>
  );
};

const _IndexComponent = () => {
  return (
    <Text fontSize="35px" bg="">
      01
    </Text>
  );
};

const _ImageComponent = () => {
  return (
    <Box
      bg=""
      maxHeight="70vh"
      height={{
        // md: "35vw",
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
        bg=""
        objectFit="contain"
        height={{
          base: "100%",
          sm: "450px",
          lg: "100%",
        }}
        src={ticTacToeimage}
        alt="tic-tac-toe"
      />

      {/* UI Design Image */}
      <Image
        marginX={{
          // md: "60px",
          lg: "0px",
        }}
        height={{
          base: "160%",
          sm: "120%",
          lg: "100%",
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
          lg: "25px",
          "2xl": "60px",
        }}
        border={{
          // RESPONSIVE
          base: `6px solid ${AppColor.LIGHT_GRAY_100}`,
          sm: `7px solid ${AppColor.LIGHT_GRAY_100}`,
          md: `7px solid ${AppColor.LIGHT_GRAY_100}`,
          lg: `7px solid ${AppColor.LIGHT_GRAY_100}`,
          "2xl": `15px solid ${AppColor.LIGHT_GRAY_100}`,
        }}
      />
    </Box>
  );
};

const _FeatureDescription = (props: _CaseStudyEntityProps) => {
  return (
    <Text
      marginLeft={{
        base: "0px",
        md: props.isOddIndex ? "0px" : "40px", // on odd index
      }}
      marginRight={{
        base: "0px",
        md: props.isOddIndex ? "40px" : "0px", // on odd index
      }}
      flex={2}
      bg=""
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
