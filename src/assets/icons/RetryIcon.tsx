import React from "react";
import { iconInterface } from "./iconCompInterface";

const RetryIcon: React.FC<iconInterface> = ({ className }) => {
  return (
    <>
      <svg
        strokeWidth="1.5"
        stroke="currentColor"
        className={`${className}`}
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.2576 15.4153V15.3787"
          stroke="#5E768A"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.2522 8.62317V12.5556"
          stroke="#5E768A"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.94809 17.4011L6.28661 17.9417L6.82448 15.6166"
          stroke="#5E768A"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.5625 6.59823L18.224 6.05768L17.6861 8.38278"
          stroke="#5E768A"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.29132 17.6946C3.18224 14.4772 3.20283 9.34915 6.37008 6.15863C8.3533 4.16019 11.1053 3.38963 13.6819 3.85053"
          stroke="#5E768A"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.2184 6.30469C21.3275 9.52116 21.306 14.6502 18.1397 17.8407C16.1564 19.8391 13.4045 20.6097 10.8279 20.1487"
          stroke="#5E768A"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
export default RetryIcon;
