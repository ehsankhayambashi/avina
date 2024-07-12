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






export interface IhighestAmount {
    current_page: number
    data: IhighestAmountData[]
    first_page_url: string
    from: number
    last_page: number
    last_page_url: string
    links: Link[]
    next_page_url: string
    path: string
    per_page: number
    prev_page_url: string
    to: number
    total: number
}

export interface IhighestAmountData {
    id: number
    email: string
    email_verified_at: string
    nextcloud_password: any
    created_at: string
    updated_at: string
    username: string
    user_profile_type: string
    user_profile_id: number
    user_profile: UserProfile
    status: string
    user_type: any
    is_admin: number
    is_term_accept: number
    is_verified: number
    is_blocked: number
    source: string
    old_user_id: any
    auto_withdrawal_status: number
    referrer_code: string
    total_invoice_amount: number
}

export interface UserProfile {
    id: number
    first_name: string
    last_name: string
    father_name: string
    gender: any
    is_iranian: number
    nationality: any
    province: string
    city: string
    country: string
    national_code: string
    certificate_number: string
    birth_date: string
    identification_type: number
    identification_number: string
    economic_code: string
    address: string
    mobile_number: string
    postal_code: string
    tel: string
    created_at: string
    updated_at: string
    old_user_id: any
}

export interface Link {
    url?: string
    label: string
    active: boolean
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