import { Box, HStack, Image, Text } from "@chakra-ui/react";
import iconPlayStoreLock from "@assets/icon_playstore_lock.svg";
import iconLock from "@assets/icon_lock.svg";
import { AppColor } from "src/domain/constants/AppColor";
import { Tooltip } from "@chakra-ui/react";

const PlaystoreButtonLocked = () => {
  return (
    <Tooltip
      label="Please note: This project was created exclusively for private use and is not available for public download or distribution"
      backgroundColor={AppColor.BLACK}
      color={AppColor.WHITE}
      border={`2px solid ${AppColor.BLACK}`}
      borderRadius="10px"
      padding="20px"
      marginTop="10px"
      marginLeft="100px"
      fontWeight="400"
      textAlign="center"
    >
      <Box
        bg={AppColor.BLACK}
        display="flex"
        width="fit-content"
        paddingX="18px"
        paddingY="10px"
        border={`1px solid ${AppColor.BLACK_600}`}
        borderRadius="10px"
        cursor="not-allowed"
      >
        <HStack>
          <Image
            alt="Playstore Icon"
            src={iconPlayStoreLock}
            boxSize="25px"
          ></Image>

          <Text color={AppColor.BLACK_600} fontSize="12px" fontWeight="">
            View on Store
          </Text>

          <Box width="5px" />

          <Image alt="Playstore Icon" src={iconLock} boxSize="12px"></Image>
        </HStack>
      </Box>
    </Tooltip>
  );
};

export default PlaystoreButtonLocked;
