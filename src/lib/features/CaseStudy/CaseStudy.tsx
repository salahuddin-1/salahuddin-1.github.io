import AppPageHeading from "@components/AppPageHeading";
import React, { useEffect } from "react";
import BasePage from "src/lib/base/BasePage";
import { useCaseStudyViewModel } from "src/lib/providers/CaseStudyProvider";

const CaseStudy = () => {
  const viewmodel = useCaseStudyViewModel();

  useEffect(() => {
    return () => {
      viewmodel.dispose();
    };
  }, []);

  return (
    <BasePage>
      <AppPageHeading>Capital Bank of Jordan</AppPageHeading>
    </BasePage>
  );
};

export default CaseStudy;
