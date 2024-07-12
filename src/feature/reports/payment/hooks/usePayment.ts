import { useEffect, useState } from "react"
import { DateObject } from "react-multi-date-picker"
import { getPayments } from "../helper/controller"

export const usePayment = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState<number>(1)
    const [pageCount, setPageCount] = useState<number>(10)
    const [lastPage, setLastPage] = useState<number>(1)
    const [paymentData, setPaymentData] = useState<any>()
    const [totalSale, setTotalSale] = useState(0)
    const [searchModal, setSearchModal] = useState(false)
    const [searchData, setSearchData] = useState<any>({
        end_date: new DateObject().format("YYYY-MM-DD"), start_date: new DateObject().format("YYYY-MM-DD")
    })
    useEffect(() => {
        getPayments(setPaymentData, page, pageCount, setLastPage, setIsLoading, searchData, setTotalSale)
    }, [])

    const searchDataHandler = (selectedPage: number, selectedPageCount: number) => {
        setPaymentData([])
        getPayments(setPaymentData, selectedPage, selectedPageCount, setLastPage, setIsLoading, searchData, setTotalSale)
    }
    const Searching = (searchData: any, setSearchData: Function) => {
        setPaymentData([])
        let temp = searchData
        console.log(searchData)
        Object.keys(searchData).forEach(function (key, index) {
            if (searchData[key] === '') {
                delete temp[key]
                delete searchData[key]
            }
        });
        console.log(temp)
        setPage(1)
        setSearchData(temp)
        getPayments(setPaymentData, 1, pageCount, setLastPage, setIsLoading, temp, setTotalSale)
    }

    // useEffect(() => {
    //     setSearchData({
    //         end_date: new DateObject().format("YYYY-MM-DD"), start_date: new DateObject().format("YYYY-MM-DD")
    //     })
    // }, [searchModal])
    return {
        Searching,
        searchModal, setSearchModal,
        paymentData, setPaymentData, page, setPage,
        pageCount, setPageCount, lastPage,
        isLoading, setIsLoading, searchDataHandler,
        searchData, setSearchData, totalSale
    }
}