import React from "react";
import { iconInterface } from "./iconCompInterface";

const AtachIcon: React.FC<iconInterface> = ({ className }) => {
  return (
    <>
      <svg
        width="18"
        height="19"
        viewBox="0 0 18 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className}`}
      >
        <path
          d="M16.8278 9.24367L9.70741 16.3641C7.75479 18.3167 4.58896 18.3167 2.63634 16.3641C0.683719 14.4114 0.68372 11.2456 2.63634 9.293L9.47171 2.45763C10.7735 1.15589 12.884 1.15589 14.1858 2.45763C15.4875 3.75938 15.4875 5.86993 14.1858 7.17168L7.36135 13.9961C6.71048 14.647 5.6552 14.647 5.00433 13.9961C4.35345 13.3452 4.35345 12.2899 5.00433 11.6391L11.2258 5.41762"
          stroke="#5E768A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
export default AtachIcon;
