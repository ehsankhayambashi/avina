import React from "react";
import { iconInterface } from "./iconCompInterface";
//lock IP
const CloudLockIcon: React.FC<iconInterface> = ({ className }) => {
  return (
    <>
      <svg
        viewBox="0 0 25 25"
        fill="none"
        className={`${className}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.9488 16.0208V14.9387C13.937 13.9726 13.1438 13.1993 12.1776 13.2111C11.2323 13.2228 10.4672 13.9844 10.4509 14.9306V16.0208"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.6643 20.545H10.7342C9.93107 20.545 9.28003 19.8939 9.28003 19.0908V17.4464C9.28003 16.6432 9.93107 15.9922 10.7342 15.9922H13.6643C14.4675 15.9922 15.1185 16.6432 15.1185 17.4464V19.0908C15.1185 19.8939 14.4675 20.545 13.6643 20.545Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.7637 17.2662C20.1998 16.6172 21.2 15.1714 21.2 13.492C21.2 10.8962 19.3698 9.35303 17.097 9.35108C17.097 7.71843 15.8165 4.45312 12.2 4.45312C8.58341 4.45312 7.30298 7.71843 7.30298 9.35108C5.03303 9.37151 3.19995 10.8962 3.19995 13.492C3.19995 15.1714 4.19919 16.6172 5.63627 17.2662"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
export default CloudLockIcon;
