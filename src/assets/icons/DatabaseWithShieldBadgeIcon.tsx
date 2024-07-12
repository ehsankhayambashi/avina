import React from "react";
import { iconInterface } from "./iconCompInterface";

const DatabaseWithShieldBadge: React.FC<iconInterface> = ({ className }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        className={`${className}`}
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <g clipPath="url(#clip0_2971_20930)">
          <path
            d="M19.5 23.5C23 21.87 23.5 20.76 23.5 17.41V14.8L19.5 13.5L15.5 14.8V17.41C15.5 20.76 16 21.87 19.5 23.5Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.5 18.5V21.28C21.07 20.5 21.43 19.94 21.5 18.5H19.5ZM19.5 18.5V15.6L17.5 16.26V18.5H19.5Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 6.5C16.799 6.5 21.5 5.15685 21.5 3.5C21.5 1.84315 16.799 0.5 11 0.5C5.20101 0.5 0.5 1.84315 0.5 3.5C0.5 5.15685 5.20101 6.5 11 6.5Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.5 16.21C14.0081 16.4068 12.5048 16.5036 11 16.5C5.2 16.5 0.5 15.16 0.5 13.5M21.5 8.5C21.5 10.16 16.8 11.5 11 11.5C5.2 11.5 0.5 10.16 0.5 8.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M0.5 3.5V18.5C0.5 20.16 5.2 21.5 11 21.5C12.7376 21.5081 14.4731 21.3777 16.19 21.11M21.5 14.15V3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2971_20930">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};
export default DatabaseWithShieldBadge;
