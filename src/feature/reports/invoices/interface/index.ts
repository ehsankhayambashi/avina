import { RefObject } from "react";
import { UseFormGetValues, UseFormSetValue } from "react-hook-form";

export interface IInvoiceFilters {
    name: string;
    //شناسه پرداخت
    traceNumber: string;
    userId: string;
    //شماره فاکتور
    serial: string;
    excel: any;
    page: any;
    start_date: string;
    end_date: string;
}

export interface Invoice {
    id: number;
    type: string;
    operation_type: string;
    title: string;
    serial: string;
    status: string;
    expiration_time: string; // consider using Date type if possible
    discount_id: number;
    discount_price: string;
    fee: string;
    net_amount: string;
    total_amount: string;
    user_id: number;
    is_voided: number;
    description: string | null;
    is_receipt: number;
    created_by: number;
    updated_by: number | null;
    created_at: string; // consider using Date type if possible
    updated_at: string; // consider using Date type if possible
    deleted_at: string | null;
    deleted_by: number | null;
    info_type: string | null;
    info_id: number | null;
    old_invoice_id: number | null;
    old_serial: string | null;
    created_user: User
    persian_operation_type: string;
    persian_status: string;
    persian_type: string;
    payment_info: PaymentInfo;
    discount_info: any[]; // Adjust this type based on actual data structure
    user: User;
    invoice_items: InvoiceItem[];
}
export interface IPrintInvoice {
    invoices: any[];
    invoiceRef: RefObject<HTMLDivElement>;
}
export interface IPrintInvoiceSingle {
    invoice: any;
    invoiceRef: RefObject<HTMLDivElement>;
}
export interface IPrintModal {
    isOpen: boolean;
    componentToShow?: any;
    onOpenChange: (isOpen: boolean) => void;
    invoiceRef: RefObject<HTMLDivElement>;
}
interface InvoiceItem {
    id: number;
    transfer_id: number | null;
    transaction_id: number;
    model: string | null;
    model_id: number | null;
    invoice_id: number;
    created_by: number;
    updated_by: number | null;
    created_at: string; // consider using Date type if possible
    updated_at: string; // consider using Date type if possible
    payment: {
        id: number;
        payment_id: string;
        // Add more properties as needed
    };
    // Add more properties as needed
}


export interface UserProfile {
    id: number;
    first_name: string;
    last_name: string;
    father_name: string;
    gender: string | null;
    is_iranian: number;
    nationality: string | null;
    province: string;
    city: string;
    country: string;
    national_code: string;
    certificate_number: string;
    birth_date: string; // consider using Date type if possible
    identification_type: number;
    identification_number: string;
    economic_code: string;
    address: string;
    mobile_number: string;
    postal_code: string;
    tel: string;
    created_at: string; // consider using Date type if possible
    updated_at: string; // consider using Date type if possible
    old_user_id: number | null;
}

interface User {
    id: number;
    email: string;
    email_verified_at: string | null; // consider using Date type if possible
    nextcloud_password: string | null;
    created_at: string; // consider using Date type if possible
    updated_at: string; // consider using Date type if possible
    username: string;
    user_profile_type: string;
    user_profile_id: number;
    user_profile: UserProfile;
    status: string;
    user_type: string | null;
    is_admin: number;
    is_term_accept: number;
    is_verified: number;
    is_blocked: number;
    source: string;
    old_user_id: number | null;
    auto_withdrawal_status: number;
    referrer_code: string;
}


interface PaymentInfo {
    type: string;
    date: string; // consider using Date type if possible
    gateway: string;
    tracking_number: string;
    amount: string;
    meta: {
        CID: string;
        MID: string;
        RRN: string;
        State: string;
        Amount: string;
        RefNum: string;
        ResNum: string;
        amount: string;
        source: string;
        TRACENO: string;
        website: string;
        SecurePan: string;
        StateCode: string;
        invoice_id: string;
        payment_id: string;
        source_url: string;
    };
}


export interface IsearchModal {
    isOpen: boolean;
    componentToShow?: any;
    onOpenChange: (isOpen: boolean) => void;
    getValues: UseFormGetValues<IInvoiceFilters>;
    setValue: UseFormSetValue<IInvoiceFilters>;
    onClick: Function;
}