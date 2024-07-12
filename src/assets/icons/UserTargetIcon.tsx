import React from "react";
import { iconInterface } from "./iconCompInterface";

const UserTargetIcon: React.FC<iconInterface> = ({ className }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 25"
        fill="none"
        className={`${className}`}
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <g clipPath="url(#clip0_2961_20854)">
          <path
            d="M12 13.6904C10.5 13.6904 9 14.1904 7.7 14.8904C7 15.2904 6.5 16.0904 6.5 16.8904V17.2904C6.5 17.6904 6.8 18.0904 7.3 18.0904H16.7C17.1 18.0904 17.5 17.6904 17.5 17.2904V16.8904C17.5 16.0904 17.1 15.2904 16.4 14.8904C15 14.1904 13.5 13.6904 12 13.6904Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 12.1904C13.3807 12.1904 14.5 11.0711 14.5 9.69043C14.5 8.30972 13.3807 7.19043 12 7.19043C10.6193 7.19043 9.5 8.30972 9.5 9.69043C9.5 11.0711 10.6193 12.1904 12 12.1904Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 23.1904C17.799 23.1904 22.5 18.4894 22.5 12.6904C22.5 6.89144 17.799 2.19043 12 2.19043C6.20101 2.19043 1.5 6.89144 1.5 12.6904C1.5 18.4894 6.20101 23.1904 12 23.1904Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M12 1.19043V4.19043" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 24.1904V21.1904" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M0.5 12.6904H3.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M23.5 12.6904H20.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_2961_20854">
            <rect width="24" height="24" fill="white" transform="translate(0 0.69043)" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};
export default UserTargetIcon;
