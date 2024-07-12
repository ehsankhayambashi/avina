import FetchApi, { TResponse } from "@/utils/FetchApi";

export const AGetNewAndRenewalUsers = async (page: number, perPage: number, data: any): Promise<TResponse<any>> => {
    return FetchApi.post(`${process.env.NEXT_PUBLIC_BSS_URL}/admin/reports/transactions/v2/customer-wallet?page=${page}&per_page=${perPage}`, data);
};

export const AGetNewAdnRenewalUserExcel = async (data: any): Promise<TResponse<any>> => {
    return FetchApi.post(`${process.env.NEXT_PUBLIC_BSS_URL}/admin/reports/transactions/customer-wallet?excel=1`, data,
        {
            responseType: "arrayBuffer",
        })
}

