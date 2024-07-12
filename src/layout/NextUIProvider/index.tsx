"use client";

import { NextUIProvider } from "@nextui-org/react";
import { Tooltip } from "react-tooltip";

export default function NextUIProviderIndex({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NextUIProvider>{children}</NextUIProvider>
      <Tooltip
        float={true}
        noArrow
        className="z-20 !bg-asiatech-gray-100 !rounded-14 p-4"
        // render={({ content }) => {
        //   return <div>{content}</div>;
        // }}
        id="tooltip"
      />
    </>
  );
}
