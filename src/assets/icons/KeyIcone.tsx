import React from "react";
import { iconInterface } from "./iconCompInterface";

const KeyIcone: React.FC<iconInterface> = ({ className }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        className={`${className}`}
      >
        <path
          d="M12.3212 10.6852L4 19L6 21M7 16L9 18M20 7.5C20 9.98528 17.9853 12 15.5 12C13.0147 12 11 9.98528 11 7.5C11 5.01472 13.0147 3 15.5 3C17.9853 3 20 5.01472 20 7.5Z"
          stroke="#5E768A"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};
export default KeyIcone;
