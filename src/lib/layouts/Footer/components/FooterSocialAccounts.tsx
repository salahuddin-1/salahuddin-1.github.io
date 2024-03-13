import { Box, Image } from "@chakra-ui/react";
import { AppConstants } from "src/domain/constants/AppConstants";
import icon_facebook from "@assets/icon_facebook.png";
import icon_instagram from "@assets/icon_instagram.svg";
import iconLinkedIn from "@assets/icon_linkedin.svg";
import iconGithub from "@assets/icon_github.svg";

interface SocialAccounts {
  type: string;
  onClick: () => void;
  alt: string;
  src: string;
}

const FooterSocialAccounts = () => {
  const listOfSocialAccounts: SocialAccounts[] = [
    {
      type: "linkedin",
      onClick: () => {},
      alt: AppConstants.LINKEDIN_ALT_TEXT,
      src: iconLinkedIn,
    },

    {
      type: "github",
      onClick: () => {},
      alt: "Github Icon Alt Text",
      src: iconGithub,
    },

    {
      type: "instagram",
      onClick: () => {},
      alt: "Instagram Icon Alt Text",
      src: icon_instagram,
    },
  ];

  return (
    <Box justifyContent="space-between" width="120px" bg="" display="flex">
      {listOfSocialAccounts.map((item, index) => (
        <Image
          key={index}
          cursor="pointer"
          onClick={item.onClick}
          alt={item.alt}
          src={item.src}
          width="25px"
          color="red"
        />
      ))}
    </Box>
  );
};

export default FooterSocialAccounts;
