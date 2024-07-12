import React from "react";
import { iconInterface } from "./iconCompInterface";

const CpuIcon: React.FC<iconInterface> = ({ className }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 26 26"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className={`${className}`}
      >
        <path
          d="M8.32165 3.04945H17.6842C20.9417 3.04945 22.959 4.81766 22.9499 8.06607V17.9268C22.9499 21.1751 20.9313 22.9524 17.6738 22.9524H8.32165C5.07453 22.9524 3.04688 21.144 3.04688 17.8437V8.06607C3.04688 4.81766 5.07453 3.04945 8.32165 3.04945Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.3978 3.04971V1M12.9984 3.04971V1M7.59888 3.04971V1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.59888 22.9503V25M12.9984 22.9503V25M18.3978 22.9503V25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.04971 7.59889H1M3.04971 12.9984H1M3.04971 18.3978H1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.9503 18.3978H25M22.9503 12.9984H25M22.9503 7.59889H25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.232 8.26035H10.7719C9.22423 8.26035 8.25775 9.10228 8.25775 10.6499V15.3099C8.25775 16.8821 9.22423 17.7436 10.7719 17.7436H15.2268C16.7796 17.7436 17.7409 16.8964 17.7409 15.3488V10.6499C17.7461 9.10228 16.7836 8.26035 15.232 8.26035Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
export default CpuIcon;
