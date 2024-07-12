import { TResponse } from "@/utils/FetchApi";
import { AMeData } from "./api";

export const meData = (setPersonalData: Function) => {
  AMeData().then((response: TResponse<any>) => {
    localStorage.setItem("id", response.data.data.data[0].id);
    setPersonalData(response.data.data.data[0]);
  });
};
