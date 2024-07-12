"use client";

import { Body } from "@/layout/Body";
import { NavbarComponent } from "@/layout/Navbar";
import { SidebarComponent } from "@/layout/Sidebar";
import FetchApi, { TResponse } from "@/utils/FetchApi";
import { useRouter } from "next/navigation";
import { useState } from "react";
import redaxios from "redaxios";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const access =
    typeof window !== "undefined" ? window.localStorage.getItem("access") : "";
  //baraie login kardan to site
  // if (access && router) {
  //   redaxios
  //     .get(`https://bss.asiatech.cloud/api/admin/users/permissions`, {
  //       headers: {
  //         authorization: `Bearer ` + access,
  //       },
  //     })
  //     .then((response: TResponse<any>) => {
  //       if (access) {
  //         FetchApi.setToken(access);
  //       } else {
  //         router.push("/login");
  //       }
  //     })
  //     .catch(() => {
  //       router.push("/login");
  //     });
  // }
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <SidebarComponent open={open} setOpen={setOpen} />
      <div
        className={`min-h-screen h-full w-full overflow-hidden transition-all duration-300 main-page ${
          open ? "pr-56" : "pr-14"
        }`}
      >
        <NavbarComponent />
        <Body>{children}</Body>
      </div>
    </>
  );
}
