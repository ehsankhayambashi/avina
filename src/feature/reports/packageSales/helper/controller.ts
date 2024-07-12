import Notify from "@/utils/Notify";
import fileDownload from "js-file-download";
import { AgetPackageSales, AgetPackageSalesExcel } from "./api";


export const getPackageSales = (
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
    AgetPackageSales(page, perPage, startDate, endDate, debouncedcSearch).then((res: any) => {
        setDiasableBtn(false)
        setLoading(false)
        setTableData(res.data.data.data)
        setTotalPage(res.data.data.last_page)
    }).catch((err: any) => {
        Notify.error(err.data.error.message);
        setDiasableBtn(false)
        setLoading(false)
    })
}

export const getPackageSalesExcel = (startDate: string, endDate: string, setExcelDisableBtn: Function) => {
    setExcelDisableBtn(true)
    AgetPackageSalesExcel(startDate, endDate).then((res: any) => {
        fileDownload(res.data, 'packageSales.xlsx');
        setExcelDisableBtn(false)
    }).catch((err: any) => {
        console.log(err);
        setExcelDisableBtn(false)
        Notify.error(err.data.error.message);

    })
}