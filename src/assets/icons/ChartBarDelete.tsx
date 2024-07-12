import React from "react";
import { iconInterface } from "./iconCompInterface";

const ChartBarDelete: React.FC<iconInterface> = ({ className }) => {
  return (
    <>
      <svg
        viewBox="0 0 40 40"
        fill="none"
        className={`${className}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="40"
          y="40"
          width="40"
          height="40"
          rx="20"
          transform="rotate(-180 40 40)"
          fill="#E6F1FE"
        />
        <path
          d="M15.5206 18.5693V24.4969M19.5524 15.7335V24.4968M23.5185 21.7017V24.4965"
          stroke="#006FEE"
          stroke-width="1.44"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M19.7291 11.4734H15.4718C12.65 11.4734 10.88 13.4714 10.88 16.2997V23.9281C10.88 26.7564 12.6416 28.7535 15.4718 28.7535H23.5682C26.3993 28.7535 28.16 26.7564 28.16 23.9281V20.1397"
          stroke="#006FEE"
          stroke-width="1.44"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M29.1224 14.8334L24.8024 10.5134M24.8 14.8334L29.12 10.5134"
          stroke="#006FEE"
          stroke-width="1.44"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};
export default ChartBarDelete;
