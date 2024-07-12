import React from "react";
import { iconInterface } from "./iconCompInterface";

const CardsIcon: React.FC<iconInterface> = ({ className }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 25"
        fill="none"
        strokeWidth="1.5"
        stroke="currentColor"
        className={`${className}`}
      >
        <g clipPath="url(#clip0_3888_1276)">
          <path
            d="M5 8.78867H22C22.8 8.78867 23.5 9.48867 23.5 10.2887V21.2887C23.5 22.0887 22.8 22.7887 22 22.7887H5C4.2 22.7887 3.5 22.0887 3.5 21.2887V10.2887C3.5 9.48867 4.2 8.78867 5 8.78867Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.9 16.7887C18.6 16.7887 18.2 16.8887 18 17.0887C17.7 16.8887 17.4 16.7887 17.1 16.7887C16.3 16.7887 15.6 17.4887 15.6 18.2887C15.6 19.0887 16.3 19.7887 17.1 19.7887C17.4 19.7887 17.8 19.6887 18 19.4887C18.3 19.6887 18.6 19.7887 18.9 19.7887C19.7 19.7887 20.4 19.0887 20.4 18.2887C20.4 17.4887 19.8 16.7887 18.9 16.7887Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.1 8.78867L19.1 4.68867L18.1 2.98867L8.1 8.78867"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.5 11.4887L0.900002 12.9887L1.9 14.6887L3.5 13.7887"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.4 8.78867L17.8 2.58867C17.4 1.88867 16.5 1.68867 15.8 2.08867L1.2 10.4887C0.499999 10.8887 0.299999 11.7887 0.699999 12.4887L3.5 17.3887"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M6.5 16.7887H11.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6.5 19.7887H13.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_3888_1276">
            <rect width="24" height="24" fill="white" transform="translate(0 0.288666)" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};
export default CardsIcon;
