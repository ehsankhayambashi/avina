import React from "react";
import { iconInterface } from "./iconCompInterface";
//reserved IP
const BookCloudIcon: React.FC<iconInterface> = ({ className }) => {
  return (
    <>
      <svg
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className}`}
      >
        <path
          d="M18.6328 15.2515V16.216M18.6328 16.216H7.19265C5.92453 16.216 4.89709 17.2435 4.89709 18.5116C4.89709 19.7797 5.92453 20.8071 7.19265 20.8071H17.5326C18.1423 20.8071 18.6372 20.3141 18.6391 19.7043L18.6328 16.216Z"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.5356 9.21561C12.5817 9.22369 11.8102 9.86494 11.8102 10.9562C11.8102 11.662 12.2306 12.2701 12.835 12.5431C13.0882 12.6464 13.3425 12.6859 13.5337 12.6859H17.6516C17.8437 12.6859 18.098 12.6482 18.3548 12.5449C18.9592 12.2719 19.3777 11.662 19.3777 10.9562C19.3777 9.86494 18.6071 9.22369 17.6533 9.21561C17.6533 8.52946 17.1145 7.15625 15.594 7.15625C14.0735 7.15625 13.5356 8.52946 13.5356 9.21561Z"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.40643 16.2165V4.27881"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.89618 18.5122V6.58404C4.89618 5.26293 5.96673 4.19238 7.28783 4.19238H17.5253C18.1361 4.19238 18.6318 4.68814 18.6318 5.29885V5.69582"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
export default BookCloudIcon;
