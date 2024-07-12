import PinIcon from "@/assets/icons/PinIcon";
import AsiatechLogo from "@/assets/logo/AsiatechLogo";
import { ISidebarLogo } from "../interface/interfaces";

function SidebarLogo({ open, setOpen }: ISidebarLogo) {
  return (
    <>
      <div className="w-56 flex items-center justify-between pt-8 px-2">
        <div className="flex">
          <AsiatechLogo className="h-10 w-10 inline" />
          <div className="flex flex-col mr-3">
            <span className="font-light text-[9px]">عصر داده های</span>
            <p className="text-xl font-bold"> آسیاتک</p>
          </div>
        </div>
        <div
          className="w-9 h-9 flex justify-center items-center bg-asiatech-gray-300 rounded-14 cursor-pointer"
          onClick={() => {
            setOpen(!open);
            console.log(open, "open");
          }}
        >
          <PinIcon className="w-5 h-5" />
        </div>
      </div>
    </>
  );
}

export default SidebarLogo;
