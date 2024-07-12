import React from "react";
import { iconInterface } from "./iconCompInterface";

const TriangleExclamationIcon: React.FC<iconInterface> = ({ className }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
        strokeWidth="1.5"
        stroke="currentColor"
        className={`${className}`}
      >
        <path
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 13.3333V18.6666M16 22.6666H16.0134M9.91796 26.6666H22.0821C24.4677 26.6666 25.6605 26.6666 26.3581 26.1651C26.9667 25.7275 27.363 25.0539 27.45 24.3093C27.5497 23.456 26.9704 22.4133 25.8118 20.3279L19.7298 9.38016C18.5121 7.18831 17.9032 6.09239 17.1007 5.72872C16.4012 5.41171 15.5989 5.41171 14.8993 5.72872C14.0968 6.09239 13.488 7.18832 12.2703 9.38016L6.18822 20.3279C5.02968 22.4133 4.45041 23.456 4.55008 24.3093C4.63704 25.0539 5.03337 25.7275 5.64201 26.1651C6.33958 26.6666 7.53237 26.6666 9.91796 26.6666Z"
        />
      </svg>
    </>
  );
};
export default TriangleExclamationIcon;
