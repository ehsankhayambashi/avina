import React from "react";
import { iconInterface } from "./iconCompInterface";

const ChartPresentationIcon: React.FC<iconInterface> = ({ className }) => {
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
        <path
          d="M1.5 2.34521H22.5V15.8452C22.5 16.6452 21.8 17.3452 21 17.3452H3C2.2 17.3452 1.5 16.6452 1.5 15.8452V2.34521Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 23.3452C12.2761 23.3452 12.5 23.1214 12.5 22.8452C12.5 22.5691 12.2761 22.3452 12 22.3452C11.7239 22.3452 11.5 22.5691 11.5 22.8452C11.5 23.1214 11.7239 23.3452 12 23.3452Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M12 22.3452V17.3452" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M7.5 10.3452H4.5V14.3452H7.5V10.3452Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.5 7.34521H10.5V14.3452H13.5V7.34521Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.5 5.34521H16.5V14.3452H19.5V5.34521Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
export default ChartPresentationIcon;
