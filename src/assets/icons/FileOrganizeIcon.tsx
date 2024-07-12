import React from "react";
import { iconInterface } from "./iconCompInterface";

const FileOrganizeIcon: React.FC<iconInterface> = ({ className }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 25"
        fill="none"
        stroke="currentColor"
        className={`${className}`}
      >
        <g clipPath="url(#clip0_2961_20829)">
          <path
            d="M2.5 6.19043V22.6904C2.5 23.0883 2.65804 23.4698 2.93934 23.7511C3.22064 24.0324 3.60218 24.1904 4 24.1904H20C20.3978 24.1904 20.7794 24.0324 21.0607 23.7511C21.342 23.4698 21.5 23.0883 21.5 22.6904V18.1904L9.5 6.19043H2.5Z"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.5 6.19043V2.69043C3.5 2.2926 3.65804 1.91107 3.93934 1.62977C4.22064 1.34846 4.60218 1.19043 5 1.19043H15.5L20.5 6.19043V17.1904"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.5 1.19043V4.69043C15.5 5.08825 15.658 5.46979 15.9393 5.75109C16.2206 6.03239 16.6022 6.19043 17 6.19043H20.5M5.5 18.1904H11.5V21.1904H5.5V18.1904Z"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2961_20829">
            <rect width="24" height="24" fill="white" transform="translate(0 0.69043)" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};
export default FileOrganizeIcon;
