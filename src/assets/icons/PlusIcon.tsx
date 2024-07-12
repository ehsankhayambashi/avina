import React from "react";
import { iconInterface } from "./iconCompInterface";

const PlusIcon: React.FC<iconInterface> = ({ className }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 16 16"
        strokeWidth="1.5"
        stroke="currentColor"
        className={`${className}`}
      >
        <path
          d="M2.66699 7.99996H13.3337M8.00033 2.66663V13.3333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
export default PlusIcon;
