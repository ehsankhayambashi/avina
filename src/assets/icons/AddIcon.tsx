export interface addiconInterface {
    className: string;
    fill?: string;
  }
  
const AddIcon = ({ className, fill }: addiconInterface) => {
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
        <rect width="40" height="40" rx="12" fill={fill} />
        <path
          d="M12 20H28M20 12V28"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
export default AddIcon;
