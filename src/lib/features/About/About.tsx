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
