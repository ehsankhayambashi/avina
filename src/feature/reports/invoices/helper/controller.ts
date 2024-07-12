import Notify from "@/utils/Notify";
import fileDownload from "js-file-download";
import { AGetInvoiveByFilters, AGetInvoiveExcel, AGetInvoiveFastExcel } from "./api";

export const getInvoiceListFilter = (
    //QUERY : name=&trace-no=&serial=
    query: string,
    body: any,
    setTableData: Function,
    setTotalItems: Function,
    setIsLoading: Function,
    setFromAdvance: Function,
) => {
    setIsLoading(true)
    AGetInvoiveByFilters(query, body)
        .then((json: any) => {
            // setFromAdvance(false)
            setIsLoading(false)
            setTableData(json.data.data.data)
            setTotalItems(json.data.data.countOfPage)
        })
        .catch((err) => {
            Notify.error("خطایی رخ داده")
            setIsLoading(false)
        });

};
export const getInvoiceExcel = (
    setIsLoading: Function,
    body: any
) => {
    setIsLoading(true)
    AGetInvoiveExcel(body)
        .then((json: any) => {
            fileDownload(json.data, 'invoice.xlsx');
            setIsLoading(false)
        })
        .catch((err) => {
            Notify.error(`خطایی رخ داده :${err.statusText}`)
            setIsLoading(false)
        });

};
export const getInvoiceFastExcel = (
    setIsLoading: Function,
    body: any
) => {
    setIsLoading(true)
    AGetInvoiveFastExcel(body)
        .then((json: any) => {

            fileDownload(json.data, 'invoice.xlsx');
            setIsLoading(false)
        })
        .catch((err) => {
            Notify.error(`خطایی رخ داده :${err.statusText}`)
            setIsLoading(false)
        });

};