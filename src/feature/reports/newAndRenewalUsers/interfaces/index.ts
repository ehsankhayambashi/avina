export interface ISearchFilter {
    end_date: string,
    start_date: string,
    type: string,
}

export interface ITableData {
    charge: number
    count: number
    date: string
}

export interface IInfoData {
    "count-total": number,
    "charge-total": number
}

export interface IAdvancedSearchModal {

    isOpen: boolean;
    setOpen: Function,
    searchData: ISearchFilter
    setSearchData: Function
    page: Number,
    perPage: Number,
    searchBtnHandler: Function
    disableBtn: boolean
}