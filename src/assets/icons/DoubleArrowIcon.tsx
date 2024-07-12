import React from "react";
import { iconInterface } from "./iconCompInterface";

const DoubleArrowIcon: React.FC<iconInterface> = ({ className }) => {
  return (
    <>
      <svg
        viewBox="0 0 8 8"
        fill="none"
        stroke-width="0.8"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        className={`${className}`}
      >
        <path d="M4.125 6.83333L1 3.91667L4.125 1" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.25 6.83333L4.125 3.91667L7.25 1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};
export default DoubleArrowIcon;
