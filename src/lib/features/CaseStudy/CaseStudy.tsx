import { Box, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import BasePage from "src/lib/base/BasePage";
import { useCaseStudyViewModel } from "src/lib/providers/CaseStudyProvider";
import CaseStudyHeroSection from "./sections/CaseStudyHeroSection";
import CaseStudyInfoSection from "./sections/CaseStudyInfoSection";

import { DeviceTypeEnum } from "src/domain/enums/device_type_enum";
import CaseStudyViewOnStoreButtonSection from "./sections/CaseStudyViewOnStoreButtonSection";

const CaseStudy = () => {
  const viewmodel = useCaseStudyViewModel();

  useEffect(() => {
    return () => {
      viewmodel.dispose();
    };
  }, []);

  return (
    <BasePage>
      <CaseStudyHeroSection />

      <Box height="10px" />

      <CaseStudyViewOnStoreButtonSection
        playstoreLink=""
        isProjectPrivate={true}
        deviceType={DeviceTypeEnum.MOBILE}
      />

      <Box height="100px" />

      <CaseStudyInfoSection />
    </BasePage>
  );
};

export default CaseStudy;
