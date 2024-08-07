import {
  Box,
  Flex,
  Image,
  Text,
  useBreakpointValue,
  useMediaQuery,
  useTheme,
} from "@chakra-ui/react";
import AppSectionHeading from "src/lib/ui/components/AppSectionHeading";
import { CustomTheme } from "src/theme";
import workStack, { WorkStackImageProps } from "@datautils/work_stack";
import { DeviceTypeEnum } from "src/domain/enums/device_type_enum";
import React from "react";
import { useHomepageViewModel } from "src/lib/providers/HomepageViewModelProvider";
import AnimateOnLoad from "@components/AnimateOnLoad";
import { useWorkViewModel } from "src/lib/providers/WorkViewModelProvider";
import MobileProjectCarousel from "../components/MobileProjectCarousel";
import PlaystoreButtonLocked from "@components/PlaystoreButtonLocked";
import PlaystoreButton from "@components/PlaystoreButton";
import { AppColor } from "src/domain/constants/AppColor";
import FooterTextButton from "src/lib/layouts/Footer/components/FooterTextButton";
import { CaseStudyNavParams } from "../../CaseStudy/CaseStudy";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "src/lib/navigation/route_paths";

interface _TechItemProps {
  children: string;
}

// Props if the device is a mobile
interface _ProjectImageBoxProps {
  src: string;
  alt: string;
  paddingX: string;
  paddingTop: string;
  bg: string;
  deviceType: DeviceTypeEnum;
}

const _ProjectDesktopImageBox = (props: _ProjectImageBoxProps) => {
  return (
    <Box
      paddingTop={props.paddingTop}
      paddingX={props.paddingX}
      flex={1}
      bg={props.bg}
    >
      <Image
        bg=""
        boxShadow={{
          // RESPONSIVE
          base: "5px 10px 15px rgba(0, 0, 0, 0.3)",
          sm: "5px 10px 15px rgba(0, 0, 0, 0.3)",
          md: "5px 10px 15px rgba(0, 0, 0, 0.3)",
          lg: "10px 15px 20px rgba(0, 0, 0, 0.3)",
          "2xl": "15px 20px 30px rgba(0, 0, 0, 0.3)",
        }}
        borderRadius={{
          // RESPONSIVE
          base: "10px",
          sm: "15px",
          md: "20px",
          lg: "40px",
          "2xl": "60px",
        }}
        border={{
          // RESPONSIVE
          base: "3px solid black",
          sm: "4px solid black",
          md: "5px solid black",
          lg: "10px solid black",
          "2xl": "15px solid black",
        }}
        fit="contain"
        src={props.src}
      ></Image>
    </Box>
  );
};

const _ProjectMobileImageBox = (props: _ProjectImageBoxProps) => {
  return (
    <Box
      paddingTop={props.paddingTop}
      paddingX={props.paddingX}
      flex={1}
      bg={props.bg}
    >
      <Image
        boxShadow={{
          // RESPONSIVE
          base: "5px 10px 15px rgba(0, 0, 0, 0.3)",
          sm: "5px 10px 15px rgba(0, 0, 0, 0.3)",
          md: "5px 10px 15px rgba(0, 0, 0, 0.3)",
          lg: "10px 15px 20px rgba(0, 0, 0, 0.3)",
          "2xl": "15px 20px 30px rgba(0, 0, 0, 0.3)",
        }}
        borderRadius={{
          // RESPONSIVE
          base: "10px",
          sm: "15px",
          md: "20px",
          lg: "40px",
          "2xl": "60px",
        }}
        border={{
          // RESPONSIVE
          base: "3px solid black",
          sm: "4px solid black",
          md: "5px solid black",
          lg: "10px solid black",
          "2xl": "15px solid black",
        }}
        fit="contain"
        src={props.src}
      ></Image>
    </Box>
  );
};

const _TechItem = (props: _TechItemProps) => {
  const theme = useTheme<CustomTheme>();

  return (
    <Text
      height="35px"
      marginRight="40px"
      fontWeight="500"
      fontSize="13px"
      textColor={theme.colors.workTech}
    >
      {props.children}
    </Text>
  );
};

export const projectImagesList = (
  list: WorkStackImageProps[],
  deviceType: DeviceTypeEnum
): JSX.Element => {
  const paddingTopList = ["10%", "20%", "15%"];
  const paddingTopDesktopList = ["5%", "30%"];

  const mappedProjects: JSX.Element = (
    <>
      {list.map((item, index) => {
        // If the device is a desktop
        if (deviceType === DeviceTypeEnum.DESKTOP) {
          return (
            <_ProjectDesktopImageBox
              key={index}
              src={item.src}
              alt={item.alt}
              paddingX="5%"
              paddingTop={paddingTopDesktopList[index]}
              // bg={bgColor[index]}
              bg=""
              deviceType={deviceType}
            />
          );
        }

        // If the device is a mobile
        return (
          <_ProjectMobileImageBox
            key={index}
            src={item.src}
            alt={item.alt}
            paddingX="5%"
            paddingTop={paddingTopList[index]}
            bg=""
            deviceType={deviceType}
          />
        );
      })}
    </>
  );

  return mappedProjects;
};

