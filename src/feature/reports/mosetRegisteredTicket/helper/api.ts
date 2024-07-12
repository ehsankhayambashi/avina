import FetchApi, { TResponse } from "@/utils/FetchApi";

// گرفتن لسیت فاکتورها بیشترین تیکت ها
export const AGetTicketList = async (
    query: string,
): Promise<TResponse<any>> => {
    return FetchApi.get(
        `https://bssapi.asiatech.cloud/api/admin/reports/users/most-redmine-tickets?${query}`
    );
};
export const AGetTicketExcel = async (
    startDate: string,
    endDate: string
): Promise<TResponse<any>> => {
    return FetchApi.get(
        `https://bssapi.asiatech.cloud/api/admin/reports/users/most-redmine-tickets?start_date=${startDate}&end_date=${endDate}&excel=1`, {
        responseType: "blob",
    })

};
