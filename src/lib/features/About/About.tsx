import AppPageHeading from "@components/AppPageHeading";
import AppSectionHeading from "@components/AppSectionHeading";
import { SectionSpacing } from "@components/SectionSpacing";
import React from "react";
import BasePage from "src/lib/base/BasePage";
import { useAboutViewModel } from "src/lib/providers/AboutViewModelProvider";

const About = () => {
  const viewModel = useAboutViewModel();

  return (
    <BasePage>
      <AppPageHeading>About me</AppPageHeading>
      <SectionSpacing />
    </BasePage>
  );
};

export default About;
