import FetchApi, { TResponse } from "@/utils/FetchApi";

export const AgetWalletReport = async (page: number, perPage: number, startDate: string, endDate: string): Promise<TResponse<any>> => {
    return FetchApi.post(`${process.env.NEXT_PUBLIC_BSS_URL}/admin/reports/wallet/per-date?paginate=true&start_date=${startDate}&end_date=${endDate}&page=${page}&per_page=${perPage}`, {});
};


