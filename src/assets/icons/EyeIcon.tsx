import React from "react";
import { iconInterface } from "./iconCompInterface";

const EyeIcon: React.FC<iconInterface> = ({ className }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.5"
        stroke="currentColor"
        className={`${className}`}
      >
        <path
          d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.0004 5C7.52281 5 3.73253 7.94288 2.45825 12C3.73251 16.0571 7.52281 19 12.0005 19C16.4781 19 20.2684 16.0571 21.5426 12C20.2684 7.94291 16.4781 5 12.0004 5Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
export default EyeIcon;
