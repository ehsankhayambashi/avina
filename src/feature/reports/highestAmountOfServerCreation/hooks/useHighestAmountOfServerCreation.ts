import { useEffect, useState } from "react"
import { DateObject } from "react-multi-date-picker"
import { getHighestServerCreation, getHighestServerCreationExcel } from "../helper/controller"
import { IHighestServerCreation } from "../interface"

export const useHighestAmountOfServerCreation = () => {
    const [searchData, setSearchData] = useState({
        start_date: new DateObject().format("YYYY-MM-DD"),
        end_date: new DateObject().format("YYYY-MM-DD")
    })

    const [page, setPage] = useState<number>(1)
    const [perPage, setPerPage] = useState<number>(10)
    const [tableData, setTableData] = useState<IHighestServerCreation[]>([])
    const [totalPage, setTotalPage] = useState<number>(1)
    const [disableSearchBtn, setDisableSearchBtn] = useState<boolean>(false)
    const [disableExcelBtn, setDisableExcelBtn] = useState<boolean>(false)
    const [openSearchModal, setOpenSearchModal] = useState<boolean>(false)
    const [searchInput, setSearchInput] = useState<string>('')

    const getHighServerCreationHandler = (selectedPage: number, selectedPerPage: number) => {
        setTableData([])
        getHighestServerCreation(selectedPage, selectedPerPage, searchData, setTableData, setDisableSearchBtn, setTotalPage, setPage, setOpenSearchModal, searchInput)
    }


    const EnterKeyHandler = (event: any) => {
        if (event.key === 'Enter') {
            getHighServerCreationHandler(1, perPage)
        }
    };

    const getExcelDataHandler = () => {
        getHighestServerCreationExcel(searchData, setDisableExcelBtn)
    }

    useEffect(() => {
        getHighServerCreationHandler(page, perPage)
    }, [])

    return {
        searchData,
        setSearchData,
        page,
        setPage,
        perPage,
        setPerPage,
        tableData,
        setTableData,
        totalPage,
        setTotalPage,
        disableSearchBtn,
        setDisableSearchBtn,
        getHighServerCreationHandler,
        disableExcelBtn,
        setDisableExcelBtn,
        getExcelDataHandler,
        openSearchModal,
        setOpenSearchModal,
        searchInput,
        setSearchInput,
        EnterKeyHandler
    }
}