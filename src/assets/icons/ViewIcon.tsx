import React from "react";
import { iconInterface } from "./iconCompInterface";

const ViewIcon: React.FC<iconInterface> = ({ className }) => {
  return (
    <>
      <svg
        width="21"
        height="16"
        viewBox="0 0 21 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className}`}
      >
        <path
          d="M13.2742 8C13.2742 9.65685 11.931 11 10.2742 11C8.61732 11 7.27417 9.65685 7.27417 8C7.27417 6.34315 8.61732 5 10.2742 5C11.931 5 13.2742 6.34315 13.2742 8Z"
          stroke="#5E768A"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.2746 1C5.79698 1 2.0067 3.94288 0.732422 7.99997C2.00668 12.0571 5.79698 15 10.2746 15C14.7523 15 18.5425 12.0571 19.8168 8.00004C18.5426 3.94291 14.7523 1 10.2746 1Z"
          stroke="#5E768A"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
export default ViewIcon;
