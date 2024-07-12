import { useState } from "react";

export default function useSidebarComponent() {
  const [open, setOpen] = useState<boolean>(false);

  return {
    open,
    setOpen,
  };
}
