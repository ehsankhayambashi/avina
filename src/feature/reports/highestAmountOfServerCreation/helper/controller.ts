import Notify from "@/utils/Notify";
import { AHighestServerCreation, AHighestServerCreationExcel } from "./api";

export const getHighestServerCreation = (
    page: number,
    perPage: number,
    data: any,
    setTableData: Function,
    setDisableSearchBtn: Function,
    setTotalPage: Function,
    setPage: Function,
    setOpenSearchModal: Function,
    searchInput: String
) => {

    setDisableSearchBtn(true);
    AHighestServerCreation(page, perPage, data, searchInput)
        .then((res: any) => {
            setTotalPage(res.data.data.pagination.last_page)
            setTableData(res.data.data.data);
            setDisableSearchBtn(false);
            setOpenSearchModal(false)
        })
        .catch((err: any) => {
            console.log(err);
            setDisableSearchBtn(false);
        });
};

export const getHighestServerCreationExcel = (data: any, setExcelDisableBtn: Function) => {
    setExcelDisableBtn(true);
    AHighestServerCreationExcel(data)
        .then((res: any) => {
            const blob = new Blob([res.data], {
                type: `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`,
            });
            const downloadLink = document.createElement("a");
            downloadLink.href = URL.createObjectURL(blob);
            downloadLink.download = `HighestAmountOfServerCreation.xlsx`;
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
            setExcelDisableBtn(false);
            console.log(res);
        })
        .catch((err: any) => {
            console.log(err);
            setExcelDisableBtn(false);
            Notify.error(err.data.error.message);
        });
};
