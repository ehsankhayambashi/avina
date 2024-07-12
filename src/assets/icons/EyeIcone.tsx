import React from "react";
import { iconInterface } from "./iconCompInterface";

const EyeIcone: React.FC<iconInterface> = ({ className }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        className={`${className}`}
      >
        <path
          d="M15.0027 12.0039C15.0027 13.6608 13.6595 15.0039 12.0027 15.0039C10.3458 15.0039 9.00269 13.6608 9.00269 12.0039C9.00269 10.3471 10.3458 9.00391 12.0027 9.00391C13.6595 9.00391 15.0027 10.3471 15.0027 12.0039Z"
          stroke="#5E768A"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.0031 5.00391C7.5255 5.00391 3.73521 7.94678 2.46094 12.0039C3.73519 16.061 7.52549 19.0039 12.0031 19.0039C16.4808 19.0039 20.2711 16.061 21.5453 12.0039C20.2711 7.94682 16.4808 5.00391 12.0031 5.00391Z"
          stroke="#5E768A"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};
export default EyeIcone;
