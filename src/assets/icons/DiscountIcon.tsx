import React from "react";
import { iconInterface } from "./iconCompInterface";
//free IP
const DiscountIcon: React.FC<iconInterface> = ({ className }) => {
  return (
    <>
      <svg
        viewBox="0 0 25 25"
        fill="none"
        className={`${className}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.2962 20.766L17.5363 20.4021C17.0829 20.1851 16.5584 20.1695 16.0923 20.3602L13.9498 21.235C13.0848 21.5882 12.1147 21.5882 11.2497 21.236L9.10326 20.3602C8.63719 20.1695 8.11274 20.1851 7.65931 20.4031L6.90524 20.764C6.10542 21.1474 5.18107 20.5636 5.18204 19.6772L5.19956 7.42413C5.19956 5.00135 6.51798 3.5 8.94271 3.5H16.2422C18.6601 3.5 20.0087 5.00135 20.0087 7.42413L20.0184 19.6801C20.0194 20.5656 19.095 21.1484 18.2962 20.766Z"
          stroke="#40CC75"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.1762 14.9256L15.0237 10.0781"
          stroke="#40CC75"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.8761 14.7301V14.7756M15.0603 14.7399C15.0603 14.8422 14.9773 14.9251 14.875 14.9251C14.7727 14.9251 14.6898 14.8422 14.6898 14.7399C14.6898 14.6376 14.7727 14.5547 14.875 14.5547C14.9773 14.5547 15.0603 14.6376 15.0603 14.7399Z"
          stroke="#40CC75"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.3762 10.2301V10.2756M10.5603 10.2399C10.5603 10.3422 10.4773 10.4251 10.375 10.4251C10.2727 10.4251 10.1898 10.3422 10.1898 10.2399C10.1898 10.1376 10.2727 10.0547 10.375 10.0547C10.4773 10.0547 10.5603 10.1376 10.5603 10.2399Z"
          stroke="#40CC75"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
export default DiscountIcon;
