import React from "react";
import { iconInterface } from "./iconCompInterface";

const BugleIcon: React.FC<iconInterface> = ({ className }) => {
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
          d="M19 20.7887C20.933 20.7887 22.5 16.5354 22.5 11.2887C22.5 6.04196 20.933 1.78867 19 1.78867C17.067 1.78867 15.5 6.04196 15.5 11.2887C15.5 16.5354 17.067 20.7887 19 20.7887Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.6 13.7887C17 13.9887 18.3 13.0887 18.5 11.7887C18.7 10.3887 17.8 9.08866 16.5 8.88866C16.2 8.78866 15.9 8.78866 15.6 8.88866"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19 1.78867C14.4 1.78867 11.9 6.78867 8.5 6.78867H3C2.2 6.78867 1.5 8.78867 1.5 11.2887C1.5 13.7887 2.2 15.7887 3 15.7887H8.5C11.9 15.7887 14.4 20.7887 19 20.7887"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 6.78867C8.2 6.78867 7.5 8.78867 7.5 11.2887C7.5 13.7887 8.2 15.7887 9 15.7887M4.5 15.7887L6.2 21.6887C6.4 22.2887 7 22.7887 7.6 22.7887H10.3C10.9 22.7887 11.5 22.2887 11.5 21.5887V21.3887C11.5 20.7887 11 20.1887 10.3 20.1887C9.8 20.1887 9.4 19.8887 9.2 19.3887L8 15.7887"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
export default BugleIcon;
