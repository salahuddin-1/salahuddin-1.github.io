import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import BasePage from "src/lib/base/BasePage";
import { useCaseStudyViewModel } from "src/lib/providers/CaseStudyProvider";
import CaseStudyHeroSection from "./sections/CaseStudyHeroSection";
import CaseStudyInfoSection from "./sections/CaseStudyInfoSection";
import { SectionSpacing } from "@components/SectionSpacing";

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
      <SectionSpacing />

      <CaseStudyInfoSection />
    </BasePage>
  );
};

export default CaseStudy;
