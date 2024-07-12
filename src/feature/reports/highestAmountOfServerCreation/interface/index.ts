export interface IHighestServerCreation {
    packages:
    [{
        instance_name: string
        package_count: number
    }]

    user: {
        auto_withdrawal_status: number
        created_at: string
        email: string
        email_verified_at: string
        id: number
        is_admin: number
        is_blocked: number
        is_term_accept: number
        is_verified: number
        nextcloud_password: null
        old_user_id: null
        referrer_code: string
        source: string
        status: string
        updated_at: string
        user_profile_id: number
        user_profile_type: string
        user_type: null
        username: string
        user_profile: {
            address: string
            birth_date: string
            certificate_number: string
            city: string
            country: string
            created_at: string
            economic_code: string
            father_name: string
            first_name: string
            gender: string
            id: number
            identification_number: string
            identification_type: null
            is_iranian: number
            last_name: string
            mobile_number: string
            national_code: string
            nationality: null
            old_user_id: null
            postal_code: string
            province: string
            tel: string
            updated_at: string
            agent_birth_date: string
            agent_certificate_number: string
            agent_city: string
            agent_country: string
            agent_father_name: string
            agent_first_name: string
            agent_identification_number: null
            agent_identification_type: null
            agent_is_iranian: number
            agent_last_name: string
            agent_mobile_number: string
            agent_national_code: string
            agent_position: null
            agent_province: string
            agent_sex: null
            company_economic_code: string
            company_name: string
            company_registration_date: string
            company_registration_number: string
            company_type: string

        }
    }
    vcenter_count: number
}

export interface ISearchData {
    start_date: string;
    end_date: string
}
export interface IAdvancedSearchModal {

    isOpen: boolean;
    setOpen: Function,
    searchData: ISearchData
    setSearchData: Function
    setPage: Function,
    page: Number,
    perPage: Number,
    searchBtnHandler: Function
    disableSearchBtn: boolean
}