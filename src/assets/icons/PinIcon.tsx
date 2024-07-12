import React from "react";
import { iconInterface } from "./iconCompInterface";

const PinIcon: React.FC<iconInterface> = ({ className }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 18 18"
        strokeWidth="1"
        stroke="currentColor"
        className={`${className}`}
      >
        <path
          d="M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z"
          stroke="#5E768A"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.6667 9C11.6667 10.4728 10.4728 11.6667 9 11.6667C7.52724 11.6667 6.33333 10.4728 6.33333 9C6.33333 7.52724 7.52724 6.33333 9 6.33333C10.4728 6.33333 11.6667 7.52724 11.6667 9Z"
          stroke="#5E768A"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
export default PinIcon;
