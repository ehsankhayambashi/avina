import Notify from "@/utils/Notify";
import fileDownload from "js-file-download";
import { AGetTicketExcel, AGetTicketList } from "./api";


export const getTicketList = (
    //QUERY : name=&trace-no=&serial=
    query: string,
    setTableData: Function,
    setTotalItems: Function,
    setIsLoading: Function,
) => {
    setIsLoading(true)
    AGetTicketList(query)
        .then((json: any) => {
            console.log("omad jai ke bayad:", json)
            setIsLoading(false)
            setTableData(json.data.data.data.data)
            setTotalItems(json.data.data.data.last_page)
        })
        .catch((err) => {
            console.log(err)
            Notify.error("خطایی رخ داده")
            setIsLoading(false)
        });

};
export const getTicketExcel = (
    setIsLoading: Function,
    startDate: string,
    endDate: string
) => {
    setIsLoading(true)
    AGetTicketExcel(startDate, endDate)
        .then((json: any) => {
            fileDownload(json.data, 'mostTicket.xlsx');
            setIsLoading(false)
        })
        .catch((err: any) => {
            Notify.error(`خطایی رخ داده :${err.statusText}`)
            setIsLoading(false)
        });

};
