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

// GOCHI
import gochi_1 from "@assets/case_studies/gochi/gochi_1.jpg";
import gochi_2 from "@assets/case_studies/gochi/gochi_2.jpg";
import gochi_3 from "@assets/case_studies/gochi/gochi_3.jpg";
import gochi_4 from "@assets/case_studies/gochi/gochi_4.jpg";

// FEED
import feed_1 from "@assets/case_studies/feed/feed_1.jpg";
import feed_2 from "@assets/case_studies/feed/feed_2.jpg";
import feed_3 from "@assets/case_studies/feed/feed_3.jpg";
import feed_4 from "@assets/case_studies/feed/feed_4.jpeg";
import feed_5 from "@assets/case_studies/feed/feed_5.jpeg";

// HANZAIB COLLECTION
import hanzaib_1 from "@assets/case_studies/hanzaib_collection/hanzaib_1.jpg";
import hanzaib_2 from "@assets/case_studies/hanzaib_collection/hanzaib_2.jpg";
import hanzaib_3 from "@assets/case_studies/hanzaib_collection/hanzaib_3.jpg";

// PRABODHAM
import prabodham_1 from "@assets/case_studies/prabodham/prabodham_1.jpg";
import prabodham_2 from "@assets/case_studies/prabodham/prabodham_2.jpg";

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

  // ---------------------------- GOCHI ----------------------------

  {
    projectName: "GoChi",
    deviceType: DeviceTypeEnum.MOBILE,
    slug: "gochi",
    playstoreLink: AppConstants.GOCHI_LINK,
    isProjectPrivate: false,
    caseStudyItems: [
      {
        id: "1",
        src: gochi_1,
        alt: "GoChi 1",
        description:
          "Goal: The goal was to develop an E-commerce system allowing end users to purchase fresh and halal meat, including goat, chicken, and eggs, through mobile applications. This system comprised three software components - | An Android app for end users, an iOS app for end users, and an Android/iOS Admin Portal. The Admin Portal empowered the client to manage all aspects of the products, including pricing, availability, coupons, notifications, and messages, providing comprehensive control through a convenient Android application interface.",
      },

      {
        id: "2",
        src: gochi_2,
        alt: "GoChi 2",
        description:
          "Role: My contribution encompassed several key responsibilities. I designed the user experience and user interface, developed the frontend and backend utilizing Firebase, conducted thorough testing, and independently deployed the applications to the Play Store.",
      },

      {
        id: "3",
        src: gochi_3,
        alt: "GoChi 3",
        description:
          "Success of the Project: The project garnered widespread acclaim for its simplicity and ease of use. Users praised its straightforward navigation, streamlined checkout processes, and minimal registration/login requirements. Leveraging Google Sign-In simplified access for users, aligning with contemporary expectations. | Moreover, the published E-commerce app facilitated online purchases of chicken, mutton, and eggs from a local distributor in Mumbai. Additionally, aspiring distributors could register through the app to sell these products. Firebase served as the backend tool, with Cloud Firestore managing the app's database and Firebase Authentication verifying users' phone numbers. The implementation of FCM and Cloud Functions enabled efficient push notifications.",
      },

      {
        id: "4",
        src: gochi_4,
        alt: "GoChi 4",
        description:
          " Success of the Project: The app provided a dynamic platform for distributors, offering an admin portal for managing products, adjusting prices, creating coupons, and launching promotional offers. Customers could leave product reviews directly within the app, contributing to a robust feedback loop.",
      },
    ],
  },

  // ---------------------------- FEED ----------------------------

  {
    projectName: "Feed",
    deviceType: DeviceTypeEnum.MOBILE,
    slug: "feed",
    playstoreLink: null,
    isProjectPrivate: false,
    caseStudyItems: [
      {
        id: "1",
        src: feed_1,
        alt: "Feed 1",
        description:
          "Project goal : During my time as a student at Shree L.R Tiwari college of Engineering, I observed several challenges related to social and professional interaction within our college community | Lack of Communication - There was a noticeable lack of communication and connectivity among students and faculty members, hindering opportunities for collaboration and networking. | Administrative Burdens - Teachers often struggled with managing administrative tasks such as attendance tracking and class scheduling, which increased their workload and stress levels. | Disconnect in Social Networking - Many students and faculty members were unfamiliar with each other's interests and backgrounds beyond their immediate circles, resulting in a lack of meaningful connections within the college community.",
      },

      {
        id: "2",
        src: feed_2,
        alt: "Feed 2",
        description:
          "Furthermore, the absence of a centralized platform for disseminating common notices about events and activities further exacerbated the communication challenges within the college community. This lack of streamlined communication channels often led to missed opportunities for engagement and participation in various college events and initiatives. | Role: As the Team Lead, I oversaw both the UI/UX design and development.",
      },

      {
        id: "3",
        src: feed_3,
        alt: "Feed 3",
        description:
          "Solution: This mobile application, developed as my final year project, was created using Flutter. Its primary focus was on user authentication and verification using an innovative algorithm called the `Banker's Algorithm.` The goal was to ensure that only authorized users, including students, teachers, and college staff, could access the app, effectively keeping out unwanted users from outside our college community. | The application itself functioned as a privatized social networking platform, encompassing three distinct domains. The first domain resembled popular social networking apps like Instagram, allowing users to share educational posts, personal photos, and stories. Within this domain, users had the ability to interact by liking, commenting, and reacting to posts.",
      },

      {
        id: "4",
        src: feed_4,
        alt: "Feed 4",
        description:
          "The profile section was divided into two parts - the social profile and the professional profile. The social profile contained information such as the user's username, name, bio, and profile photo. On the other hand, the professional profile showcased the user's skills, hobbies, projects, and generated a visually appealing resume in PDF format based on this information. | Additionally, the application featured an explore section, enabling users to discover and connect with other students, professors, and individuals on campus who shared similar interests. The second domain of the app was a chat feature that allowed users to send and receive messages, facilitating communication within the college community. | Lastly, the third domain focused on college-related functionalities, including tracking attendance, accessing students' mark sheets, sharing important notices, and providing links to relevant topics.",
      },

      {
        id: "5",
        src: feed_5,
        alt: "Feed 5",
        description:
          "Overall, this mobile application served as a comprehensive solution, combining social networking, communication, and college-specific features to enhance the overall experience for students, teachers, and college staff. ",
      },
    ],
  },

  // ---------------------------- HANZAIB COLLECTION ----------------------------

  {
    projectName: "Hanzaib Collection",
    deviceType: DeviceTypeEnum.MOBILE,
    slug: "hanzaib-collection",
    playstoreLink: null,
    isProjectPrivate: true,
    caseStudyItems: [
      {
        id: "1",
        src: hanzaib_2,
        alt: "HanZaib Collection 1",
        description:
          "Goal: The goal was to develop a logistics app wherein the client could input both the origin and destination addresses. Initially, the from address was fixed but could be modified as needed. Utilizing this data, the app would generate a visually appealing PDF document incorporating the addresses alongside the company's logo, facilitating easy printing for shipment purposes. Additionally, the app featured a history review function to track all previous shipments. Firebase served as the backend for storing the data.",
      },

      {
        id: "2",
        src: hanzaib_1,
        alt: "HanZaib Collection 2",
        description:
          "Role: In this project, I undertook the task of designing the UI/UX and developing the UI using Flutter. Furthermore, I implemented Firebase as the backend solution.",
      },

      {
        id: "3",
        src: hanzaib_3,
        alt: "HanZaib Collection 3",
        description:
          "Success of the Project: The project proved to be a resounding success, greatly benefiting the client by significantly reducing the manual workload associated with address documentation and branding. The client expressed immense satisfaction with the app, as it saved numerous hours previously spent on manual address entry and logo attachment, ultimately streamlining the logistics process.",
      },
    ],
  },

  // ---------------------------- PRABODHAM ----------------------------

  {
    projectName: "Prabodham",
    deviceType: DeviceTypeEnum.MOBILE,
    slug: "prabodham",
    playstoreLink: AppConstants.PRABODHAM_LINK,
    isProjectPrivate: false,
    caseStudyItems: [
      {
        id: "1",
        src: prabodham_1,
        alt: "Prabodham 1",
        description:
          "Goal: The goal was to develop an E-commerce Direct-to-Consumer (D2C) cross-platform app for Android and iOS, enabling end users to purchase skincare products from the client, Prabodham.",
      },

      {
        id: "2",
        src: prabodham_2,
        alt: "Prabodham 2",
        description:
          "Role: In this project, I took on the role of UI/UX designer and developer, utilizing Flutter to create the app's user interface. Additionally, I served as the team lead, overseeing a team of two members. Together, we successfully developed an MVP for the client, encompassing all essential modules and features.",
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
