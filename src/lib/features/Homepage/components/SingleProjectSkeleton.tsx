import { Box, Image, Text, useTheme } from "@chakra-ui/react";
import "@fontsource/poppins/300.css";
import icon_north_east from "@assets/icon_north_east.png";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "src/lib/navigation/route_paths";
import { useHomepageViewModel } from "src/lib/providers/HomepageViewModelProvider";
import { CustomTheme } from "src/theme";
import { AppColor } from "src/domain/constants/AppColor";
import { CaseStudyNavParams } from "../../CaseStudy/CaseStudy";

export interface SingleProject {
  projectName: string;
  category: string;
  imageURL: string;
  slug: string;
}

interface Props {
  project: SingleProject;
}

const ProjectImage = ({ project }: Props) => {
  return (
    <Image
      fit="cover"
      // height="80%"
      borderRadius={12}
      src={project.imageURL}
    ></Image>
  );
};

const ProjectDetails = ({ project }: Props) => {
  const theme = useTheme<CustomTheme>();

  return (
    <Box justifyContent="space-between" flexDirection="row" display="flex">
      <Box alignItems="start" flexDirection="column" display="flex">
        {/* PROJECT NAME */}
        <Text letterSpacing={2} fontWeight="bold" fontSize={17}>
          {project.projectName}
        </Text>

        <Box height={2} />

        {/* PROJECT CATEGORY */}
        <Text letterSpacing={2} fontWeight="300" fontSize={13}>
          {project.category}
        </Text>

        <Box height={2} />
      </Box>

      {/* ARROW ICON */}
      <Image boxSize={5} fit="contain" src={icon_north_east}></Image>
    </Box>
  );
};

const SingleProjectSkeleton = ({ project }: Props) => {
  const navigate = useNavigate();
  const homepageVM = useHomepageViewModel();

  project.projectName;

  // let selectedProject =

  const onClickWork = () => {
    const params: CaseStudyNavParams = {
      slug: project.slug,
    };

    // navigate(RoutePaths.RECENT_WORK, { state: params });
    navigate(RoutePaths.CASE_STUDY, { state: params });

    // set the selected project
  };

  return (
    <Box
      onClick={onClickWork}
      cursor="pointer"
      boxShadow="0px 2px 10px rgba(255, 255, 255, 0.25)"
      borderRadius={10}
      borderWidth={0.1}
      borderColor="#4F4F4F"
      borderStyle="solid"
      backgroundColor={AppColor.BLACK_900}
      textAlign="center"
      paddingX={4}
      paddingTop={4}
      paddingBottom="30px"
    >
      <ProjectImage project={project} />
      <Box height={5} />
      <ProjectDetails project={project} />
    </Box>
  );
};

export default SingleProjectSkeleton;
