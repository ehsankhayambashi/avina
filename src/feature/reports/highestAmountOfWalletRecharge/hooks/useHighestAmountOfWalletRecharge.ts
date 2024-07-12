import { useEffect, useState } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { DateObject } from "react-multi-date-picker";
import { getHighestAmount, getHighestAmountExcel } from "../helper/controller";
import { IInfoData, ISearchFilter, IhighestAmountData } from "../interfaces";

export const useHighestAmountOfWalletRecharge = () => {
    const today = new DateObject().format("YYYY-MM-DD")
    const todayFa = new DateObject({ calendar: persian, locale: persian_fa }).format("YYYY/MM/DD")
    const [disableBtn, setDiasableBtn] = useState<boolean>(false);
    const [excelDisableBtn, setExcelDisableBtn] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [page, setPage] = useState<number>(1)
    const [perPage, setPerPage] = useState<number>(10)
    const [totalPage, setTotalPage] = useState<number>(1)
    const [tableData, setTableData] = useState<IhighestAmountData[]>([])
    const [searchData, setSearchData] = useState<ISearchFilter>({
        end_date: today,
        start_date: today,
    })
    const [search, setSearch] = useState<string>("");

    const [startDate, setStartDate] = useState<string>(today);
    const [endDate, setEndDate] = useState<string>(today);

    const [infoData, setInfoData] = useState<IInfoData>({
        "count-total": 0,
        "charge-total": 0
    })

    const searchBtnHandler = (selectedPage: number, selectedPerPage: number) => {
        setTableData([])
        if (!search) {

            getHighestAmount(selectedPage, selectedPerPage, startDate, endDate, search, setDiasableBtn, setInfoData, setTableData, setLoading, setTotalPage)
        }
    }

    const getExcelReport = () => {
        getHighestAmountExcel(startDate, endDate, setExcelDisableBtn)
    }
    useEffect(() => {
        if (startDate) {

            setTableData([])
            getHighestAmount(page, perPage, startDate, endDate, search, setDiasableBtn, setInfoData, setTableData, setLoading, setTotalPage)
        }

    }, [])

    const searchHandler = (selectedPage: number) => {

        if (startDate) {
            setTableData([])
            getHighestAmount(selectedPage, perPage, startDate, endDate, search, setDiasableBtn, setInfoData, setTableData, setLoading, setTotalPage)

        }
    }
    useEffect(() => {
        if (!search && startDate) {
            setTableData([])
            getHighestAmount(page, perPage, startDate, endDate, search, setDiasableBtn, setInfoData, setTableData, setLoading, setTotalPage)
        }
    }, [search]);
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
        todayFa,
        endDate,
        setEndDate,
        startDate,
        setStartDate,
        search,
        setSearch,
        searchHandler
    }
}