import { Box, HStack, Image, Text } from "@chakra-ui/react";
import iconPlayStore from "@assets/icon_playstore.svg";
import { AppColor } from "src/domain/constants/AppColor";
import { Link } from "react-router-dom";

interface PlaystoreButtonProps {
  hrefLink: string;
}

const PlaystoreButton = (props: PlaystoreButtonProps) => {
  return (
    <Link to={props.hrefLink} target="_blank">
      <Box
        bg={AppColor.BLACK}
        display="flex"
        width="fit-content"
        paddingX="18px"
        paddingY="10px"
        border={`1px solid ${AppColor.WHITE}`}
        borderRadius="10px"
        cursor="pointer"
      >
        <HStack>
          <Image src={iconPlayStore} boxSize="25px"></Image>

          {/* <Box width="1px" /> */}

          <Text fontSize="12px" fontWeight="">
            View on Store
          </Text>
        </HStack>
      </Box>
    </Link>
  );
};

export default PlaystoreButton;
