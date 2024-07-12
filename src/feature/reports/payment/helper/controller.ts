import { TResponse } from "@/utils/FetchApi";
import Notify from "@/utils/Notify";
import { AGetDailyPayment } from "./api";

export const getPayments = (setPaymentData: Function, page: number, pageCount: number, setLastPage: Function, setIsLoading: Function, searchData: any, setTotalSale: Function) => {
    setIsLoading(true)
    AGetDailyPayment(page, pageCount, searchData)
        .then((response: TResponse<any>) => {
            setIsLoading(false)
            setTotalSale(response.data.data.data.total)
            setLastPage(response.data.data.data.res.last_page)
            setPaymentData(response.data.data.data.res.data);
        })
        .catch((err) => {
            setIsLoading(false)
            Notify.error(err.data.error.message)
            // console.log(err);
        });
};