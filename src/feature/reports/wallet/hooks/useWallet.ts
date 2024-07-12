import { useEffect, useState } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { DateObject } from "react-multi-date-picker";
import { getWalletReport } from "../helper/controller";
import { IInfoData, ISearchFilter, IwalletData, User } from "../interfaces";
const UserType = {
    'ACTUAL': 'App\\Domains\\User\\Models\\V1\\ActualUsersProfile',
    'LEGAL': 'App\\Domains\\User\\Models\\V1\\LegalUsersProfile'
}
export const useWallet = () => {
    const today = new DateObject().format("YYYY-MM-DD")
    const todayFa = new DateObject({ calendar: persian, locale: persian_fa }).format("YYYY/MM/DD")
    const [disableBtn, setDiasableBtn] = useState<boolean>(false);
    const [excelDisableBtn, setExcelDisableBtn] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [page, setPage] = useState<number>(1)
    const [perPage, setPerPage] = useState<number>(10)
    const [totalPage, setTotalPage] = useState<number>(1)
    const [tableData, setTableData] = useState<IwalletData[]>([])
    const [totalAmount, setsetTotalAmount] = useState<any>()
    const [searchData, setSearchData] = useState<ISearchFilter>({
        end_date: today,
        start_date: today,
    })
    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");
    const [infoData, setInfoData] = useState<IInfoData>({
        "count-total": 0,
        "charge-total": 0
    })

    const searchBtnHandler = (selectedPage: number, selectedPerPage: number) => {
        setTableData([])
        getWalletReport(selectedPage, selectedPerPage, startDate, endDate, setDiasableBtn, setTableData, setLoading, setTotalPage, setsetTotalAmount)
    }


    useEffect(() => {
        setTableData([])
        getWalletReport(page, perPage, startDate, endDate, setDiasableBtn, setTableData, setLoading, setTotalPage, setsetTotalAmount)

    }, [page, perPage])
    const profileTypeHandler = (user: User) => {
        let result = 'نامشخص';

        switch (user.user_profile_type) {
            case UserType.ACTUAL:
                result = 'حقیقی';
                break;
            case UserType.LEGAL:
                result = 'حقوقی';
                break;
        }
        return result;
    };
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
        excelDisableBtn,
        setExcelDisableBtn,
        todayFa,
        profileTypeHandler,
        UserType,
        totalAmount,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
    }
}