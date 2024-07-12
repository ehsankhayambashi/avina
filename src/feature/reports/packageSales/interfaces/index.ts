
export interface ISearchFilter {
    end_date: string,
    start_date: string,
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



export interface IPackageSales {
    date: string
    name: string
    count: number
}

export interface IsearchModal {
    isOpen: boolean;
    componentToShow?: any;
    onOpenChange: (isOpen: boolean) => void;
    startDate: string,
    setStartDate: Function,
    endDate: string,
    setEndDate: Function,
    onClick: Function;
}