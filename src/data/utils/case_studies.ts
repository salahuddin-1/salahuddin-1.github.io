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
          "I worked on the 'Capital Bank of Jordan' application on the Mobile App side, utilizing Flutter and employing Clean Architecture + MVVM as the project's framework. I laid the foundation for the app and developed various key features. My contribution to Capital Bank of Jordan focused solely on the frontend, accounting for approximately 70% of the app's widgets. I established the foundation for the app, designing and customizing every button, text field, and color for reusability. Onboarding: One of the most challenging modules I worked on was the onboarding process. It involved intricate decision-making functions and complex logic. I integrated the Microblink SDK to scan Jordanian user IDs, retrieve data, and authenticate users. Additionally, I developed a custom frame and utilized the 'camera' plugin to capture users' Live Photos, which were then sent to the backend for verification. The module also included a sophisticated Resumption flow to allow users to resume their journey if interrupted.",
      },

      {
        id: "2",
        src: capital2,
        alt: "Capital Bank of Jordan",
        description:
          "Loyalty SDK: I integrated the Loyalty SDK to track users' steps. If a user exceeded 10,000 steps per day, they could claim loyalty points, which could later be converted into JOD. The step count resets every 24 hours, encouraging users to maintain daily activity.",
      },

      {
        id: "3",
        src: capital3,
        alt: "Capital Bank of Jordan",
        description:
          "Western Union: One of the most challenging modules in the Capital Bank of Jordan's app was the Western Union feature. It required the use of Data Structures and Design Patterns. A notable feature involved dynamically generating user input text fields based on API data. Each text field's details were dynamic, with no static elements. The module also involved making API calls based on user input and extracting data from dynamically generated text fields.",
      },

      {
        id: "4",
        src: capital3,
        alt: "Capital Bank of Jordan",
        description:
          "Dashboard: I developed a dynamic dashboard featuring various products such as Accounts, Cards, Term Deposits, Loans, and Investments. Each product had dynamic sub-pages with unique details and transaction histories. | Weekly Spending: I developed a bar graph algorithm using Flutter to calculate average weekly spending and visualize data. | Capital Invest Portfolio: I engineered custom bar graphs and line graphs using Flutter, displaying data using coordinate geometry equations. This involved developing algorithms for manipulating data and handling mathematical challenges, such as dividing by zero. | Custom Keyboard: I created a custom keyboard for user input, enhancing security and functionality compared to OS-provided keyboards.",
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
