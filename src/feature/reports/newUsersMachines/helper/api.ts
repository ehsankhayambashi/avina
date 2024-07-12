import FetchApi, { TResponse } from "@/utils/FetchApi";

export const AGetNewUserMachine = async (page: number, pageCount: number, searchData: any): Promise<TResponse<any>> => {
    if (searchData.has_demo) {
        return FetchApi.get(`https://bss.asiatech.cloud/api/admin/reports/users/vm?paginate=true&page=${page}&per_page=${pageCount}
        &register_start_date=${searchData.start_date}&register_end_date=${searchData.end_date}&status=${searchData.status}&has_demo=${searchData.has_demo}`);
    }
    else {
        return FetchApi.get(`https://bss.asiatech.cloud/api/admin/reports/users/vm?paginate=true&page=${page}&per_page=${pageCount}
        &register_start_date=${searchData.start_date}&register_end_date=${searchData.end_date}&status=${searchData.status}`);
    }

};
