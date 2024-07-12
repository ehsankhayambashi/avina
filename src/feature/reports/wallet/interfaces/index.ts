

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






export interface IwalletData {
    id: number
    type: string
    operation_type: string
    title: string
    serial: string
    status: string
    expiration_time: string
    discount_id: number
    discount_price: string
    fee: string
    net_amount: string
    total_amount: string
    user_id: number
    is_voided: number
    description: any
    is_receipt: number
    created_by?: number
    updated_by: any
    created_at: string
    updated_at: string
    deleted_at: any
    deleted_by: any
    info_type: any
    info_id: any
    old_invoice_id: any
    old_serial: any
    persian_operation_type: string
    persian_status: string
    persian_type: string
    payment_info: PaymentInfo
    discount_info: any[]
    user: User
    invoice_items: InvoiceItem[]
}

export interface PaymentInfo {
    type: string
    date: string
    gateway: string
    tracking_number: any
    amount: string
    meta: Meta
}

export interface Meta {
    CID?: string
    MID?: string
    RRN?: string
    State?: string
    Amount?: string
    RefNum?: string
    ResNum?: string
    amount: any
    TRACENO: any
    website: string
    SecurePan: string
    StateCode: string
    invoice_id: any
    payment_id: string
    source?: string
    source_url?: string
}

export interface User {
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
    referrer_code?: string
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
    tel?: string
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

export interface InvoiceItem {
    id: number
    transfer_id: any
    transaction_id?: number
    model: any
    model_id: any
    invoice_id: number
    created_by?: number
    updated_by: any
    created_at: string
    updated_at: string
    payment: Payment
}

export interface Payment {
    id: number
    payment_id: string
    transaction_id?: string
    model_type: string
    model_id: number
    accomplished: number
    verified: number
    after_verified: number
    reversed: number
    submitted: number
    approved: number
    rejected: number
    payment_method: string
    bank_order_id: any
    gate_name: string
    gate_refid?: string
    gate_status: string
    description: string
    details?: string
    amount: number
    extra_params: any
    additional_data: string
    sharing: any
    paid_at: string
    created_at: string
    updated_at: string
    deleted_at: any
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