import Notify from "@/utils/Notify";
import { AgetWalletReport } from "./api";


export const getWalletReport = (
    page: number,
    perPage: number,
    startDate: string,
    endDate: string,
    setDiasableBtn: Function,
    setTableData: Function,
    setLoading: Function,
    setTotalPage: Function,
    setTotalAmount: Function,
) => {
    setDiasableBtn(true)
    setLoading(true)
    AgetWalletReport(page, perPage, startDate, endDate).then((res: any) => {
        setDiasableBtn(false)
        setLoading(false)
        setTableData(res.data.data.data.res.data)
        setTotalAmount(res.data.data.data.total)
        setTotalPage(res.data.data.data.res.last_page)
    }).catch((err: any) => {
        Notify.error(err.data.error.message);
        setDiasableBtn(false)
        setLoading(false)
    })
}

