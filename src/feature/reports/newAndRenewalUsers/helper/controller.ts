import Notify from "@/utils/Notify";
import { AGetNewAdnRenewalUserExcel, AGetNewAndRenewalUsers } from "./api";

export const getnewAndRenewalUser = (
    page: number,
    perPage: number,
    data: any,
    setDiasableBtn: Function,
    setInfoData: Function,
    setTableData: Function,
    setLoading: Function,
    setTotalPage: Function,
    setOpenSearchModal: Function
) => {
    setDiasableBtn(true)
    setLoading(true)
    setOpenSearchModal(false)
    AGetNewAndRenewalUsers(page, perPage, data).then((res: any) => {
        setDiasableBtn(false)
        setLoading(false)
        setInfoData({
            "count-total": res.data.data.data['count-total'],
            "charge-total": res.data.data.data['charge-total']
        })
        setTableData(res.data.data.data.paginate_data.data)
        setTotalPage(res.data.data.data.paginate_data.last_page)
    }).catch((err: any) => {
        Notify.error(err.data.error.message);
        setDiasableBtn(false)
        setLoading(false)
    })
}

export const getNewAndRenewalUserExcel = (data: any, setExcelDisableBtn: Function) => {
    setExcelDisableBtn(true)
    AGetNewAdnRenewalUserExcel(data).then((res: any) => {
        const blob = new Blob([res.data], { type: `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet` });
        const downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = `New and renewal users.xlsx`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        setExcelDisableBtn(false)
        console.log(res);
    }).catch((err: any) => {
        console.log(err);
        setExcelDisableBtn(false)
        Notify.error(err.data.error.message);

    })
}