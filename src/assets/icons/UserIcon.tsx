import React from "react";
import { iconInterface } from "./iconCompInterface";

const UserIcon: React.FC<iconInterface> = ({ className }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 16 20"
        strokeWidth="1"
        stroke="currentColor"
        className={`${className}`}
      >
        <path
          d="M1 19C1 15.134 4.13401 12 8 12C11.866 12 15 15.134 15 19M12 5C12 7.20914 10.2091 9 8 9C5.79086 9 4 7.20914 4 5C4 2.79086 5.79086 1 8 1C10.2091 1 12 2.79086 12 5Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
export default UserIcon;
