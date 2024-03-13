import iconFlutter from "@assets/icon_flutter_logo.svg";
import iconReactNative from "@assets/icon_react_logo.svg";
import iconFirebase from "@assets/icon_firebase_logo.svg";
import iconNestJs from "@assets/icon_nestjs_logo.svg";
import iconSupabase from "@assets/icon_supabase_logo.svg";
import { TechStackEnum } from "src/domain/enums/tech_stack_enum";
import { TechStackProps } from "./tech_stack_props";

const size = {
  base: "80px",
  sm: "90px",
  md: "120px",
  lg: "180px",
  "2xl": "220px",
};

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
      width: size,
      height: size,
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
      width: size,
      height: size,
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
      bottom: "6%",
      right: "15%",
      width: {
        base: "90px",
        sm: "120px",
        md: "150px",
        lg: "180px",
        "2xl": "220px",
      },
      height: {
        base: "90px",
        sm: "120px",
        md: "150px",
        lg: "180px",
        "2xl": "220px",
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

      top: "44%",
      left: "35%",
      minWidth: "90px",
      padding: "5%",
      width: size,
      height: size,
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
      top: "67%",
      left: "10%",
      width: size,
      height: size,
    },
  },
] as TechStackProps[];
