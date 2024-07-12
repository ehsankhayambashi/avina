import React from "react";
import { iconInterface } from "./iconCompInterface";

const PublishIcon: React.FC<iconInterface> = ({ className }) => {
  return (
    <>
      <svg
        viewBox="0 0 25 24"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className}`}
      >
        <path
          d="M4.25439 17.8512L6.78779 18.4368L7.37048 15.918"
          stroke-width="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.2533 6.1481L19.7199 5.5625L19.1372 8.08136"
          stroke-width="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.7929 18.1692C3.42473 14.6837 3.44703 9.12827 6.87822 5.67187C9.02671 3.50689 12.008 2.67212 14.7993 3.17143"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.7139 5.83008C23.0821 9.31459 23.0588 14.871 19.6286 18.3274C17.4801 20.4924 14.4988 21.3272 11.7075 20.8278"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
export default PublishIcon;
