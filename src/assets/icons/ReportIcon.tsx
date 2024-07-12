import React from "react";
import { iconInterface } from "./iconCompInterface";

const ReportIcon: React.FC<iconInterface> = ({ className }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 25 26"
        strokeWidth="1.5"
        stroke="currentColor"
        className={`${className}`}
      >
        <path
          d="M4.25 3.5V14.75C4.25 15.3467 4.48705 15.919 4.90901 16.341C5.33097 16.7629 5.90326 17 6.5 17H8.75M4.25 3.5H2.75M4.25 3.5H20.75M8.75 17H16.25M8.75 17L7.75 20M20.75 3.5H22.25M20.75 3.5V14.75C20.75 15.3467 20.5129 15.919 20.091 16.341C19.669 16.7629 19.0967 17 18.5 17H16.25M16.25 17L17.25 20M7.75 20H17.25M7.75 20L7.25 21.5M17.25 20L17.75 21.5M8 12.5L11 9.5L13.148 11.648C14.1572 10.1993 15.4722 8.98982 17 8.105"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
export default ReportIcon;