const ProjectsSection: React.FC = () => {
  const techStackList = (list: string[]) => {
    return list.map((item, index) => {
      return <_TechItem key={index}>{item}</_TechItem>;
    });
  };

  const projects: JSX.Element[] = workStack.map((item, index) => {
    const navigate = useNavigate();

    const homePageVM = useHomepageViewModel();

    // Margin bottom between projects
    // The last project should not have a margin bottom

    const getMarginBottom = () => {
      if (index === workStack.length - 1) {
        return "0px";
      }

      return useBreakpointValue({
        base: "100px",
        md: "120px",
        lg: "180px",
      });
    };

    // let selectedProjectIndex: number = -1;

    // useEffect(() => {
    //   if (selectedProjectIndex === index) {
    //     scrollToComponent(item.ref!, "start");
    //   }

    //   return () => {
    //     // scrollToEndOfPage();
    //   };
    // }, [selectedProjectIndex]);

    const contactUsVM = useWorkViewModel();
    const animationOnLoadProps = contactUsVM.animationOnLoadProps;

    const [isTabletOrSmaller] = useMediaQuery("(max-width: 768px)");

    const ProjectView: React.FC = () => {
      if (isTabletOrSmaller) {
        return (
          <AnimateOnLoad
            delay={0.4}
            translateY={animationOnLoadProps.translateY}
          >
            <Box bg="" width="90vw">
              <MobileProjectCarousel images={item.images} />
            </Box>
          </AnimateOnLoad>
        );
      }

      /* IMAGES */
      return (
        <AnimateOnLoad delay={0.4} translateY={animationOnLoadProps.translateY}>
          <Flex
            // paddingX="7%"
            // paddingY="7%"
            paddingBottom="8%"
            width="100%"
            boxShadow="0px 2px 10px rgba(255, 255, 255, 0.4)"
            bg={item.backgroundColor}
            borderRadius={{
              // RESPONSIVE
              base: "10px",
              sm: "15px",
              md: "20px",
              lg: "40px",
              "2xl": "60px",
            }}
          >
            {projectImagesList(item.images, item.deviceType)}
          </Flex>
        </AnimateOnLoad>
      );
    };

    // NAVIGATE TO FULL CASE STUDY
    const onClickViewFullCaseStudy = () => {
      const params: CaseStudyNavParams = {
        slug: item.slug,
      };

      navigate(RoutePaths.CASE_STUDY, { state: params });
    };

    return (
      <Flex marginBottom={getMarginBottom()} key={index} flexDir="column">
        {/* PROJECT NAME */}
        {/* Scroll to this section */}

        <AnimateOnLoad delay={0.1} translateY={animationOnLoadProps.translateY}>
          <Box ref={item.ref}>
            <AppSectionHeading>{item.projectName}</AppSectionHeading>
          </Box>
        </AnimateOnLoad>

        {/* <Box height="50px" /> */}

        {/* <AnimateOnLoad delay={0.2} translateY={animationOnLoadProps.translateY}>
          <Flex bg="" flexWrap="wrap">
            // TECH STACK USED
            {techStackList(item.techStack)}
          </Flex>
        </AnimateOnLoad> */}

        {/* {item.techStack.length !== 0 && <Box height="40px" />} */}

        <Box height="40px" />

        {/* DESCRIPTION */}
        <AnimateOnLoad delay={0.3} translateY={animationOnLoadProps.translateY}>
          <Text>{item.description}</Text>
        </AnimateOnLoad>

        {/* FULL CASE STUDY BUTTON */}
        <AnimateOnLoad delay={0.5} translateY={animationOnLoadProps.translateY}>
          <Box marginTop="20px">
            <FooterTextButton
              onClick={() => {
                onClickViewFullCaseStudy();
              }}
            >
              View Full Case Study
            </FooterTextButton>
          </Box>
        </AnimateOnLoad>

        <AnimateOnLoad delay={0.7} translateY={animationOnLoadProps.translateY}>
          <_ViewOnStoreButton
            playstoreLink={item.playstoreLink}
            isProjectPrivate={item.isProjectPrivate ?? false}
            deviceType={item.deviceType}
          />
        </AnimateOnLoad>

        <ProjectView />
      </Flex>
    );
  });

  return <>{projects}</>;
};
const _ViewOnStoreButton = (props: _ViewOnStoreButtonProps) => {
  if (props.isProjectPrivate) {
    return (
      <Box marginY="50px">
        <PlaystoreButtonLocked />
        <Box height="20px" />
        <Text fontSize="11px" color={AppColor.DARK_GRAY}>
          Please note: This project was created exclusively for private use and
          is not available for public download or distribution
        </Text>
      </Box>
    );
  }

  if (!props.playstoreLink) {
    return <Box marginY="50px"></Box>;
  }

  const _getLabel = (): string | undefined => {
    if (props.deviceType === DeviceTypeEnum.WEB) {
      return "View Website";
    }
  };

  return (
    <Box marginY="50px">
      <PlaystoreButton hrefLink={props.playstoreLink} label={_getLabel()} />
    </Box>
  );
};

interface _ViewOnStoreButtonProps {
  playstoreLink: string | undefined | null;
  isProjectPrivate: boolean;
  deviceType: DeviceTypeEnum;
}
export default ProjectsSection;
