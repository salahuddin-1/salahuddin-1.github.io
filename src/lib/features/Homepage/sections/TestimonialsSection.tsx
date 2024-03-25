import { Box, VStack, Text, Image, useTheme } from "@chakra-ui/react";
import AppPageHeading from "@components/AppPageHeading";
import SectionHeadingSpacing from "@components/SectionHeadingSpacing";
import iconQuoteLeft from "@assets/icon_quote_left.png";
import AppDivider from "@components/AppDivider";
import { AppColor } from "src/domain/constants/AppColor";
import testimonials, { Testimonial } from "@datautils/testimonials";

const TestimonialsSection = () => {
  const mappedTestimonials = testimonials.map((item, index) => {
    return (
      <_Testimonial
        key={index}
        isLastItem={index !== testimonials.length - 1}
        testimonialType={item}
      />
    );
  });

  return (
    <Box>
      <AppPageHeading>What they say </AppPageHeading>
      <SectionHeadingSpacing />

      {mappedTestimonials}
    </Box>
  );
};

interface TestimonialProps {
  testimonialType: Testimonial;
  isLastItem: boolean;
}

const _Testimonial = (props: TestimonialProps) => {
  return (
    <Box paddingRight="50px">
      <Image alt="Icon Quote Left" width="20px" src={iconQuoteLeft}></Image>

      <Box height="20px" />

      <Text paddingLeft="30px">{props.testimonialType.comment}</Text>

      <Box height="40px" />

      <Box display={"flex"} justifyContent={"right"} bg={""}>
        <Text
          paddingRight="5px"
          textAlign="right"
          textColor={AppColor.DARK_GRAY}
          fontSize=""
          fontWeight=""
        >
          - {props.testimonialType.name} ({props.testimonialType.designation})
        </Text>
      </Box>

      <Box height="40px" />

      {props.isLastItem && <AppDivider color={AppColor.LIGHT_GRAY_100} />}
      {props.isLastItem && <Box height="60px" />}
    </Box>
  );
};

export default TestimonialsSection;
