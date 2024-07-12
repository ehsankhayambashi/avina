export interface addiconInterface {
  className: string;
  fill?: string;
}

const CdnIcon = ({ className, fill }: addiconInterface) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className={`${className}`}
      >
        <path
          d="M12 20.7887C16.6944 20.7887 20.5 16.9831 20.5 12.2887C20.5 7.59425 16.6944 3.78867 12 3.78867C7.30558 3.78867 3.5 7.59425 3.5 12.2887C3.5 16.9831 7.30558 20.7887 12 20.7887Z"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 5.78867C13.283 5.78998 14.5369 6.17035 15.6044 6.88201C16.6719 7.59368 17.5053 8.60489 18 9.78867M14.696 4.22567C18.041 2.01067 20.875 1.15767 22.003 2.28567C23.439 3.72167 21.663 7.92267 17.955 12.4237L15.183 15.4717C9.658 20.9957 3.755 24.0497 1.997 22.2917C0.869997 21.1647 1.722 18.3287 3.936 14.9847"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.206 4.16067C8.30857 3.56516 7.36565 3.0412 6.386 2.59367M5.51 2.23467C3.916 1.65867 2.659 1.62467 1.997 2.28567C0.238999 4.04367 3.293 9.94667 8.817 15.4717C14.342 20.9957 20.245 24.0497 22.003 22.2917C23.121 21.1737 22.293 18.3817 20.123 15.0747"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 2.78867C6.27614 2.78867 6.5 2.56481 6.5 2.28867C6.5 2.01252 6.27614 1.78867 6 1.78867C5.72386 1.78867 5.5 2.01252 5.5 2.28867C5.5 2.56481 5.72386 2.78867 6 2.78867Z"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.0647 14.3172L16.5871 13.6254C16.7247 13.5877 16.8565 13.702 16.8384 13.8436L16.5 16.5"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
        <path
          d="M3.30362 5.4695L3.11935 8.0786C3.10929 8.22093 2.95771 8.30725 2.83017 8.24328L0.436511 7.04266"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
        <path
          d="M17.4366 20.1716L19.0302 22.2458C19.1171 22.3589 19.061 22.5241 18.9231 22.5608L16.3357 23.2511"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
};
export default CdnIcon;
