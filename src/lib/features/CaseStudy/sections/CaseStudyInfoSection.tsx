import { Box, Image, VStack, Text, useBreakpointValue } from "@chakra-ui/react";
import ticTacToeimage from "@assets/tic_tac_toe_table.png";
import { AppColor } from "src/domain/constants/AppColor";
import AppDivider from "@components/AppDivider";
import { CaseStudyItemProp, CaseStudyProp } from "@datautils/case_studies";
import { DeviceTypeEnum } from "src/domain/enums/device_type_enum";

interface CaseStudyInfoSectionProps {
  caseStudyProp: CaseStudyProp;
}

const CaseStudyInfoSection = (props: CaseStudyInfoSectionProps) => {
  const caseStudyEntites = props.caseStudyProp?.caseStudyItems.map(
    (item, index) => {
      const isOddIndex: boolean = index % 2 === 0;

      const isLastIndex: boolean =
        index === props.caseStudyProp?.caseStudyItems.length - 1;

      const serialNumber: number = index + 1;

      const serialNumberToString: string = "0" + serialNumber.toString();

      return (
        <_CaseStudyEntity
          key={index}
          isOddIndex={isOddIndex}
          isLastIndex={isLastIndex}
          serialNumber={serialNumberToString}
          caseStudyItemProp={item}
          deviceType={props.caseStudyProp.deviceType}
        />
      );
    }
  );

  return <Box>{caseStudyEntites}</Box>;
};

export default CaseStudyInfoSection;

// ----------------------------------------------- PRIVATE COMPONENTS -------------------------------------------------

interface _CaseStudyEntityProps {
  isOddIndex: boolean;
  isLastIndex?: boolean;
  serialNumber: string;
  caseStudyItemProp: CaseStudyItemProp;
  deviceType: DeviceTypeEnum;
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
      <_IndexComponent serialNumber={props.serialNumber} />

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
        <_ImageComponent
          imageSrc={props?.caseStudyItemProp?.src}
          alt={props?.caseStudyItemProp?.alt}
          deviceType={props.deviceType}
        />

        <Box
          height={{
            base: "40vw",
            sm: "100px",
            lg: "50px",
          }}
        />

        {/* Feature Description */}
        <Box flex={2} display="flex" flexDirection="column">
          <_FeatureDescription
            isOddIndex={props.isOddIndex}
            caseStudyItemProp={props.caseStudyItemProp}
          />
        </Box>
      </Box>

      {/* <Box height="50px" /> */}

      {getSeparationDivider()}
    </VStack>
  );
};

const _IndexComponent = (props: { serialNumber: string }) => {
  return (
    <Text fontSize="35px" bg="">
      {props.serialNumber}
    </Text>
  );
};

const _ImageComponent = (props: {
  imageSrc: string;
  alt: string;
  deviceType: DeviceTypeEnum;
}) => {
  // GET HEIGHT FOR MOBILE DEVICES
  const _getHeightForMobileDevices = () => {
    const _heightForMobileDevices = useBreakpointValue({
      base: "160%",
      sm: "120%",
      lg: "100%",
    });

    const _heightForDesktopDevices = "auto";

    if (props.deviceType === DeviceTypeEnum.MOBILE) {
      return _heightForMobileDevices;
    }

    return _heightForDesktopDevices;
  };

  // GET WIDTH FOR MOBILE DEVICES
  const _getWidthForMobileDevices = () => {
    const _widthForMobileDevices = "auto";
    const _widthForDesktopDevices = "80%";

    if (props.deviceType === DeviceTypeEnum.MOBILE) {
      return _widthForMobileDevices;
    }

    return _widthForDesktopDevices;
  };

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
        height={_getHeightForMobileDevices()}
        width={_getWidthForMobileDevices()}
        position="absolute"
        objectFit="fill"
        src={props.imageSrc}
        alt={props.alt}
        borderRadius={{
          // RESPONSIVE
          base: "22px",
          sm: "26px",
          md: "22px",
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

interface _FeatureDescriptionProps {
  isOddIndex: boolean;
  caseStudyItemProp: CaseStudyItemProp;
}

const _FeatureDescription = (props: _FeatureDescriptionProps) => {
  const text = props.caseStudyItemProp?.description ?? "";

  const listOfSplittedText: string[] = text.split("|");

  // If no split is found
  if (listOfSplittedText.length === 0) {
    return (
      <_SplittedTextComponent
        featureDescriptionProps={props}
        isLastIndex={true}
        isFirstIndex={false}
        text={text}
      />
    );
  }

  // Iterate through the splitted text and display them
  const listOfSeparatedComponents = listOfSplittedText.map(
    (splittedText, index) => {
      const isLastIndex = index === listOfSplittedText.length - 1;
      const isFirstIndex = index === 0;

      return (
        <_SplittedTextComponent
          key={index}
          featureDescriptionProps={props}
          isLastIndex={isLastIndex}
          isFirstIndex={isFirstIndex}
          text={splittedText}
        />
      );
    }
  );

  return listOfSeparatedComponents;
};

// This is the reusable method that will be used to display the splitted text

interface _SplittedTextComponentProps {
  featureDescriptionProps: _FeatureDescriptionProps;
  isLastIndex: boolean;
  isFirstIndex: boolean;
  text: string;
}

const _SplittedTextComponent = (props: _SplittedTextComponentProps) => {
  const text = props.text.trim();

  const splittedTextList: string[] = text.split(":");

  // if no heading is found
  if (splittedTextList.length === 1) {
    return (
      <Text
        marginBottom={props.isLastIndex ? "0px" : "40px"}
        marginLeft={{
          base: "0px",
          md: props.featureDescriptionProps.isOddIndex ? "0px" : "40px", // on odd index
        }}
        marginRight={{
          base: "0px",
          md: props.featureDescriptionProps.isOddIndex ? "40px" : "0px", // on odd index
        }}
        flex={2}
        bg=""
      >
        {props.text.trim()}
      </Text>
    );
  }

  const isDesktop = useBreakpointValue({
    lg: true,
  });

  // If a heading is found
  return (
    <Box
      marginBottom={props.isLastIndex ? "0px" : "50px"}
      marginLeft={{
        base: "0px",
        md: props.featureDescriptionProps.isOddIndex ? "0px" : "40px", // on odd index
      }}
      marginRight={{
        base: "0px",
        md: props.featureDescriptionProps.isOddIndex ? "40px" : "0px", // on odd index
      }}
    >
      {!props.isFirstIndex && <Box height="20px" />}

      <Text fontWeight="500" fontSize="22px">
        {splittedTextList[0]?.trim() ?? ""}
      </Text>

      <Box marginY="20px">
        {isDesktop && <AppDivider color={AppColor.LIGHT_GRAY_100} />}
      </Box>

      <Text>{splittedTextList[1]?.trim() ?? ""}</Text>
    </Box>
  );
};
