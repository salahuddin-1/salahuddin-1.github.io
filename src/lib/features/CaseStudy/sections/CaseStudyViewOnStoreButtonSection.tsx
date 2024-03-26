import PlaystoreButtonLocked from "@components/PlaystoreButtonLocked";
import PlaystoreButton from "@components/PlaystoreButton";
import { AppColor } from "src/domain/constants/AppColor";
import { Box, Text } from "@chakra-ui/react";
import { DeviceTypeEnum } from "src/domain/enums/device_type_enum";

const CaseStudyViewOnStoreButtonSection = (props: _ViewOnStoreButtonProps) => {
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

export default CaseStudyViewOnStoreButtonSection;

interface _ViewOnStoreButtonProps {
  playstoreLink: string | undefined | null;
  isProjectPrivate: boolean;
  deviceType: DeviceTypeEnum;
}
