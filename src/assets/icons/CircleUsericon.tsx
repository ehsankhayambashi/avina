import React from "react";
import { iconInterface } from "./iconCompInterface";

const CircleUserIcon: React.FC<iconInterface> = ({ className }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 25"
        strokeWidth="1"
        stroke="currentColor"
        className={`${className}`}
      >
        <g clipPath="url(#clip0_663_8217)">
          <path
            d="M12 12.375C13.6569 12.375 15 11.0319 15 9.375C15 7.71815 13.6569 6.375 12 6.375C10.3431 6.375 9 7.71815 9 9.375C9 11.0319 10.3431 12.375 12 12.375Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.0001 14.375C10.2033 14.4244 8.44305 14.8936 6.86005 15.745C6.44902 15.9569 6.10451 16.2782 5.86452 16.6734C5.62454 17.0687 5.49841 17.5226 5.50005 17.985V18.445C5.49873 18.568 5.52181 18.69 5.56795 18.804C5.6141 18.918 5.68239 19.0217 5.76888 19.1091C5.85537 19.1965 5.95834 19.2659 6.07183 19.3133C6.18532 19.3606 6.30708 19.385 6.43005 19.385H17.5701C17.693 19.385 17.8148 19.3606 17.9283 19.3133C18.0418 19.2659 18.1447 19.1965 18.2312 19.1091C18.3177 19.0217 18.386 18.918 18.4322 18.804C18.4783 18.69 18.5014 18.568 18.5001 18.445V17.985C18.4999 17.5243 18.3729 17.0725 18.133 16.6792C17.8931 16.2858 17.5496 15.9661 17.1401 15.755C15.5579 14.9001 13.7976 14.4275 12.0001 14.375Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 24.375C18.3513 24.375 23.5 19.2263 23.5 12.875C23.5 6.52373 18.3513 1.375 12 1.375C5.64873 1.375 0.5 6.52373 0.5 12.875C0.5 19.2263 5.64873 24.375 12 24.375Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_663_8217">
            <rect width="24" height="24" transform="translate(0 0.875)" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};
export default CircleUserIcon;
