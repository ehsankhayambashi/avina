import { iconInterface } from "./iconCompInterface";

const MinusIcon = ({ className }: iconInterface) => {
  return (
    <>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className}`}
      >
        <rect width="40" height="40" rx="12" fill="#98AAB9" />
        <path
          d="M14 20L26 20"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
export default MinusIcon;
