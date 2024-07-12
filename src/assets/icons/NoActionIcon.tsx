import { iconInterface } from "./iconCompInterface";

const NoActionIcon: React.FC<iconInterface> = ({ className }) => {
  return (
    <>
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.2738 16.4169V16.9238C3.2738 18.2646 4.36158 19.3524 5.70234 19.3524H18.8453C20.186 19.3524 21.2738 18.2646 21.2738 16.9238V16.4169C21.2738 16.1133 21.0276 15.8672 20.7231 15.8672H3.8245C3.51996 15.8672 3.2738 16.1133 3.2738 16.4169Z"
          stroke="#5E768A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M19.9428 15.8668V7.66076C19.9428 5.99698 18.5943 4.64844 16.9314 4.64844H7.61523C5.95145 4.64844 4.60388 5.99698 4.60388 7.66076V15.8668"
          stroke="#5E768A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.884 8.79297L10.6664 12.0106M13.884 12.0106L10.6664 8.79297"
          stroke="#5E768A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};
export default NoActionIcon;
