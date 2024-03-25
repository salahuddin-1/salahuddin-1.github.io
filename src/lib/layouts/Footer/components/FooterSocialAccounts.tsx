import { Box, Image } from "@chakra-ui/react";
import { AppConstants } from "src/domain/constants/AppConstants";
import iconStackOverflow from "@assets/icon_stack_overflow.svg";
import icon_instagram from "@assets/icon_instagram.svg";
import iconLinkedIn from "@assets/icon_linkedin.svg";
import iconGithub from "@assets/icon_github.svg";
import { Link, useNavigate } from "react-router-dom";

interface SocialAccounts {
  type: string;
  onClick: () => void;
  alt: string;
  src: string;
  hrefLink: string;
}

const FooterSocialAccounts = () => {
  const listOfSocialAccounts: SocialAccounts[] = [
    {
      type: "linkedin",
      onClick: () => {},
      alt: AppConstants.LINKEDIN_ALT_TEXT,
      src: iconLinkedIn,
      hrefLink: "https://linkedin.com/in/salahuddin-shaikh-640469196",
    },

    {
      type: "github",
      onClick: () => {},
      alt: "Github Icon Alt Text",
      src: iconGithub,
      hrefLink: "https://github.com/salahuddin-1",
    },

    {
      type: "stackoverflow",
      onClick: () => {},
      alt: "StackOverflow Icon Alt Text",
      src: iconStackOverflow,
      hrefLink: "https://stackoverflow.com/users/12771360/salahuddin-shaikh",
    },

    {
      type: "instagram",
      onClick: () => {},
      alt: "Instagram Icon Alt Text",
      src: icon_instagram,
      hrefLink: "https://www.instagram.com/salahuddin_1/",
    },
  ];

  return (
    <Box
      justifyContent="space-between"
      width={{
        base: "130px",
        sm: "160px",
      }}
      bg=""
      display="flex"
    >
      {listOfSocialAccounts.map((item, index) => (
        <Link key={index} to={item.hrefLink} target="_blank">
          <Image
            cursor="pointer"
            onClick={item.onClick}
            alt={item.alt}
            src={item.src}
            width={{
              base: "20px",
              sm: "25px",
            }}
            color="red"
          />
        </Link>
      ))}
    </Box>
  );
};

export default FooterSocialAccounts;
