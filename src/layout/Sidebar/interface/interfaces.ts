import { Dispatch, SetStateAction } from "react";

type TRouteWithoutSubs = {
  title: string;
  icon: React.ReactNode;
  path: string;
  name: string;
  isShow: boolean
};

type TRouteWithSubs = {
  title: string;
  icon: React.ReactNode;
  path: 1;
  name: string;
  isShow: boolean
  children: any[];
  isOpen: boolean;
  height: string;
};

export type TRoutes = TRouteWithSubs | TRouteWithoutSubs;
export interface Iroutes {
  path: string;
  title: string;
  icon: React.ReactNode;
  children?: any[];
  isOpen?: boolean;
}
export interface ISidebar {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
export interface ISidebarLogo extends ISidebar { }
export interface ISidebarComponent extends ISidebar { }
export interface ISidebarMenu {
  open: boolean;
  mouseHover: boolean;
}
