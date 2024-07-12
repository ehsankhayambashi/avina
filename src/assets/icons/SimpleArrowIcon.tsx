import { iconInterface } from "./iconCompInterface";

const SimpleArrowIcon = ({ className }: iconInterface) => {
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
              
      </svg> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 25"
        strokeWidth="1.5"
        fill="none"
        stroke="currentColor"
        className={`${className}`}
      >
        <path
          d="M19.5 8.53867L12 16.0387L4.5 8.53867"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
export default SimpleArrowIcon;
