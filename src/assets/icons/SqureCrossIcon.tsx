import React from "react";
import { iconInterface } from "./iconCompInterface";

const SqureCrossIcon: React.FC<iconInterface> = ({ className }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={`${className}`}
      >
        <path d="M14.8955 9.5949L10.1035 14.3869" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.8976 14.3898L10.1016 9.5928" strokeLinecap="round" strokeLinejoin="round" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.835 2.7502H8.16598C5.14498 2.7502 3.25098 4.8892 3.25098 7.9162V16.0842C3.25098 19.1112 5.13598 21.2502 8.16598 21.2502H16.834C19.865 21.2502 21.751 19.1112 21.751 16.0842V7.9162C21.751 4.8892 19.865 2.7502 16.835 2.7502Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
export default SqureCrossIcon;
