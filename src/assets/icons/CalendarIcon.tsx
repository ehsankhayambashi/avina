import React from "react";
import { iconInterface } from "./iconCompInterface";

const CalendarIcon: React.FC<iconInterface> = ({ className }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 25"
        fill="none"
        strokeWidth="1.5"
        stroke="currentColor"
        className={`${className}`}
      >
        <path d="M3.09351 9.82788H20.9175" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.4431 13.7333H16.4524" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.0056 13.7333H12.0149" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.55884 13.7333H7.5681" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.4431 17.6198H16.4524" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.0056 17.6198H12.0149" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.55884 17.6198H7.5681" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.0447 2.42358V5.71436" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.96655 2.42358V5.71436" strokeLinecap="round" strokeLinejoin="round" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.2392 4.00281H7.77194C4.83525 4.00281 3.00098 5.63874 3.00098 8.64583V17.6955C3.00098 20.7499 4.83525 22.4236 7.77194 22.4236H16.23C19.1759 22.4236 21.001 20.7782 21.001 17.7711V8.64583C21.0102 5.63874 19.1852 4.00281 16.2392 4.00281Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
export default CalendarIcon;
