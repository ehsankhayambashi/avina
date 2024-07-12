import FetchApi, { TResponse } from "@/utils/FetchApi";

export const AHighestServerCreation = async (page: number, perPage: number, data: any, searchInput: String): Promise<TResponse<any>> => {
    return FetchApi.get(`${process.env.NEXT_PUBLIC_BSS_URL}/admin/reports/users/most-created-machine?paginate=true&limit=500&start_date=${data.start_date}&end_date=${data.end_date}&page=${page}&per_page=${perPage}&user_id=${searchInput}`);
};
export const AHighestServerCreationExcel = (data: any) => {
    return FetchApi.get(`${process.env.NEXT_PUBLIC_BSS_URL}/admin/reports/users/most-created-machine?start_date=${data.start_date}&end_date=${data.end_date}&limit=100&excel=1`, {
        responseType: "arrayBuffer",
    })
}
