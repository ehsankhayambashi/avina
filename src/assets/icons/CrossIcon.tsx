import React from "react";
import { iconInterface } from "./iconCompInterface";

const CrossIcon: React.FC<iconInterface> = ({ className }) => {
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
        <path d="M8 8L24 24M24 8L8 24" />
      </svg>
    </>
  );
};
export default CrossIcon;
