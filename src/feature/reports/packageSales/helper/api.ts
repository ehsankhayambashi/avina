import FetchApi, { TResponse } from "@/utils/FetchApi";

export const AgetPackageSales = async (page: number, perPage: number, startDate: string, endDate: string, debouncedcSearch: string): Promise<TResponse<any>> => {
    return FetchApi.post(`${process.env.NEXT_PUBLIC_BSS_URL}/admin/reports/packages/per-day/v2?paginate=true&start_date=${startDate}&end_date=${endDate}&page=${page}&per_page=${perPage}&${debouncedcSearch ? "user_id=" + debouncedcSearch : ""}`, {});
};

export const AgetPackageSalesExcel = async (start_date: string, end_date: string): Promise<TResponse<any>> => {
    return FetchApi.post(`${process.env.NEXT_PUBLIC_BSS_URL}/admin/reports/packages/per-day?excel=1`, { start_date, end_date },
        {
            responseType: "blob",
        })
}

