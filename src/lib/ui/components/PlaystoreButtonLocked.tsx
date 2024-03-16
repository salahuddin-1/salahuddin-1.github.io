import { Box, HStack, Image, Text } from "@chakra-ui/react";
import iconPlayStoreLock from "@assets/icon_playstore_lock.svg";
import iconLock from "@assets/icon_lock.svg";
import { AppColor } from "src/domain/constants/AppColor";

const PlaystoreButtonLocked = () => {
  return (
    <Box
      bg={AppColor.BLACK}
      display="flex"
      width="fit-content"
      paddingX="18px"
      paddingY="10px"
      border={`1px solid ${AppColor.BLACK_600}`}
      borderRadius="10px"
      cursor="pointer"
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
  );
};

export default PlaystoreButtonLocked;
