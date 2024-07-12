import React from "react";
import { iconInterface } from "./iconCompInterface";

const ServerTimeIcon: React.FC<iconInterface> = ({ className }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        className={`${className}`}
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          d="M18.5 21.5C21.2614 21.5 23.5 19.2614 23.5 16.5C23.5 13.7386 21.2614 11.5 18.5 11.5C15.7386 11.5 13.5 13.7386 13.5 16.5C13.5 19.2614 15.7386 21.5 18.5 21.5Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M18.5 13.5V16.5L20 18" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M20 2.5H2C1.17157 2.5 0.5 3.17157 0.5 4V8C0.5 8.82843 1.17157 9.5 2 9.5H20C20.8284 9.5 21.5 8.82843 21.5 8V4C21.5 3.17157 20.8284 2.5 20 2.5Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.5 12.52V11C21.5 10.6022 21.342 10.2206 21.0607 9.93934C20.7794 9.65804 20.3978 9.5 20 9.5H2C1.60218 9.5 1.22064 9.65804 0.93934 9.93934C0.658035 10.2206 0.5 10.6022 0.5 11V15C0.5 15.3978 0.658035 15.7794 0.93934 16.0607C1.22064 16.342 1.60218 16.5 2 16.5H13.5M3.5 4.5V7.5M5.5 4.5V7.5M7.5 4.5V7.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 6.5C18.2761 6.5 18.5 6.27614 18.5 6C18.5 5.72386 18.2761 5.5 18 5.5C17.7239 5.5 17.5 5.72386 17.5 6C17.5 6.27614 17.7239 6.5 18 6.5Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 6.5C15.2761 6.5 15.5 6.27614 15.5 6C15.5 5.72386 15.2761 5.5 15 5.5C14.7239 5.5 14.5 5.72386 14.5 6C14.5 6.27614 14.7239 6.5 15 6.5Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.5 11.5V14.5M5.5 11.5V14.5M7.5 11.5V14.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
export default ServerTimeIcon;
