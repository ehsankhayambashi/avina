import { Selection } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { getInvoiceListFilter } from "../helper/controller";
import { IInvoiceFilters, Invoice } from "../interface";

export const useInvoices = () => {
    const getCurrentDate = () => {
        return new Date().toISOString().slice(0, 10)
    }
    const [tableData, setTableData] = useState<Invoice[]>([]);
    const [fromAdvance, setFromAdvance] = useState(false);
    const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]))
    const invoiceRef = useRef<HTMLDivElement>(null);
    const invoiceRefMultiple = useRef<HTMLDivElement>(null);
    const arrselectedKeys = Array.from(selectedKeys);

    let filteredData = [];
    if (selectedKeys === "all") {
        filteredData = tableData;
    } else {
        filteredData = tableData.filter((item: Invoice) =>
            arrselectedKeys.includes(item?.id.toString())
        );
    }


    const [pageSize, setPageSize] = useState<number>(10);
    const [page, setPage] = useState<number>(1);
    const [totalItems, setTotalItems] = useState<number>(0);
    const [isLoading, setIsLoading] = useState(false)
    const [isLoadingExel, setIsLoadingExel] = useState(false)
    const [isLoadingPrint, setIsLoadingPrint] = useState(false)
    const [printPage, setPrintPage] = useState({
        show: false,
        data: [],
    });

    const printHandler = (invoice: any, isOpen: boolean) => {
        setPrintPage({
            show: isOpen,
            data: invoice,
        });
    };

    const getInvoiceListFilterHandler = (query: any, body: any) => {
        getInvoiceListFilter(query, body, setTableData, setTotalItems, setIsLoading, setFromAdvance)
    }
    useEffect(() => {
        setTableData([])


        setIsLoading(true)
        let query = `page=${page}`
        let body = {
            "start_date": getCurrentDate(),
            "end_date": getCurrentDate()
        }
        getInvoiceListFilterHandler(query, body)

    }, [])
    const searchPagination = (page: number) => {
        setTableData([])
        if (fromAdvance) {

            setIsLoading(true)
            let query = `name=${encodedName}&trace-no=${encodedTraceNumber}&serial=${encodedSerial}&user_id=${userId}&page=${page}`
            let body = {
                "start_date": getValues("start_date"),
                "end_date": getValues("end_date")
            }
            getInvoiceListFilterHandler(query, body)
        } else {

            setIsLoading(true)
            let query = `page=${page}`
            let body = {
                "start_date": getCurrentDate(),
                "end_date": getCurrentDate()
            }
            getInvoiceListFilterHandler(query, body)
        }
    }

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        control,
        setValue,
        getValues,
    } = useForm<IInvoiceFilters>({
        // resolver: zodResolver(isAddmode ? SCategoryAdd : SCategoryEdit),
        mode: "onSubmit",
        values: {
            name: "", end_date: "", excel: null, page: 1, serial: "", start_date: "", traceNumber: "", userId: ""
        }
    });

    const name = getValues("name");
    const traceNumber = getValues("traceNumber");
    const serial = getValues("serial");
    const userId = getValues("userId");
    const encodedName = encodeURIComponent(name);
    const encodedTraceNumber = encodeURIComponent(traceNumber);
    const encodedSerial = encodeURIComponent(serial);
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
        encodedName,
        encodedTraceNumber,
        encodedSerial,
        selectedKeys,
        setSelectedKeys,
        filteredData,
        arrselectedKeys,
        invoiceRefMultiple,
        invoiceRef,
        isLoadingPrint,
        setIsLoadingPrint,
        isLoadingExel,
        setIsLoadingExel,
        getCurrentDate,
        setFromAdvance,
        searchPagination,
        userId,
    }
}