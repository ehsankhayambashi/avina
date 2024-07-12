import React from "react";
import { iconInterface } from "./iconCompInterface";

const CoinsIcon: React.FC<iconInterface> = ({ className }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        stroke="currentColor"
        className={`${className}`}
      >
        <path
          d="M11 20H5C3.89543 20 3 19.1046 3 18C3 16.8954 3.89543 16 5 16M11 20C12.1046 20 13 19.1046 13 18C13 16.8954 12.1046 16 11 16M11 20H19C20.1046 20 21 19.1046 21 18C21 16.8954 20.1046 16 19 16M11 16H5M11 16H19M11 16C12.1046 16 13 15.1046 13 14C13 12.8954 12.1046 12 11 12M5 16C3.89543 16 3 15.1046 3 14C3 12.8954 3.89543 12 5 12M19 16C20.1046 16 21 15.1046 21 14C21 12.8954 20.1046 12 19 12M11 12H19M11 12H5M11 12C12.1046 12 13 11.1046 13 10C13 8.89543 12.1046 8 11 8M19 12C20.1046 12 21 11.1046 21 10C21 8.89543 20.1046 8 19 8H11M11 8H5M11 8C12.1046 8 13 7.10457 13 6C13 4.89543 12.1046 4 11 4H5C3.89543 4 3 4.89543 3 6C3 7.10457 3.89543 8 5 8M5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
export default CoinsIcon;
