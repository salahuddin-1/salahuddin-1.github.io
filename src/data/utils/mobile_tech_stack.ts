import iconFlutter from "@assets/icon_flutter_logo.svg";
import iconReactNative from "@assets/icon_react_logo.svg";
import iconFirebase from "@assets/icon_firebase_logo.svg";
import iconNestJs from "@assets/icon_nestjs_logo.svg";
import iconSupabase from "@assets/icon_supabase_logo.svg";
import { TechStackEnum } from "src/domain/enums/tech_stack_enum";
import { TechStackProps } from "./tech_stack_props";

export default [
  {
    src: iconFlutter,
    type: TechStackEnum.MOBILE,
    typeString: "Mobile",
    slug: "flutter",
    name: "Flutter",
    layoutProps: {
      name: "Flutter",
      src: iconFlutter,
      minWidth: "90px",
      padding: "3%",
      top: "10%",
      left: "15%",
      width: {
        base: "23%",
        lg: "18%",
        xl: "13%",
        "2xl": "10%",
      },
    },
  },

  {
    src: iconReactNative,
    type: TechStackEnum.MOBILE,
    typeString: "Mobile",
    slug: "react",
    name: "React",
    layoutProps: {
      name: "React",
      src: iconReactNative,
      minWidth: "60px",
      padding: "3%",
      top: "22%",
      right: "15%",
      width: {
        base: "15%",
        lg: "20%",
        xl: "13%",
        "2xl": "11%",
      },
    },
  },

  {
    src: iconFirebase,
    type: TechStackEnum.MOBILE,
    typeString: "Mobile",
    slug: "firebase",
    name: "Firebase",
    layoutProps: {
      name: "Firebase",
      src: iconFirebase,
      bottom: "10%",
      right: "15%",
      minWidth: "90px",
      padding: "1%",
      width: {
        base: "23%",
        lg: "28%",
        xl: "20%",
        "2xl": "16%",
      },
    },
  },

  {
    src: iconNestJs,
    type: TechStackEnum.MOBILE,
    typeString: "Mobile",
    slug: "nestJs",
    name: "NestJS",
    layoutProps: {
      name: "NestJS",
      src: iconNestJs,
      minWidth: "110px",
      padding: "3%",
      top: "65%",
      left: "10%",

      width: {
        base: "20%",
        lg: "25%",
        xl: "17%",
        "2xl": "12%",
      },
    },
  },

  {
    src: iconSupabase,
    type: TechStackEnum.MOBILE,
    typeString: "Mobile",
    slug: "supabase",
    name: "Supabase",
    layoutProps: {
      name: "Supabase",
      src: iconSupabase,
      minWidth: "110px",
      padding: "3%",
      top: "40%",
      left: "35%",

      width: {
        base: "20%",
        lg: "25%",
        xl: "17%",
        "2xl": "12%",
      },
    },
  },
] as TechStackProps[];
