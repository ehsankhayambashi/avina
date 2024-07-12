import { useEffect, useState } from "react"
import { DateObject } from "react-multi-date-picker"
import { getNewUserMachine } from "../helper/controller"

export const useNewUsersMachines = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState<number>(1)
    const [pageCount, setPageCount] = useState<number>(10)
    const [lastPage, setLastPage] = useState<number>(1)
    const [newUserMachineData, setNewUserMachineData] = useState<any>()
    const [searchData, setSearchData] = useState<any>({
        end_date: new DateObject().format("YYYY-MM-DD"), start_date: new DateObject().format("YYYY-MM-DD"), status: "all", has_demo: "all"
    })

    useEffect(() => {
        getNewUserMachine(setNewUserMachineData, 1, pageCount, setLastPage, setIsLoading, searchData)
    }, [])

    const searchDataHandler = (selectedPage: number, selectedPageCount: number) => {
        let temp = { ...searchData };

        if (searchData?.has_demo === "all") {
            delete searchData.has_demo
        }
        setSearchData(temp)
        setNewUserMachineData([]);
        getNewUserMachine(setNewUserMachineData, selectedPage, selectedPageCount, setLastPage, setIsLoading, searchData)
    }
    const Searching = (searchData: any, setSearchData: Function) => {
        // let temp = searchData
        // Object.keys(searchData).forEach(function (key, index) {
        //     if (searchData[key] === '') {
        //         delete searchData[key]
        //     }
        // });
        let temp = { ...searchData };

        if (searchData?.has_demo === "all") {
            delete searchData.has_demo
        }
        setSearchData(temp)
        setNewUserMachineData([]);
        setPage(1)
        getNewUserMachine(setNewUserMachineData, 1, pageCount, setLastPage, setIsLoading, searchData)
        // setSearchData(temp)

    }
    useEffect(() => {
        // setNewUserMachineData([])
        let temp = { ...searchData };
        if (searchData?.has_demo === "all") {
            delete searchData.has_demo
        }
        if (searchData.start_date) {

            getNewUserMachine(setNewUserMachineData, 1, 10, setLastPage, setIsLoading, searchData)
        }
        setSearchData(temp)

    }, [])
    useEffect(() => { console.log("searchData", searchData); }, [searchData])
    return {
        Searching, newUserMachineData, setNewUserMachineData, page, setPage, pageCount, setPageCount, lastPage, isLoading, setIsLoading, searchDataHandler, searchData, setSearchData
    }
}