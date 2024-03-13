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
      type: "instagram",
      onClick: () => {},
      alt: AppConstants.INSTAGRAM_ALT_TEXT,
      src: icon_instagram,
    },
    {
      type: "facebook",
      onClick: () => {},
      alt: AppConstants.FACEBOOK_ALT_TEXT,
      src: iconGithub,
    },
    {
      type: "linkedin",
      onClick: () => {},
      alt: AppConstants.LINKEDIN_ALT_TEXT,
      src: iconLinkedIn,
    },
  ];

  return (
    <Box justifyContent="space-between" width="22px" bg="red" display="flex">
      {listOfSocialAccounts.map((item, index) => (
        <Image
          key={index}
          cursor="pointer"
          onClick={item.onClick}
          alt={item.alt}
          src={item.src}
          color="red"
        />
      ))}
    </Box>
  );
};

export default FooterSocialAccounts;
