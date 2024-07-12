import React from "react";
import { iconInterface } from "./iconCompInterface";

const ReceiptIcon2: React.FC<iconInterface> = ({ className }) => {
  return (
    <>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className={`${className}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.2467 14.0593H11.8477M17.2467 9.86523H11.8477"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.21793 5.27595V9.5833V17.8205C8.21793 19.2585 7.05231 20.4242 5.61328 20.4242H17.7511C19.8352 20.4242 20.9911 19.0211 20.9911 16.7522L20.9999 5.27595C20.9999 4.446 20.2059 3.90698 19.5171 4.26016L18.8642 4.6046C18.475 4.80795 18.0255 4.81671 17.6188 4.63962L15.774 3.81941C15.0239 3.49249 14.1939 3.49249 13.4438 3.81941L11.598 4.63962C11.1923 4.81671 10.7418 4.80795 10.3536 4.6046L9.70074 4.26016C9.01188 3.90698 8.21793 4.45476 8.21793 5.27595Z"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.61341 20.4242C4.88951 20.4242 4.23665 20.1333 3.76865 19.6653C3.29189 19.1885 3 18.5356 3 17.8205V10.5728C3 9.74192 3.79492 9.20386 4.48378 9.55705L5.13665 9.90148C5.52487 10.1048 5.97535 10.1136 6.38108 9.93651L7.62649 9.38094C7.72281 9.33619 7.96995 9.451 8.21805 9.58332"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};
export default ReceiptIcon2;
