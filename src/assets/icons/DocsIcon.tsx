import React from "react";
import { iconInterface } from "./iconCompInterface";

const DocsIcon: React.FC<iconInterface> = ({ className }) => {
  return (
    <>
      <svg
        viewBox="0 0 22 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        className={`${className}`}
      >
        <path
          d="M18 11.2888L20 13.2888M21.086 12.2028L14.999 18.2888L12.5 18.7888L13 16.2878L19.086 10.2028C19.2838 10.0049 19.5357 9.87022 19.8101 9.81564C20.0844 9.76105 20.3687 9.78906 20.6272 9.8961C20.8856 10.0032 21.1064 10.1844 21.2618 10.417C21.4172 10.6496 21.5001 10.923 21.5 11.2028C21.5 11.5778 21.351 11.9378 21.086 12.2028Z"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.5 15.7887V22.2887C17.5 22.6865 17.342 23.0681 17.0607 23.3494C16.7794 23.6307 16.3978 23.7887 16 23.7887H2C1.60218 23.7887 1.22064 23.6307 0.93934 23.3494C0.658035 23.0681 0.5 22.6865 0.5 22.2887V2.2887C0.5 1.89087 0.658035 1.50934 0.93934 1.22804C1.22064 0.946732 1.60218 0.788696 2 0.788696H12.5L17.5 5.7887V11.7887"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.5 0.788696V4.2887C12.5 4.68652 12.658 5.06805 12.9393 5.34936C13.2206 5.63066 13.6022 5.7887 14 5.7887H17.5M4.5 18.7887H12.5M4.5 15.7887H11.5M4.5 12.7887H13.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
export default DocsIcon;
