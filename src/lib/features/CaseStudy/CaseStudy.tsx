import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import BasePage from "src/lib/base/BasePage";
import { useCaseStudyViewModel } from "src/lib/providers/CaseStudyProvider";
import CaseStudyHeroSection from "./sections/CaseStudyHeroSection";
import CaseStudyInfoSection from "./sections/CaseStudyInfoSection";

import { DeviceTypeEnum } from "src/domain/enums/device_type_enum";
import CaseStudyViewOnStoreButtonSection from "./sections/CaseStudyViewOnStoreButtonSection";
import { CaseStudyProp } from "@datautils/case_studies";
import { useLocation } from "react-router-dom";

export type CaseStudyNavParams = {
  slug: string;
};

const CaseStudy = () => {
  const location = useLocation();

  // ViewModel
  const viewmodel = useCaseStudyViewModel();

  // Manage the state of the case study details
  const [caseStudyProp, setCaseStudyDetails] = useState<
    CaseStudyProp | undefined
  >();

  useEffect(() => {
    // Access the data passed from the previous page
    const caseStudyNavParams = location.state as CaseStudyNavParams;
    viewmodel.setCaseStudyNavParams(caseStudyNavParams);

    // Get the case study details
    const caseStudyDetail = viewmodel.getCaseStudyDetails();

    // Set the case study details state
    setCaseStudyDetails(caseStudyDetail);

    return () => {
      viewmodel.dispose();
    };
  }, []);

  return (
    <BasePage>
      <CaseStudyHeroSection caseStudyProp={caseStudyProp!} />

      <Box height="10px" />

      <CaseStudyViewOnStoreButtonSection
        playstoreLink=""
        isProjectPrivate={true}
        deviceType={DeviceTypeEnum.MOBILE}
      />

      <Box height="100px" />

      <CaseStudyInfoSection caseStudyProp={caseStudyProp!} />
    </BasePage>
  );
};

export default CaseStudy;
