import React from "react";
import { iconInterface } from "./iconCompInterface";

const PresentationBoardIcon: React.FC<iconInterface> = ({ className }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className={`${className}`}
      >
        <path
          d="M3.75 3V14.25C3.75 14.8467 3.98705 15.419 4.40901 15.841C4.83097 16.2629 5.40326 16.5 6 16.5H8.25M3.75 3H2.25M3.75 3H20.25M8.25 16.5H15.75M8.25 16.5L7.25 19.5M20.25 3H21.75M20.25 3V14.25C20.25 14.8467 20.0129 15.419 19.591 15.841C19.169 16.2629 18.5967 16.5 18 16.5H15.75M15.75 16.5L16.75 19.5M7.25 19.5H16.75M7.25 19.5L6.75 21M16.75 19.5L17.25 21M7.5 12L10.5 9L12.648 11.148C13.6572 9.69929 14.9722 8.48982 16.5 7.605"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
export default PresentationBoardIcon;
