import FetchApi, { TResponse } from "@/utils/FetchApi";

export const AMeData = async (): Promise<TResponse<any>> => {
  return FetchApi.get("https://bss.asiatech.cloud/api/users/auth/me");
};
