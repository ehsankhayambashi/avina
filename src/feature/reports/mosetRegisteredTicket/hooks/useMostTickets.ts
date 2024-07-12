import useDebounce from "@/hooks/useDebounce";
import { Selection } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { getTicketList } from "../helper/controller";
import { ITicketList } from "../interface";

export const useMostTickets = () => {
    const getCurrentDate = () => {
        return new Date().toISOString().slice(0, 10)
    }
    const getYesterdayDate = () => {
        // Get today's date
        var today = new Date();

        // Subtract 1 from the current date to get yesterday's date
        var yesterday = new Date();
        yesterday.setDate(today.getDate() - 1);

        // Format yesterday's date as YYYY-MM-DD
        var formattedDate = yesterday.getFullYear() + '-' +
            ('0' + (yesterday.getMonth() + 1)).slice(-2) + '-' +
            ('0' + yesterday.getDate()).slice(-2);
        return formattedDate
    }
    getYesterdayDate()
    const [tableData, setTableData] = useState<any[]>([]);
    const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]))
    const invoiceRef = useRef<HTMLDivElement>(null);
    const invoiceRefMultiple = useRef<HTMLDivElement>(null);
    const arrselectedKeys = Array.from(selectedKeys);


    const [pageSize, setPageSize] = useState<number>(10);
    const [page, setPage] = useState<number>(1);
    const [totalItems, setTotalItems] = useState<number>(0);
    const [isLoading, setIsLoading] = useState(false)
    const [printPage, setPrintPage] = useState({
        show: false,
        data: [],
    });
    const [search, setSearch] = useState<string>("");
    const debouncedcSearch = useDebounce<string>(search, 1000);


    const printHandler = (invoice: any, isOpen: boolean) => {
        setPrintPage({
            show: isOpen,
            data: invoice,
        });
    };

    const getTicketListHandler = (query: any) => {
        getTicketList(query, setTableData, setTotalItems, setIsLoading)
    }
    useEffect(() => {
        let query = `${debouncedcSearch ? "user_id=" + debouncedcSearch + "&" : ""}${getValues("start_date") ? "start_date=" + getValues("start_date") : ""} ${getValues("end_date") ? "&end_date=" + getValues("end_date") + "&" : ""}paginate=true&page=${page}&per_page=${pageSize}`
        if (getValues("start_date") !== "") {
            setIsLoading(true)
            getTicketListHandler(query)

        }
    }, [])
    const searchPage = (page: number) => {
        setTableData([])
        // setPage(1)
        let query = `${debouncedcSearch ? "user_id=" + debouncedcSearch + "&" : ""}${getValues("start_date") ? "start_date=" + getValues("start_date") : ""} ${getValues("end_date") ? "&end_date=" + getValues("end_date") + "&" : ""}paginate=true&page=${page}&per_page=${pageSize}`
        if (getValues("start_date") !== "") {
            setIsLoading(true)
            getTicketListHandler(query)

        }
    }
    const searchHandler = () => {
        setTableData([])
        let query = `${search ? "user_id=" + search + "&" : ""}${getValues("start_date") ? "start_date=" + getValues("start_date") : ""} ${getValues("end_date") ? "&end_date=" + getValues("end_date") + "&" : ""}paginate=true&page=1&per_page=${pageSize}`
        if (getValues("start_date") !== "") {
            setIsLoading(true)
            getTicketListHandler(query)

        }
    }
    useEffect(() => {
        if (!search && getValues("start_date")) {
            let query = `${search ? "user_id=" + search + "&" : ""}${getValues("start_date") ? "start_date=" + getValues("start_date") : ""} ${getValues("end_date") ? "&end_date=" + getValues("end_date") + "&" : ""}paginate=true&page=${page}&per_page=${pageSize}`

            setIsLoading(true)
            getTicketListHandler(query)
        }
    }, [search]);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        control,
        setValue,
        getValues,
    } = useForm<ITicketList>({
        mode: "onSubmit",
        values: {
            end_date: getCurrentDate(), start_date: getYesterdayDate(),
        }
    });


    return {
        setValue,
        getValues,
        setTableData,
        tableData,
        setTotalItems,
        totalItems,
        page,
        setPage,
        pageSize,
        setPageSize,
        isLoading,
        setIsLoading,
        printPage,
        setPrintPage,
        printHandler,
        selectedKeys,
        setSelectedKeys,
        arrselectedKeys,
        invoiceRefMultiple,
        invoiceRef,
        search,
        setSearch,
        searchHandler,
        searchPage,
    }
}