import AppSectionHeading from "../../../ui/components/AppSectionHeading";
import { Box, SimpleGrid } from "@chakra-ui/react";
import SingleProjectSkeleton, {
  SingleProject,
} from "../components/SingleProjectSkeleton";
import gochi_carousel from "../../../../assets/gochi_carousel.jpg";
import feed_carousel from "../../../../assets/feed_carousel.jpg";
import rummoz_kitchen_carousel from "../../../../assets/rummoz_kitchen_carousel.jpg";
import mandi_market_carousel from "@assets/mandi_market_carousel.jpg";
import AppMaterialButton from "../../../ui/components/AppMaterialButton";
import SectionHeadingSpacing from "src/lib/ui/components/SectionHeadingSpacing";
import { Link } from "react-router-dom";
import { RoutePaths } from "src/lib/navigation/route_paths";

const OurWorkSection = () => {
  const projects: SingleProject[] = [
    {
      projectName: "Mandi Market",
      category: "Accounting",
      imageURL: mandi_market_carousel,
      slug: "mandi-market",
    },

    {
      projectName: "Rummo'z Kitchen",
      category: "Food Tech",
      imageURL: rummoz_kitchen_carousel,
      slug: "rummoz-kitchen",
    },

    {
      projectName: "Feed",
      category: "Social Networking",
      imageURL: feed_carousel,
      slug: "feed",
    },

    // {
    //   projectName: "Capital Bank of Jordan",
    //   category: "Banking & Finance",
    //   imageURL: capital_carousel,
    //   slug: "capital-bank-of-jordan",
    // },

    {
      projectName: "GoChi",
      category: "E-commerce",
      imageURL: gochi_carousel,
      slug: "gochi",
    },
  ];

  return (
    <>
      <AppSectionHeading>My Portfolio</AppSectionHeading>

      <SectionHeadingSpacing />

      <Box paddingX="10px">
        <SimpleGrid
          columns={{ base: 1, md: 2, xl: 3 }}
          spacingX={8}
          spacingY="70px"
        >
          {projects.map((item, i) => (
            <SingleProjectSkeleton key={i} project={item} />
          ))}
        </SimpleGrid>

        <Box height="50px" />

        <Link to={RoutePaths.WORK}>
          <AppMaterialButton onClick={() => {}}>View More</AppMaterialButton>
        </Link>
      </Box>
    </>
  );
};

export default OurWorkSection;
