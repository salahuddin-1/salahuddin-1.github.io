import { AppConstants } from "src/domain/constants/AppConstants";
import { DeviceTypeEnum } from "src/domain/enums/device_type_enum";

// CAPITAL BANK
import decision_based_onbd from "@assets/case_studies/decision_based_onbd.jpg";
import capital_steps from "@assets/case_studies/capital_steps.png";
import ci_pf_bar_line_graph from "@assets/case_studies/ci_pf_bar_line_graph.jpg";
import custom_keyboard from "@assets/case_studies/custom_keyboard.png";
import weekly_spending from "@assets/case_studies/weekly_spending.jpg";
import wu from "@assets/case_studies/wu.jpg";

// MANDI MARKET
import mandi_market_1 from "@assets/case_studies/mandi_market/mandi_market_1.jpg";
import mandi_market_2 from "@assets/case_studies/mandi_market/mandi_market_2.jpg";
import mandi_market_3 from "@assets/case_studies/mandi_market/mandi_market_3.jpg";
import mandi_market_4 from "@assets/case_studies/mandi_market/mandi_market_4.jpg";
import mandi_market_5 from "@assets/case_studies/mandi_market/mandi_market_5.jpg";

// RUMMOZ KITCHEN
import rummoz_kitchen_1 from "@assets/case_studies/rummoz_kitchen/rummoz_kitchen_1.jpg";
import rummoz_kitchen_2 from "@assets/case_studies/rummoz_kitchen/rummoz_kitchen_2.jpg";
import rummoz_kitchen_3 from "@assets/case_studies/rummoz_kitchen/rummoz_kitchen_3.jpg";

