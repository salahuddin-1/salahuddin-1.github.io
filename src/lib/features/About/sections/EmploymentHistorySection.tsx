import { Box, Image } from "@chakra-ui/react";
import AppPageHeading from "@components/AppPageHeading";
import AppSectionHeading from "@components/AppSectionHeading";
import { SectionSpacing } from "@components/SectionSpacing";
import sketch1 from "@assets/my_sketches/sketch_1.jpg";
import sketch2 from "@assets/my_sketches/sketch_2.jpg";
import sketch3 from "@assets/my_sketches/sketch_3.jpg";
import sketch4 from "@assets/my_sketches/sketch_4.jpg";
import sketch5 from "@assets/my_sketches/sketch_5.jpg";
import sketch6 from "@assets/my_sketches/sketch_6.jpg";
import sketch7 from "@assets/my_sketches/sketch_7.jpg";
import sketch8 from "@assets/my_sketches/sketch_8.jpg";
import sketch9 from "@assets/my_sketches/sketch_9.jpg";
import sketch10 from "@assets/my_sketches/sketch_10.jpg";
import sketch11 from "@assets/my_sketches/sketch_11.jpg";
import sketch12 from "@assets/my_sketches/sketch_12.jpg";
import sketch13 from "@assets/my_sketches/sketch_13.jpg";
import sketch14 from "@assets/my_sketches/sketch_14.jpg";
import sketch15 from "@assets/my_sketches/sketch_15.jpg";
import sketch16 from "@assets/my_sketches/sketch_16.jpeg";

const EmploymentHistorySection = () => {
  return (
    <Box>
      <AppPageHeading>My journey so far</AppPageHeading>
      <SectionSpacing />

      <Box whiteSpace="nowrap" overflowX="auto" display="flex">
        <Image
          maxHeight="350px"
          width="none"
          paddingRight="20px"
          src={sketch7}
          alt="My sketch"
        />
        <Image
          maxHeight="350px"
          width="none"
          paddingRight="20px"
          src={sketch6}
          alt="My sketch"
        />
        <Image
          maxHeight="350px"
          width="none"
          paddingRight="20px"
          src={sketch7}
          alt="My sketch"
        />
        <Image
          maxHeight="350px"
          width="none"
          paddingRight="20px"
          src={sketch7}
          alt="My sketch"
        />
      </Box>

      {/* <Box display="flex" flexDir="column">
        <Box display="flex" bg="" height="">
          <Image height="230px" src={sketch1} alt="My sketch" />
          <Box width="20px" />
          <Image height="240px" src={sketch2} alt="My sketch" />
          <Box width="20px" />
          <Image height="240px" src={sketch6} alt="My sketch" />
          <Box width="20px" />

          <Image height="340px" src={sketch7} alt="My sketch" />
        </Box>

        <Box height="20px" />

        <Box display="flex" bg="" height="">
          <Image height="230px" src={sketch3} alt="My sketch" />
          <Box width="20px" />
          <Image height="150px" src={sketch4} alt="My sketch" />

          <Box width="20px" />

          <Image height="250px" src={sketch5} alt="My sketch" />
        </Box>
      </Box> */}
    </Box>
  );
};

export default EmploymentHistorySection;
