import FetchApi, { TResponse } from "@/utils/FetchApi";

// گرفتن لسیت فاکتورها با فیلتر
export const AGetInvoiveByFilters = async (
    //QUERY : name=&trace-no=&serial=
    //Body: Start date,End date object
    query: string,
    body: any
): Promise<TResponse<any>> => {
    console.log("query", query)
    return FetchApi.post(
        `https://bssapi.asiatech.cloud/api/admin/reports/invoices/per-date?${query}`, body
    );
};
export const AGetInvoiveExcel = async (
    body: any
): Promise<TResponse<any>> => {
    return FetchApi.post(
        `https://bssapi.asiatech.cloud/api/admin/reports/invoices/export-finance-excel?excel=1`, body, {
        responseType: "blob",
    })

};
export const AGetInvoiveFastExcel = async (
    body: any
): Promise<TResponse<any>> => {
    return FetchApi.post(
        `https://bssapi.asiatech.cloud/api/admin/reports/invoices/export-invoice-excel`, body, {
        responseType: "blob",
    })

};