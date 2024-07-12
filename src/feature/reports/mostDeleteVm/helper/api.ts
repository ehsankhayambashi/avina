import FetchApi, { TResponse } from "@/utils/FetchApi";

export const AgetHighestAmount = async (page: number, perPage: number, startDate: string, endDate: string, debouncedcSearch: string): Promise<TResponse<any>> => {
    return FetchApi.get(`${process.env.NEXT_PUBLIC_BSS_URL}/admin/reports/users/most-deleted-machine?paginate=true&limit=100&start_date=${startDate}&end_date=${endDate}&page=${page}&per_page=${perPage}&${debouncedcSearch ? "user_id=" + debouncedcSearch : ""}`, {});
};

export const AgetHighestAmountExcel = async (startDate: string, endDate: string): Promise<TResponse<any>> => {
    return FetchApi.get(`${process.env.NEXT_PUBLIC_BSS_URL}/admin/reports/users/most-deleted-machine?${startDate ? "start_date=" + startDate : ""}&${endDate ? "end_date=" + endDate : ""}&limit=100&excel=1`,
        {
            responseType: "blob",
        })
}

