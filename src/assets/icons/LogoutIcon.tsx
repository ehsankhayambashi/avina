import { iconInterface } from "./iconCompInterface";

const LogoutIcon = ({ className }: iconInterface) => {
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
        viewBox="0 0 19 20"
        fill="none"
        stroke="currentColor"
        className={`${className}`}
      >
        <path
          d="M11.75 7.2887V3.5387C11.75 2.94196 11.5129 2.36966 11.091 1.94771C10.669 1.52575 10.0967 1.2887 9.5 1.2887H3.5C2.90326 1.2887 2.33097 1.52575 1.90901 1.94771C1.48705 2.36966 1.25 2.94196 1.25 3.5387V17.0387C1.25 17.6354 1.48705 18.2077 1.90901 18.6297C2.33097 19.0516 2.90326 19.2887 3.5 19.2887H9.5C10.0967 19.2887 10.669 19.0516 11.091 18.6297C11.5129 18.2077 11.75 17.6354 11.75 17.0387V13.2887M14.75 13.2887L17.75 10.2887M17.75 10.2887L14.75 7.2887M17.75 10.2887H5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
export default LogoutIcon;
