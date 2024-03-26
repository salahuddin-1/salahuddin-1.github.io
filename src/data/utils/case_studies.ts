import { AppConstants } from "src/domain/constants/AppConstants";
import { DeviceTypeEnum } from "src/domain/enums/device_type_enum";

// CAPITAL BANK
import capital1 from "@assets/projects/capital_1.png";
import capital2 from "@assets/projects/capital_2.png";
import capital3 from "@assets/projects/capital_3.png";

export default [
  {
    projectName: "Capital Bank of Jordan",
    slug: "capital-bank-of-jordan",
    deviceType: DeviceTypeEnum.MOBILE,
    playstoreLink: AppConstants.CAPITAL_BANK_LINK,
    isProjectPrivate: false,
    caseStudyItems: [
      {
        id: "1",
        src: capital1,
        alt: "Capital Bank of Jordan",
        description:
          "Onboarding: One of the most challenging modules I worked on was the onboarding process. It involved intricate decision-making functions and complex logic. I integrated the Microblink SDK to scan Jordanian user IDs, retrieve data, and authenticate users. Additionally, I developed a custom frame and utilized the 'camera' plugin to capture users' Live Photos, which were then sent to the backend for verification. The module also included a sophisticated Resumption flow to allow users to resume their journey if interrupted.",
      },

      {
        id: "2",
        src: capital2,
        alt: "Capital Bank of Jordan",
        description:
          "Onboarding: One of the most challenging modules I worked on was the onboarding process. It involved intricate decision-making functions and complex logic. I integrated the Microblink SDK to scan Jordanian user IDs, retrieve data, and authenticate users. Additionally, I developed a custom frame and utilized the 'camera' plugin to capture users' Live Photos, which were then sent to the backend for verification. The module also included a sophisticated Resumption flow to allow users to resume their journey if interrupted.",
      },

      {
        id: "3",
        src: capital3,
        alt: "Capital Bank of Jordan",
        description:
          "Onboarding: One of the most challenging modules I worked on was the onboarding process. It involved intricate decision-making functions and complex logic. I integrated the Microblink SDK to scan Jordanian user IDs, retrieve data, and authenticate users. Additionally, I developed a custom frame and utilized the 'camera' plugin to capture users' Live Photos, which were then sent to the backend for verification. The module also included a sophisticated Resumption flow to allow users to resume their journey if interrupted.",
      },
    ],
  },
] as CaseStudyProp[];

// The actual case study data
export interface CaseStudyProp {
  projectName: string;
  slug: string;
  deviceType: DeviceTypeEnum;
  playstoreLink: string;
  isProjectPrivate?: boolean;
  caseStudyItems: CaseStudyItemProp[];
}

// The single item in the case study with the image and description
export interface CaseStudyItemProp {
  id: string;
  src: string;
  alt: string;
  description: string;
}
