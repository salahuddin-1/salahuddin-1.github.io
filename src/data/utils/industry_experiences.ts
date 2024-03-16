import iconAccountBal from "@assets/icon_account_balance.png";
import iconBriefCase from "@assets/icon_balance.png";
import iconSchool from "@assets/icon_reduce_capacity.png";
import iconShipping from "@assets/icon_shipping.png";
import iconStethoscope from "@assets/icon_stethoscope.png";
import iconBarcode from "@assets/icon_local_mall.png";
import iconChart from "@assets/icon_barcode.png";
import iconChessKnight from "@assets/icon_chess_knight.png";
import iconFestival from "@assets/icon_restaurant.png";
import { IndustryExperience } from "./industry_experience_props";

export default [
  {
    industry: "Banking & Finance",
    slug: "banking-and-finance",
    src: iconAccountBal,
  },

  {
    industry: "Accounting",
    slug: "accounting",
    src: iconBriefCase,
  },

  {
    industry: "E-commerce",
    slug: "e-commerce",
    src: iconBarcode,
  },

  {
    industry: "Social Networking",
    slug: "social-networking",
    src: iconSchool,
  },

  {
    industry: "Logistics",
    slug: "logistics",
    src: iconChart,
  },

  {
    industry: "Online Gaming & Betting",
    slug: "online-gaming-and-betting",
    src: iconChessKnight,
  },

  {
    industry: "Food Tech",
    slug: "food-tech",
    src: iconFestival,
  },

  // {
  //   industry: "",
  //   slug: "",
  //   src: iconShipping,
  // },

  // {
  //   industry: "",
  //   slug: "",
  //   src: iconShipping,
  // },
] as IndustryExperience[];
