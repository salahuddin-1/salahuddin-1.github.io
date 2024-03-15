import { Box, Flex, Text } from "@chakra-ui/react";
import AppPageSubheading from "./AppPageSubheading";
import AppMaterialButton from "./AppMaterialButton";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "src/lib/navigation/route_paths";

const LetsGetInTouch = () => {
  const navigate = useNavigate();

  return (
    <Flex flexDir="column">
      <Text fontSize="30px" fontWeight="500">
        Curious about the impact my services can make for you?
      </Text>

      <Box height="30px"></Box>

      <AppPageSubheading>
        Connect with me to explore how my software solutions can digitize your
        business.
      </AppPageSubheading>

      <Box height="60px"></Box>

      {/* Lets get in touch button navigate to Contact Us page */}
      <AppMaterialButton
        onClick={() => {
          navigate(RoutePaths.CONTACT_US);
        }}
      >
        Let's get in touch
      </AppMaterialButton>
    </Flex>
  );
};

export default LetsGetInTouch;
