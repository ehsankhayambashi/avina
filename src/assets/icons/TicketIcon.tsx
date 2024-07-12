import React from "react";
import { iconInterface } from "./iconCompInterface";

const TicketIcon: React.FC<iconInterface> = ({ className }) => {
  return (
    <>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className}`}
      >
        <path
          d="M19.0039 10C19.0039 14.9706 14.9745 19 10.0039 19C7.9675 19 1.00463 19 1.00463 19C1.00463 19 2.56382 15.2561 1.93982 14.0008C1.34076 12.7956 1.00391 11.4372 1.00391 10C1.00391 5.02944 5.03334 1 10.0039 1C14.9745 1 19.0039 5.02944 19.0039 10Z"
          stroke="#8790A1"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
export default TicketIcon;
