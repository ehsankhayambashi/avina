import React from "react";
import { iconInterface } from "./iconCompInterface";

const FileAnouncementIcon: React.FC<iconInterface> = ({ className }) => {
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
        <g clipPath="url(#clip0_2961_20816)">
          <path
            d="M7 19.1904H5C4.60218 19.1904 4.22064 19.0324 3.93934 18.7511C3.65804 18.4698 3.5 18.0883 3.5 17.6904V2.69043C3.5 2.2926 3.65804 1.91107 3.93934 1.62977C4.22064 1.34846 4.60218 1.19043 5 1.19043H12.5L16.5 5.19043V15.4404"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.5 1.19043V3.69043C12.5 4.08825 12.658 4.46979 12.9393 4.75109C13.2206 5.03239 13.6022 5.19043 14 5.19043H16.5M17.5 14.1904V15.1904M17.5 15.1904V23.1904M17.5 15.1904L7 18.6904M17.5 23.1904V24.1904M17.5 23.1904L7 19.6904M19 22.1904L20 23.1904M7 18.1904V20.1904M9.599 20.6004C9.53628 20.7909 9.5029 20.9899 9.5 21.1904C9.3945 21.4637 9.35042 21.7569 9.37089 22.0491C9.39136 22.3413 9.47587 22.6255 9.61843 22.8814C9.76099 23.1373 9.95811 23.3588 10.1958 23.53C10.4335 23.7012 10.706 23.818 10.9939 23.8722C11.2818 23.9263 11.5781 23.9165 11.8617 23.8433C12.1454 23.7702 12.4095 23.6355 12.6353 23.4488C12.8611 23.2622 13.0431 23.0282 13.1683 22.7633C13.2936 22.4985 13.359 22.2094 13.36 21.9164M19 19.1904H20.5M19 16.1904L20 15.1904"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2961_20816">
            <rect width="24" height="24" fill="white" transform="translate(0 0.69043)" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};
export default FileAnouncementIcon;
