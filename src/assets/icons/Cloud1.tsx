import { iconInterface } from "./iconCompInterface";

const Cloud1: React.FC<iconInterface> = ({ className }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 56 26"
        fill="none"
        stroke="currentColor"
        className={`${className} fill-current`}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M50 26H24.5H8V25.9836C7.83474 25.9945 7.66801 26 7.5 26C3.35786 26 0 22.6421 0 18.5C0 14.3579 3.35786 11 7.5 11C8.22099 11 8.91822 11.1017 9.57812 11.2916C11.4119 4.77618 17.3982 0 24.5 0C31.3986 0 37.2446 4.50679 39.2544 10.7367C40.2365 10.2646 41.3374 10 42.5 10C45.4012 10 47.9177 11.6473 49.1651 14.0576C49.438 14.0196 49.7167 14 50 14C53.3137 14 56 16.6863 56 20C56 22.973 53.8377 25.441 51 25.917V26H50Z"
        />
      </svg>
    </>
  );
};
export default Cloud1;
