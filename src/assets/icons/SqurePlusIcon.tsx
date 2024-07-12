import React from "react";
import { iconInterface } from "./iconCompInterface";

const SqurePlusIcon: React.FC<iconInterface> = ({ className }) => {
  return (
    <>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1"
       
      >
        <path
          d="M11.2734 3.9997H7.47344C6.35333 3.9997 5.79328 3.9997 5.36546 4.21768C4.98913 4.40943 4.68317 4.71539 4.49142 5.09172C4.27344 5.51954 4.27344 6.07959 4.27344 7.1997V16.7997C4.27344 17.9198 4.27344 18.4799 4.49142 18.9077C4.68317 19.284 4.98913 19.59 5.36546 19.7817C5.79328 19.9997 6.35333 19.9997 7.47344 19.9997H17.0734C18.1935 19.9997 18.7536 19.9997 19.1814 19.7817C19.5577 19.59 19.8637 19.284 20.0555 18.9077C20.2734 18.4799 20.2734 17.9198 20.2734 16.7997V12.4997M15.7734 5.4997L18.6019 8.32812M11.0362 10.237L17.6844 3.58872C18.4655 2.80767 19.7318 2.80767 20.5128 3.58872C21.2939 4.36976 21.2939 5.63609 20.5128 6.41714L13.6509 13.2791C12.8892 14.0408 12.5084 14.4216 12.0746 14.7244C11.6896 14.9932 11.2744 15.2159 10.8374 15.3879C10.3451 15.5817 9.81722 15.6882 8.76137 15.9012L8.27344 15.9997L8.32089 15.6675C8.4888 14.4922 8.57275 13.9045 8.76373 13.3558C8.93318 12.8689 9.16468 12.4059 9.4525 11.9783C9.77685 11.4963 10.1966 11.0765 11.0362 10.237Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className={`${className}`}
      >
        <path d="M12 8.32739V15.6537" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.6668 11.9905H8.3335" strokeLinecap="round" strokeLinejoin="round" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.6857 2H7.31429C4.04762 2 2 4.31208 2 7.58516V16.4148C2 19.6879 4.0381 22 7.31429 22H16.6857C19.9619 22 22 19.6879 22 16.4148V7.58516C22 4.31208 19.9619 2 16.6857 2Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
export default SqurePlusIcon;
