import { TResponse } from "@/utils/FetchApi";
import Notify from "@/utils/Notify";
import { AGetNewUserMachine } from "./api";

export const getNewUserMachine = (setNewUserMachineData: Function, page: number, pageCount: number, setLastPage: Function, setIsLoading: Function, searchData: any) => {
    setIsLoading(true)
    AGetNewUserMachine(page, pageCount, searchData)
        .then((response: TResponse<any>) => {
            setIsLoading(false)
            setLastPage(response.data.response.last_page)
            setNewUserMachineData(response.data.response.data);
        })
        .catch((err) => {
            setIsLoading(false)
            Notify.error(err.data.error.message)
            // console.log(err);
        });
};