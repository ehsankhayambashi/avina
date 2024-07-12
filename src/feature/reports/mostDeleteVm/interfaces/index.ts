
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




export interface ImostDeleteVm {
    id: number
    email: string
    email_verified_at?: string
    nextcloud_password: any
    created_at: string
    updated_at: string
    username: string
    user_profile_type: string
    user_profile_id: number
    user_profile: UserProfile
    status: string
    user_type?: number
    is_admin: number
    is_term_accept: number
    is_verified: number
    is_blocked: number
    source: string
    old_user_id?: number
    auto_withdrawal_status: number
    referrer_code: string
    deleted_vcenter_count: number
}

export interface UserProfile {
    id: number
    first_name?: string
    last_name?: string
    father_name?: string
    gender?: string
    is_iranian: number
    nationality: any
    province?: string
    city?: string
    country?: string
    national_code?: string
    certificate_number?: string
    birth_date?: string
    identification_type?: number
    identification_number: string
    economic_code?: string
    address: string
    mobile_number: string
    postal_code: string
    tel: string
    created_at: string
    updated_at: string
    old_user_id?: number
    company_name?: string
    company_registration_date?: string
    company_economic_code?: string
    company_type?: string
    company_registration_number?: string
    agent_first_name?: string
    agent_last_name?: string
    agent_father_name?: string
    agent_is_iranian?: number
    agent_national_code?: string
    agent_certificate_number?: string
    agent_identification_type?: number
    agent_identification_number?: string
    agent_country?: string
    agent_province?: string
    agent_city?: string
    agent_birth_date?: string
    agent_mobile_number?: string
    agent_position?: string
    agent_sex?: string
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