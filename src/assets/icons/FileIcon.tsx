import React from "react";
import { iconInterface } from "./iconCompInterface";

const FileIcon: React.FC<iconInterface> = ({ className }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        stroke="currentColor"
        className={`${className}`}
      >
        <path d="M15.99 16.2234H8.77002" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.99 12.0369H8.77002" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.525 7.86008H8.77002" strokeLinecap="round" strokeLinejoin="round" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.1824 2.74979C16.1824 2.74979 8.50541 2.75379 8.49341 2.75379C5.73341 2.77079 4.02441 4.58679 4.02441 7.35679V16.5528C4.02441 19.3368 5.74641 21.1598 8.53041 21.1598C8.53041 21.1598 16.2064 21.1568 16.2194 21.1568C18.9794 21.1398 20.6894 19.3228 20.6894 16.5528V7.35679C20.6894 4.57279 18.9664 2.74979 16.1824 2.74979Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
export default FileIcon;
