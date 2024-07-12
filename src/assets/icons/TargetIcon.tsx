import React from "react";
import { iconInterface } from "./iconCompInterface";

const TargetIcon: React.FC<iconInterface> = ({ className }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 25"
        fill="none"
        className={`${className}`}
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <g clipPath="url(#clip0_2961_20840)">
          <path d="M10 14.1912L12.5 11.6912" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M12.5 11.6912H13.5C14.4 11.6912 18.5 6.69116 18.5 6.69116H20.5C22.3 6.69116 23.5 4.69116 23.5 4.69116C23.5 4.69116 21.1 4.29116 20.5 3.69116C19.9 3.09116 19.5 0.691162 19.5 0.691162C19.5 0.691162 17.5 1.89116 17.5 3.69116V5.69116C17.5 5.69116 12.5 9.79116 12.5 10.6912V11.6912Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.0998 6.89121C12.0998 3.49121 6.0998 4.09121 2.6998 8.09121C-0.7002 12.0912 -0.1002 18.0912 3.8998 21.4912C7.8998 24.8912 13.8998 24.2912 17.2998 20.2912C20.1998 16.7912 20.1998 11.5912 17.2998 8.09121"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.5 8.69113C10.5 7.19116 6.8999 7.49111 4.7999 10.3911C2.6999 13.2911 3.2999 17.3911 6.1999 19.4911C9.0999 21.5911 13.1999 20.9911 15.2999 18.0911C16.9999 15.7911 16.9999 12.6911 15.2999 10.3911"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 17.6912C11.933 17.6912 13.5 16.1242 13.5 14.1912C13.5 12.2582 11.933 10.6912 10 10.6912C8.067 10.6912 6.5 12.2582 6.5 14.1912C6.5 16.1242 8.067 17.6912 10 17.6912Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2961_20840">
            <rect width="24" height="24" fill="white" transform="translate(0 0.191162)" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};
export default TargetIcon;
