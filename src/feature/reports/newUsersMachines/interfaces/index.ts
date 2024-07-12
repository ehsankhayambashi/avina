

export interface IsearchModal {
    isOpen: boolean;
    componentToShow?: any;
    onOpenChange: (isOpen: boolean) => void;
    searchData: any;
    setSearchData: Function;
    onClick: Function;
    isLoading: boolean;
}