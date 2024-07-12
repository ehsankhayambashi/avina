import { useState } from "react";
import { getNewAndRenewalUserExcel, getnewAndRenewalUser } from "../helper/controller";
import { IInfoData, ISearchFilter, ITableData } from "../interfaces";

export const useNewAndRenewalUser = () => {
    const [openSearchModal, setOpenSearchModal] = useState<boolean>(false)
    const [disableBtn, setDiasableBtn] = useState<boolean>(false);
    const [excelDisableBtn, setExcelDisableBtn] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [page, setPage] = useState<number>(1)
    const [perPage, setPerPage] = useState<number>(10)
    const [totalPage, setTotalPage] = useState<number>(1)
    const [tableData, setTableData] = useState<ITableData[]>([])
    const [searchData, setSearchData] = useState<ISearchFilter>({
        end_date: "",
        start_date: "",
        type: "",
    })
    const [infoData, setInfoData] = useState<IInfoData>({
        "count-total": 0,
        "charge-total": 0
    })

    const searchBtnHandler = (selectedPage: number, selectedPerPage: number) => {
        setTableData([])
        getnewAndRenewalUser(selectedPage, selectedPerPage, searchData, setDiasableBtn, setInfoData, setTableData, setLoading, setTotalPage, setOpenSearchModal)
    }

    const getExcelReport = () => {
        getNewAndRenewalUserExcel(searchData, setExcelDisableBtn)
    }
    console.log(searchData)
    return {
        tableData,
        setTableData,
        searchData,
        setSearchData,
        page,
        setPage,
        perPage,
        setPerPage,
        infoData,
        setInfoData,
        searchBtnHandler,
        disableBtn,
        setDiasableBtn,
        loading,
        setLoading,
        totalPage,
        setTotalPage,
        getExcelReport,
        excelDisableBtn,
        setExcelDisableBtn,
        openSearchModal,
        setOpenSearchModal
    }
}