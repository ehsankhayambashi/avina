import React from "react";
import { iconInterface } from "./iconCompInterface";

const TodoListIcon: React.FC<iconInterface> = ({ className }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 25"
        fill="none"
        strokeWidth="1"
        stroke="currentColor"
        className={`${className}`}
      >
        <g clipPath="url(#clip0_3888_1146)">
          <path
            d="M16.5 2.78867H19C19.8 2.78867 20.5 3.48867 20.5 4.28867V22.2887C20.5 23.0887 19.8 23.7887 19 23.7887H5C4.2 23.7887 3.5 23.0887 3.5 22.2887V4.28867C3.5 3.48867 4.2 2.78867 5 2.78867H7.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.7 1.78868C13.1 0.788675 11.9 0.488675 11 1.08868C10.7 1.28868 10.5 1.48868 10.3 1.78868H8.5C7.9 1.78868 7.5 2.18868 7.5 2.78868V3.28868C7.5 4.08868 8.2 4.78868 9 4.78868H15C15.8 4.78868 16.5 4.08868 16.5 3.28868V2.78868C16.5 2.18868 16.1 1.78868 15.5 1.78868H13.7Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 10.7887C8.05228 10.7887 8.5 10.341 8.5 9.78867C8.5 9.23638 8.05228 8.78867 7.5 8.78867C6.94772 8.78867 6.5 9.23638 6.5 9.78867C6.5 10.341 6.94772 10.7887 7.5 10.7887Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 15.7887C8.05228 15.7887 8.5 15.341 8.5 14.7887C8.5 14.2364 8.05228 13.7887 7.5 13.7887C6.94772 13.7887 6.5 14.2364 6.5 14.7887C6.5 15.341 6.94772 15.7887 7.5 15.7887Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 20.7887C8.05228 20.7887 8.5 20.341 8.5 19.7887C8.5 19.2364 8.05228 18.7887 7.5 18.7887C6.94772 18.7887 6.5 19.2364 6.5 19.7887C6.5 20.341 6.94772 20.7887 7.5 20.7887Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M11.5 9.78867H17.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11.5 14.7887H17.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11.5 19.7887H17.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_3888_1146">
            <rect width="24" height="24" fill="white" transform="translate(0 0.288666)" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};
export default TodoListIcon;
