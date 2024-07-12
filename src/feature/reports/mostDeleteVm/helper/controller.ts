import Notify from "@/utils/Notify";
import fileDownload from "js-file-download";
import { AgetHighestAmount, AgetHighestAmountExcel } from "./api";


export const getHighestAmount = (
    page: number,
    perPage: number,
    startDate: string,
    endDate: string,
    debouncedcSearch: string,
    setDiasableBtn: Function,
    setInfoData: Function,
    setTableData: Function,
    setLoading: Function,
    setTotalPage: Function
) => {
    setDiasableBtn(true)
    setLoading(true)
    AgetHighestAmount(page, perPage, startDate, endDate, debouncedcSearch).then((res: any) => {
        setDiasableBtn(false)
        setLoading(false)
        setTableData(res.data.data.data.data)
        setTotalPage(res.data.data.data.last_page)
    }).catch((err: any) => {
        Notify.error(err.data.error.message);
        setDiasableBtn(false)
        setLoading(false)
    })
}

export const getHighestAmountExcel = (startDate: string, endDate: string, setExcelDisableBtn: Function) => {
    setExcelDisableBtn(true)
    AgetHighestAmountExcel(startDate, endDate).then((res: any) => {
        fileDownload(res.data, 'mostDeleteVm.xlsx');
        setExcelDisableBtn(false)
    }).catch((err: any) => {
        console.log(err);
        setExcelDisableBtn(false)
        Notify.error(err.data.error.message);

    })
}