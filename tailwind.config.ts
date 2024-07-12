import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // /app
    "./src/assets/**/*.{js,ts,jsx,tsx,mdx}", // /assets
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // /components
    "./src/feature/**/*.{js,ts,jsx,tsx,mdx}", // /feature
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}", // /layout
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}", // / utils
  ],
  theme: {
    extend: {
      keyframes: {
        progressAnimKeyframe: {
          "1%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      fontFamily: {
        IranYekan: "IranYekan",
        IranYekanBold: "IranYekanBold",
        IranYekanLight: "IranYekanLight",
        IranYekanNumber: "IranYekanNumber",
      },
      animation: {
        progressAnim: "progressAnimKeyframe 3s ease 0s",
      },
      colors: {
        asiatech: {
          yellow: "#FECE0D",
          orange: {
            900: "#F69E20",
            800: "#F7AA3C",
            700: "#F9C274",
            600: "#FDE7C7",
            500: "#FEF3E3",
            100: "#FFF8EB",
          },
          blue: {
            903: "#0099FF",
            902: "#006FEE",
            901: "#3471E7",
            900: "#1E7EB2",
            800: "#2DAAE1",
            750: "#CBEAF8AD",
            700: "#CBEAF8",
            600: "#EBF5F9",
            550: "#E5F4FB",
            301: "#E6F1FE",
            300: "#A3AED0",
            100: "#3471E71A",
          },
          darkblue: {
            904: "#1B1F30",
            903: "#001640",
            902: "#01050C",
            901: "#071A3E",
            900: "#061532",
            899: "#2B3674",
            800: "#0B2A63",
            700: "#A5C1F5",
            600: "#D2E0FA",
            502: "#8790A1",
            501: "#E3E8EC",
            500: "#E3ECFC",
            400: "#F4F7FE",
            300: "#222543",
          },
          red: {
            901: "#F31260",
            902: "#C7232E",
            900: "#C7242E",
            800: "#E8252C",
            750: "#E8005414",
            700: "#EE5C61",
            600: "#F1777B",
            500: "#F9C9CA",
            400: "#FCE4E5",
            300: "#FEE7EF",
            399: "#FFEAEB",
          },
          gray: {
            900: "#2F3B45",
            800: "#5E768A",
            702: "#e3edfce6",
            701: "#8D97AD",
            700: "#8399AB",
            610: "#A1A1AA",
            600: "#98AAB9",
            550: "#7A7C84",
            540: "#71717a66",
            510: "#E4E4E7",
            500: "#D6DDE3",
            450: "#E9EDF7",
            401: "#E4E7F2",
            400: "#EAEEF1",
            399: "#F5F6F8",
            300: "#F4F7F8",
            200: "#FAFAFA",
            160: "#d9d9d94d",
            150: "#D9D9D9",
            100: "#FCFCFF",
            70: "#ffffffb3",
            50: "#FFFFFF0D",
            0: "#ffffff00",
          },
          green: {
            902: "#3e884f",
            901: "#17C964",
            900: "#40CC75",
            800: "#70D998",
            700: "#88DFA9",
            600: "#A0E6BA",
            500: "#B7ECCB",
            400: "#CFF2DD",
            300: "#E8FAF0",
            399: "#DBFFE8",
          },
        },
      },
      borderRadius: {
        14: "14px",
        50: "50%",
      },
      boxShadow: {
        one: "0px 4px 46px 0px rgba(214, 221, 227, 0.25)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
