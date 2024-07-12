import useDebounce from "@/hooks/useDebounce";
import Notify from "@/utils/Notify";
import { useEffect, useState } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { DateObject } from "react-multi-date-picker";
import { getHighestAmount, getHighestAmountExcel } from "../helper/controller";
import { IInfoData, ISearchFilter, ImostDeleteVm } from "../interfaces";

export const useMostDeleteVm = () => {
    const today = new DateObject().format("YYYY-MM-DD")
    const todayFa = new DateObject({ calendar: persian, locale: persian_fa }).format("YYYY/MM/DD")
    const [disableBtn, setDiasableBtn] = useState<boolean>(false);
    const [excelDisableBtn, setExcelDisableBtn] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [page, setPage] = useState<number>(1)
    const [perPage, setPerPage] = useState<number>(10)
    const [totalPage, setTotalPage] = useState<number>(1)
    const [tableData, setTableData] = useState<ImostDeleteVm[]>([])
    const [searchData, setSearchData] = useState<ISearchFilter>({
        end_date: "",
        start_date: "",
    })
    const [search, setSearch] = useState<string>("");
    const debouncedcSearch = useDebounce<string>(search, 1000);

    const [startDate, setStartDate] = useState<string>(today);
    const [endDate, setEndDate] = useState<string>(today);

    const [infoData, setInfoData] = useState<IInfoData>({
        "count-total": 0,
        "charge-total": 0
    })
    const searchBtnHandler = (selectedPage: number, selectedPerPage: number) => {
        setTableData([])
        getHighestAmount(selectedPage, selectedPerPage, startDate, endDate, debouncedcSearch, setDiasableBtn, setInfoData, setTableData, setLoading, setTotalPage)
    }

    const getExcelReport = () => {
        if (startDate) {

            getHighestAmountExcel(startDate, endDate, setExcelDisableBtn)
        } else {
            Notify.warn("با جستجوی پیشرفته ابتدا تاریخ را انتخاب کنید");

        }
    }
    useEffect(() => {
        setTableData([])
        if (startDate) {

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
        startDate,
        setStartDate,
        endDate,
        setEndDate,
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
        search,
        setSearch,
        searchHandler,
    }
}