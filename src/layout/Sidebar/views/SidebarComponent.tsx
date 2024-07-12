import { useState } from "react";
import { ISidebarComponent } from "../interface/interfaces";
import SidebarLogo from "./SidebarLogo";
import SidebarMenu from "./SidebarMenu";

export default function SidebarComponent({ open, setOpen }: ISidebarComponent) {
  const [mouseHover, setMouseHover] = useState<boolean>(false);
  return (
    <aside
      onMouseOver={() => {
        setMouseHover(true);
      }}
      onMouseOut={() => {
        setMouseHover(false);
      }}
      className={`fixed right-0 min-h-full bg-white overflow-hidden transition-all duration-1000 z-50 ${
        open ? "w-56" : "w-14"
      } ${mouseHover ? "hover:w-56" : ""}`}
    >
      <SidebarLogo open={open} setOpen={setOpen} />
      <SidebarMenu open={open} mouseHover={mouseHover} />
    </aside>
  );
}
