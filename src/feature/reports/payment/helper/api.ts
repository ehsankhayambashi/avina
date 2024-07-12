import FetchApi, { TResponse } from "@/utils/FetchApi";


// export const AGetDailyPayment = async (): Promise<TResponse<any>> => {
//     return FetchApi.get(`https://bss.asiatech.cloud/api/admin/reports/payments/per-day`);
//     //   return FetchApi.get(`https://bss.asiatech.cloud/api/admin/domain/taratell.com.?page=${page}&page_count=${pageCount}`, {});
// };

// domainName: string | null, page: number, pageCount: string, searchRecords: string

export const AGetDailyPayment = async (page: number, pageCount: number, searchData: any): Promise<TResponse<any>> => {
    // return FetchApi.get(`https://bss.asiatech.cloud/api/admin/reports/payments/per-day`);
    return FetchApi.post(`https://bss.asiatech.cloud/api/admin/reports/payments/per-date?paginate=true&page=${page}&per_page=${pageCount}`, { ...searchData });
};
