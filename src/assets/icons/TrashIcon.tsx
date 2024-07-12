import React from "react";
import { iconInterface } from "./iconCompInterface";

const TrashIcon: React.FC<iconInterface> = ({ className }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1"
        stroke="currentColor"
        className={`${className}`}
      >
        <path
          d="M18.2734 6L17.4726 18.0129C17.4024 19.065 17.3674 19.5911 17.1401 19.99C16.94 20.3412 16.6383 20.6235 16.2745 20.7998C15.8614 21 15.3342 21 14.2797 21H10.2672C9.21271 21 8.68546 21 8.27233 20.7998C7.90861 20.6235 7.60683 20.3412 7.40676 19.99C7.17951 19.5911 7.14444 19.065 7.07429 18.0129L6.27344 6M4.27344 6H20.2734M16.2734 6L16.0028 5.18807C15.7405 4.40125 15.6094 4.00784 15.3661 3.71698C15.1514 3.46013 14.8755 3.26132 14.5639 3.13878C14.2111 3 13.7964 3 12.967 3H11.5799C10.7505 3 10.3358 3 9.98294 3.13878C9.67135 3.26132 9.39552 3.46013 9.18073 3.71698C8.93749 4.00784 8.80635 4.40125 8.54408 5.18807L8.27344 6M14.2734 10V17M10.2734 10V17"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
export default TrashIcon;
