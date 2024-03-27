import BasePage from "src/lib/base/BasePage";
import { useAboutViewModel } from "src/lib/providers/AboutViewModelProvider";
import AboutHeroSection from "./sections/AboutHeroSection";
import { useEffect } from "react";

const About = () => {
  const viewModel = useAboutViewModel();

  useEffect(() => {
    return () => {
      viewModel.dispose();
    };
  }, []);

  return (
    <BasePage>
      {/* About Hero Section */}
      <AboutHeroSection />

      {/* <SectionSpacing />
      <EmploymentHistorySection /> */}
    </BasePage>
  );
};

export default About;
