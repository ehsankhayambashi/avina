import React from "react";
import { iconInterface } from "./iconCompInterface";

const MonitorChartIcon: React.FC<iconInterface> = ({ className }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 25"
        fill="none"
        stroke="currentColor"
        className={`${className}`}
      >
        <path
          d="M7.5 8.78867H4.5V12.7887H7.5V8.78867Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.5 5.78867H10.5V12.7887H13.5V5.78867Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.5 3.78867H16.5V12.7887H19.5V3.78867Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 18.7887C9.5 18.7887 9.7 22.7887 7.5 22.7887H16.5C14.3 22.7887 14.5 18.7887 14.5 18.7887M2 1.78867H22C22.8 1.78867 23.5 2.48867 23.5 3.28867V17.2887C23.5 18.0887 22.8 18.7887 22 18.7887H2C1.2 18.7887 0.5 18.0887 0.5 17.2887V3.28867C0.5 2.48867 1.2 1.78867 2 1.78867Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M0.5 14.7887H23.5" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M12 17.2887C12.2761 17.2887 12.5 17.0648 12.5 16.7887C12.5 16.5125 12.2761 16.2887 12 16.2887C11.7239 16.2887 11.5 16.5125 11.5 16.7887C11.5 17.0648 11.7239 17.2887 12 17.2887Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
export default MonitorChartIcon;
