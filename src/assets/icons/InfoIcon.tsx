import React from "react";
import { iconInterface } from "./iconCompInterface";

const InfoIcon: React.FC<iconInterface> = ({ className }) => {
  return (
    <>
      <svg
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} fill-current`}
        strokeWidth="1.5"
      >
        <path
          d="M10 6.5H10.01M10 9.5V14.5M19 10.5C19 15.4706 14.9706 19.5 10 19.5C5.02944 19.5 1 15.4706 1 10.5C1 5.52944 5.02944 1.5 10 1.5C14.9706 1.5 19 5.52944 19 10.5Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
export default InfoIcon;
