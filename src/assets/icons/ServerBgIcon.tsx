import React from "react";
import { iconInterface } from "./iconCompInterface";

const ServerBgIcon: React.FC<iconInterface> = ({ className }) => {
  return (
    <>
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className}`}
      >
        <rect
          x="40"
          y="40"
          width="40"
          height="40"
          rx="20"
          transform="rotate(-180 40 40)"
          fill="#FEF3E3"
        />
        <path
          d="M29 24.3879V26.5684C29 27.9986 27.9901 28.8889 26.5608 28.8889H13.4392C12.0099 28.8889 11 27.9986 11 26.5684V24.3879C11 22.9577 12.0099 22.0674 13.4392 22.0674H26.5608C27.9901 22.0674 29 22.9615 29 24.3879Z"
          stroke="#F49C22"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M29 13.4319V15.6123C29 17.0426 27.9901 17.9328 26.5608 17.9328H13.4392C12.0099 17.9328 11 17.0426 11 15.6123V13.4319C11 12.0016 12.0099 11.1113 13.4392 11.1113H26.5608C27.9901 11.1113 29 12.0055 29 13.4319Z"
          stroke="#F49C22"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M19.2469 14.5225H14.6914"
          stroke="#F49C22"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.6914 25.4775H19.2469"
          stroke="#F49C22"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};
export default ServerBgIcon;
