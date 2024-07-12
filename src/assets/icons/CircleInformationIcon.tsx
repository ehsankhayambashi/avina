import React from "react";
import { iconInterface } from "./iconCompInterface";

const CircleInformationIcon: React.FC<iconInterface> = ({ className }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className={`${className}`}
      >
        <path
          d="M10 6H10.01M10 9V14M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
          stroke="#3471E7"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
        strokeWidth="1.5"
        stroke="currentColor"
        className={`${className}`}
      >
        <path
          d="M16 10.6667H16.0133M16 14.6667V21.3333M28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg> */}
    </>
  );
};
export default CircleInformationIcon;
