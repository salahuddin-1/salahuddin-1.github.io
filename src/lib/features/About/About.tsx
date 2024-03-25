import AppPageHeading from "@components/AppPageHeading";
import AppSectionHeading from "@components/AppSectionHeading";
import { SectionSpacing } from "@components/SectionSpacing";
import React from "react";
import BasePage from "src/lib/base/BasePage";
import { useAboutViewModel } from "src/lib/providers/AboutViewModelProvider";
import AboutHeroSection from "./sections/AboutHeroSection";

const About = () => {
  const viewModel = useAboutViewModel();

  return (
    <BasePage>
      {/* About Hero Section */}
      <AboutHeroSection />
    </BasePage>
  );
};

export default About;
