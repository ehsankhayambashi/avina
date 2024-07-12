import { iconInterface } from "./iconCompInterface";

const ArrowIcon = ({ className }: iconInterface) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 12 13"
        strokeWidth="1"
        stroke="currentColor"
        className={`${className}`}
      >
        <path d="M5.79997 12L5.79998 1M5.79998 1L0.849975 5.95M5.79998 1L10.75 5.95" />
      </svg>
    </>
  );
};
export default ArrowIcon;
