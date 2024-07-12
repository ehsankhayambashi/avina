import React from "react";
import { iconInterface } from "./iconCompInterface";

const AiBrainIcon: React.FC<iconInterface> = ({ className }) => {
  return (
    <>
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className}`}
      >
        <rect
          x="40"
          y="40"
          width="40"
          height="40"
          rx="20"
          transform="rotate(-180 40 40)"
          fill="#E8FAF0"
        />
        <path
          d="M23.1872 27.3145C22.1962 27.8355 21.8896 29.5009 21.8896 29.5009"
          stroke="#17C964"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M19.5103 10.5034C21.3868 10.4617 23.168 10.7892 24.6348 12.0263C26.5178 13.6144 27.6192 15.5575 27.0489 18.1413C26.745 19.5186 27.7505 21.083 28.463 22.0401C28.7767 22.4615 28.6186 23.026 28.1285 23.215L27.201 23.5727C26.9334 23.6759 26.7379 23.9098 26.6838 24.1914L26.3736 26.8346C26.2707 27.5205 25.6876 27.8464 25.0359 27.7092L22.2515 27.0814C21.341 26.8807 21.3809 26.0571 21.143 25.1952"
          stroke="#17C964"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M12.3087 12.4668L15.4774 15.6355M15.4773 12.4668L12.3086 15.6355"
          stroke="#17C964"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.3086 20.8633C13.7638 23.468 14.436 26.4308 13.1934 29.2646"
          stroke="#17C964"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </>
  );
};
export default AiBrainIcon;
