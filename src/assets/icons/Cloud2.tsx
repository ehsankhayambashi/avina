import { iconInterface } from "./iconCompInterface";

const Cloud2: React.FC<iconInterface> = ({ className }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 65 29"
        fill="none"
        stroke="currentColor"
        className={`${className} fill-current`}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29 29H23.5H10.5H9V28.8937C3.91156 28.1658 0 23.7897 0 18.5C0 12.701 4.70101 8 10.5 8L10.535 8.00006C12.9182 3.25572 17.8289 0 23.5 0C30.9503 0 37.0882 5.61891 37.9072 12.8502C39.5694 14.7034 41.4597 16.3353 43.4231 17.125C46.6364 18.4174 51.4043 18.0001 54.2644 17.5694C55.402 16.5912 56.882 16 58.5 16C62.0899 16 65 18.9101 65 22.5C65 25.9228 62.3543 28.7278 58.9964 28.9813L59 29H58.5H39H29Z"
        />
      </svg>
    </>
  );
};
export default Cloud2;