export default [
  // ---------------------------- CAPITAL BANK ----------------------------
  {
    projectName: "Capital Bank of Jordan",
    slug: "capital-bank-of-jordan",
    deviceType: DeviceTypeEnum.MOBILE,
    playstoreLink: AppConstants.CAPITAL_BANK_LINK,
    isProjectPrivate: false,
    caseStudyItems: [
      {
        id: "1",
        src: wu,
        alt: "Capital Bank of Jordan",
        description:
          "I worked on the 'Capital Bank of Jordan' application on the Mobile App side, utilizing Flutter and employing Clean Architecture + MVVM as the project's framework. I laid the foundation for the app and developed various key features. My contribution to Capital Bank of Jordan focused solely on the frontend, accounting for approximately 70% of the app's widgets. I established the foundation for the app, designing and customizing every button, text field, and color for reusability. |Western Union: One of the most challenging modules in the Capital Bank of Jordan's app was the Western Union feature. It required the use of Data Structures and Design Patterns. A notable feature involved dynamically generating user input text fields based on API data. Each text field's details were dynamic, with no static elements. The module also involved making API calls based on user input and extracting data from dynamically generated text fields. ",
      },

      {
        id: "5",
        src: ci_pf_bar_line_graph,
        alt: "Capital Bank of Jordan",
        description:
          "Capital Invest Portfolio: I engineered custom bar graphs and line graphs using Flutter, displaying data using coordinate geometry equations. This involved developing algorithms for manipulating data and handling mathematical challenges, such as dividing by zero.",
      },

      {
        id: "6",
        src: custom_keyboard,
        alt: "Capital Bank of Jordan",
        description:
          "Custom Keyboard: I created a custom keyboard for user input, enhancing security and functionality compared to OS-provided keyboards.",
      },

      {
        id: "3",
        src: decision_based_onbd,
        alt: "Capital Bank of Jordan",
        description:
          "Onboarding: One of the most challenging modules I worked on was the onboarding process. It involved intricate decision-making functions and complex logic. I integrated the Microblink SDK to scan Jordanian user IDs, retrieve data, and authenticate users. Additionally, I developed a custom frame and utilized the 'camera' plugin to capture users' Live Photos, which were then sent to the backend for verification. The module also included a sophisticated Resumption flow to allow users to resume their journey if interrupted.",
      },

      {
        id: "4",
        src: weekly_spending,
        alt: "Capital Bank of Jordan",
        description:
          "Dashboard: I developed a dynamic dashboard featuring various products such as Accounts, Cards, Term Deposits, Loans, and Investments. Each product had dynamic sub-pages with unique details and transaction histories. | Weekly Spending: I developed a bar graph algorithm using Flutter to calculate average weekly spending and visualize data.",
      },

      {
        id: "2",
        src: capital_steps,
        alt: "Capital Bank of Jordan",
        description:
          "Loyalty SDK: I integrated the Loyalty SDK to track users' steps. If a user exceeded 10,000 steps per day, they could claim loyalty points, which could later be converted into JOD. The step count resets every 24 hours, encouraging users to maintain daily activity.",
      },
    ],
  },

  // ---------------------------- MANDI MARKET ----------------------------
  {
    projectName: "Mandi Market",
    slug: "mandi-market",
    deviceType: DeviceTypeEnum.MOBILE,
    playstoreLink: null,
    isProjectPrivate: true,
    caseStudyItems: [
      {
        id: "1",
        src: mandi_market_1,
        alt: "Mandi Market 1",
        description:
          "Project Goal: The problem that the butchers' dealers faced was the manual process of calculating transactions. Every time they went to the market, they had to jot down calculations manually in their notebooks. Then, upon returning home, they had to redo all the calculations using a calculator, transcribing everything into their notebooks. However, this manual method posed several risks, including the potential for theft, alteration, and damage of their notebooks. Moreover, the tedious task of maintaining and reconciling the records daily added to their workload. Some dealers attempted to use laptops as an alternative solution. However, this approach also had its drawbacks. While laptops offered the convenience of digital storage, there were concerns about data security and integrity. Storing data locally on a laptop made it susceptible to damage or loss, further complicating the dealers' efforts to streamline their record-keeping process.",
      },

      {
        id: "2",
        src: mandi_market_2,
        alt: "Mandi Market 2",
        description:
          "Solution: Mandi Market is a business accounting app designed with user security in mind. Users can register and login securely, without compromising their data. The app is user-friendly and easy to use on mobile devices, making it convenient for users in markets. Firebase, SQLite, and Hive were utilized as databases, with Clean Architecture and MVVM employed as the architectural framework. The app features robust security measures, including biometric authentication, app PIN, and mobile number verification upon device change.",
      },

      {
        id: "3",
        src: mandi_market_3,
        alt: "Mandi Market 3",
        description:
          "Solution: Firebase serves as the backend tool, with Cloud Firestore used as the primary database and Firebase Authentication for phone number verification. The app performs complex calculations and follows various algorithms to support its functionalities.",
      },

      {
        id: "4",
        src: mandi_market_4,
        alt: "Mandi Market 4",
        description:
          "Solution: One significant challenge encountered during development was working with Firebase's date filtering capabilities. To address this, I designed an algorithm to calculate and retrieve specific date ranges from the database. I also shared this solution on Stack Overflow to assist others facing similar issues.",
      },

      {
        id: "5",
        src: mandi_market_5,
        alt: "Mandi Market 5",
        description:
          "Solution: The app executes numerous complex queries related to Firebase, many of which involve transactions and batches. To optimize Firebase read counts and reduce costs, various optimization techniques were employed, including pagination, data caching, data manipulation, and state preservation.",
      },
    ],
  },

  // ---------------------------- RUMMOZ KITCHEN ----------------------------

  {
    projectName: "Rummo'z Kitchen",
    deviceType: DeviceTypeEnum.MOBILE,
    slug: "rummoz-kitchen",
    playstoreLink: AppConstants.RUMMOZ_KITCHEN_LINK,
    isProjectPrivate: false,
    caseStudyItems: [
      {
        id: "1",
        src: rummoz_kitchen_2,
        alt: "Rummo'z Kitchen 1",
        description:
          "Introducing our groundbreaking cloud kitchen app, designed to transform the way you experience food delivery. This innovative platform offers the ultimate in dining convenience, featuring both on-demand orders and subscription-based services. With no physical dine-in space, we focus exclusively on fulfilling your online orders, bringing a rich variety of meals right to your doorstep. Whether you’re craving an instant culinary delight or prefer the ease of scheduled meal deliveries, our app caters to your every need. Our subscription service is perfect for those who value consistency and convenience, providing regular, hassle-free meal deliveries.",
      },

      {
        id: "2",
        src: rummoz_kitchen_3,
        alt: "Rummo'z Kitchen 2",
        description:
          "Each dish is prepared in our specialized cloud kitchens, ensuring that every order is fresh, delicious, and promptly delivered. Our user-friendly app is designed with your lifestyle in mind, offering personalized choices and a seamless ordering experience. Embrace the future of dining with us, where quality, variety, and convenience meet at the touch of a button.",
      },

      {
        id: "3",
        src: rummoz_kitchen_1,
        alt: "Rummo'z Kitchen 3",
        description:
          "It also consists of an Admin Portal to manage the end user application. Features like - See Registered Users - Manage Users (Restrict/Freeze/Cancel/Pause) - Add New Dish - Set Coupon - Send a notification - Set Offers - Manage Dropdowns - Set Meal Charges - Manage Orders - Kill Switch Settings",
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
