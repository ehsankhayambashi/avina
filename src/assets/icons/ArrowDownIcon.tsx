import { iconInterface } from "./iconCompInterface";

const ArrowDownIcon = ({ className }: iconInterface) => {
  return (
    <>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 12 13"
        strokeWidth="1"
        stroke="currentColor"
        className={`${className}`}
      >
        <path d="M5.79997 12L5.79998 1M5.79998 1L0.849975 5.95M5.79998 1L10.75 5.95" />
      </svg> */}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeWidth="1"
        stroke="currentColor"
        fill="none"
        className={`${className}`}
      >
        <path
          d="M18 9L12 15L6 9"
          //   stroke="#98AAB9"
          //   stroke-width="1.5"
          //   stroke-linecap="round"
          //   stroke-linejoin="round"
        />
      </svg>
    </>
  );
};
export default ArrowDownIcon;
