import NumberSeparator from "@/utils/NumberSeprator";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { DateObject } from "react-multi-date-picker";
import { IPrintInvoice } from "../interface";

function MultiplePrintInvoice({ invoices, invoiceRef }: IPrintInvoice) {
  return (
    <div>
      <div
        ref={invoiceRef}
        className="p-4 print:landscap print:w-full text-xs font-IranYekanNumber"
        dir="rtl"
      >
        {invoices.map((invoice: any, index: number) => {
          return (
            <div key={index} style={{ pageBreakBefore: "always" }}>
              {/* logo and title */}
              <div className="flex justify-between mb-4 items-center">
                <div className="w-44">
                  <img className="w-full" src="/invoice.png" alt="logo" />
                </div>
                <div>
                  {invoice?.serial?.includes("cloud") ? (
                    <p>صورت حساب فروش کالا و خدمات</p>
                  ) : (
                    <p className="font-weight-bolder" style={{ fontSize: "22px !important" }}>
                      پیش فاکتور پس پرداخت
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <div className="flex">
                    <span>شماره سریال: {invoice.serial}</span>
                    <span></span>
                  </div>
                  <div className="flex">
                    <span> تاریخ فاکتور: </span>
                    {new DateObject(invoice.updated_at)
                      .convert(persian, persian_fa)
                      .format("YYYY/MM/DD")}
                  </div>
                </div>
              </div>
              {/* company info */}
              <table className="w-full">
                <thead>
                  <tr>
                    <th
                      scope="row"
                      colSpan={3}
                      className="text-center p-1 bg-asiatech-gray-400 border border-asiatech-gray-500"
                    >
                      مشخصات فروشنده
                    </th>
                  </tr>
                </thead>

                <thead className="py-0">
                  <tr>
                    <td className="py-1 px-7" scope="row">
                      نام شخص حقیقی/حقوقی : شرکت عصر داده های آسیاتک
                    </td>
                    <td scope="row" className="py-1 px-7">
                      شناسه ملی : 10103745870
                    </td>
                    <td scope="row" className="py-1 px-7">
                      شماره تلفن / نمابر: 02191015555
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-7 py-1">استان: تهران</td>
                    <td className="px-7 py-1">شهر: تهران</td>
                    <td className="px-7 py-1">
                      کدپستی 10 رقمی:{" "}
                      {invoice.updated_at > "2023/09/11 23:59:59" ? "1587843515" : "1587843117"}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3} className="px-7 py-1">
                      {invoice.updated_at > "2023/09/11 23:59:59"
                        ? "نشانی : خیابان مطهری، خیابان میرعماد، کوچه چهاردهم، پلاک 18، طبقه اول، واحد 1"
                        : "نشانی: خیابان مطهری، خیابان میرعماد، نبش کوچه ۱۲ پلاک 37/1، طبقه ۳ واحد ۶"}
                    </td>
                    {/* {invoice.updated_at > '2022-10-23 23:59:59'
                                     ? ''
                                     : invoice.serial.includes('cloud') && (
                                          <td>شماره اقتصادی : 411487383415</td>
                                       )} */}
                  </tr>
                </tbody>
              </table>
              {/* customer */}
              <table className="w-full">
                <thead>
                  <tr className="border border-asiatech-gray-500 my-4 bg-asiatech-gray-400 border-b-0 border-t-0">
                    <th
                      scope="row"
                      colSpan={3}
                      className="text-center p-1  border border-asiatech-gray-500"
                    >
                      مشخصات خریدار
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-7 py-1">
                      نام شخص حقیقی/حقوقی:&nbsp;
                      {invoice?.user?.user_profile?.company_name
                        ? invoice?.user?.user_profile?.company_name
                        : invoice?.user?.user_profile?.first_name +
                          " " +
                          invoice?.user?.user_profile?.last_name}
                    </td>
                    {invoice.updated_at > "2022-10-23 23:59:59" ? (
                      <td className="px-7 py-1">
                        کد / شناسه ملی:&nbsp;
                        {invoice.user_type !== "Legal"
                          ? invoice.user.username
                          : invoice?.user?.user_profile?.identification_number}
                      </td>
                    ) : (
                      <td className="p-4">شماره اقتصادی: {invoice?.user?.company_economic_code}</td>
                    )}

                    <td className="px-7 py-1">
                      شناسه ثبت: &nbsp;
                      {invoice?.user?.user_profile?.company_registration_number
                        ? invoice?.user?.user_profile?.company_registration_number
                        : invoice?.user?.user_profile?.certificate_number}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-7 py-1">
                      استان:
                      {invoice?.user?.user_profile?.province
                        ? invoice?.user?.user_profile?.province
                        : invoice?.user?.user_profile.agent_province}
                    </td>

                    <td className="px-7 py-1">
                      شهر:
                      {invoice?.user?.user_profile?.city
                        ? invoice?.user?.user_profile?.city
                        : invoice?.user?.user_profile?.agent_city}
                      &nbsp;
                    </td>
                    <td className="px-7 py-1">
                      کدپستی 10 رقمی:
                      {invoice?.user?.user_profile?.postal_code}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={1} className="px-7 py-1">
                      نشانی:
                      {invoice?.user?.user_profile?.address}
                    </td>
                    {invoice.updated_at < "2022-10-23 23:59:59" && (
                      <td style={{ padding: "1em" }}>کد / شناسه ملی:&nbsp;</td>
                    )}
                    <td className="px-7 py-1">
                      شماره تلفن / نمابر:
                      {invoice?.user?.user_profile?.tel}
                    </td>
                  </tr>
                </tbody>
              </table>
              {/* product detail */}
              <table className="text-center w-full">
                <thead>
                  <tr>
                    <th
                      colSpan={10}
                      className="text-center py-1 bg-asiatech-gray-400 border border-asiatech-gray-500 border-b-0"
                    >
                      مشخصات کالا یا خدمات مورد معامله
                    </th>
                  </tr>
                </thead>

                <thead className="py-0">
                  <tr>
                    <th className="border border-asiatech-gray-500 px-2 py-1 bg-asiatech-gray-400">
                      ردیف
                    </th>
                    <th className="border border-asiatech-gray-500 px-2 py-1 bg-asiatech-gray-400">
                      شرح کالا و خدمات
                    </th>
                    <th className="border border-asiatech-gray-500 px-2 py-1 bg-asiatech-gray-400">
                      تعداد
                    </th>
                    <th className="border border-asiatech-gray-500 px-2 py-1 bg-asiatech-gray-400">
                      مبلغ واحد
                    </th>
                    <th className="border border-asiatech-gray-500 px-2 py-1 bg-asiatech-gray-400">
                      مبلغ کل
                    </th>
                    <th className="border border-asiatech-gray-500 px-2 py-1 bg-asiatech-gray-400">
                      تخفیفات
                    </th>
                    <th className="border border-asiatech-gray-500 px-2 py-1 bg-asiatech-gray-400">
                      مبلغ کل پس از کسر تخفیفات
                    </th>

                    {invoice.updated_at > "2024/03/19 23:59:59" ? (
                      <>
                        <th className="border border-asiatech-gray-500 px-7 py-1 bg-asiatech-gray-400">
                          مالیات بر ارزش افزوده ۱۰٪
                        </th>
                      </>
                    ) : (
                      <>
                        <th className="border border-asiatech-gray-500 px-2 py-1 bg-asiatech-gray-400">
                          مالیات 6%
                        </th>
                        <th className="border border-asiatech-gray-500 px-2 py-1 bg-asiatech-gray-400">
                          مالیات 3%
                        </th>
                      </>
                    )}

                    <th className="border border-asiatech-gray-500 px-2 bg-asiatech-gray-400">
                      {invoice.updated_at > "2024/03/19 23:59:59"
                        ? "مبلغ کل بعلاوه مالیات بر ارزش افزوده"
                        : "مبلغ کل بعلاوه مالیات و عوارض"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-asiatech-gray-500 px-7">1</td>
                    <td className="border border-asiatech-gray-500 px-7 py-1">{invoice.title}</td>
                    <td className="border border-asiatech-gray-500 px-7 py-1">1</td>
                    <td className="border border-asiatech-gray-500 px-7 py-1">
                      {NumberSeparator(invoice.net_amount)}
                    </td>
                    <td className="border border-asiatech-gray-500 px-7 py-1">
                      {NumberSeparator(invoice.net_amount)}
                    </td>
                    <td className="border border-asiatech-gray-500 px-7 py-1">0</td>
                    <td className="border border-asiatech-gray-500 px-7 py-1">
                      {NumberSeparator(invoice.net_amount)}
                    </td>
                    {invoice.updated_at > "2024/03/19 23:59:59" ? (
                      <>
                        <td className="border border-asiatech-gray-500 px-7 py-1">
                          {NumberSeparator(invoice.net_amount * 0.1)}
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="border border-asiatech-gray-500 px-7 py-1">
                          {NumberSeparator(invoice.net_amount * 0.06)}
                        </td>
                        <td className="border border-asiatech-gray-500 px-7 py-1">
                          {NumberSeparator(invoice.net_amount * 0.03)}
                        </td>
                      </>
                    )}

                    <td className="border border-asiatech-gray-500 px-7 py-1">
                      {NumberSeparator(invoice.total_amount)}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={5} className="border border-asiatech-gray-500 px-7 py-2">
                      <p>
                        جمع کل صورت حساب:{" "}
                        <span className="px-2">{NumberSeparator(invoice.total_amount)} ریال</span>
                      </p>
                    </td>
                    <td colSpan={5} className="border border-asiatech-gray-500 px-7 py-2">
                      <p style={{ padding: "0 1em" }}>
                        {" "}
                        جمع کل صورت حساب به حروف:{" "}
                        {/* {((): ReactNode => {
                                           return (
                                              <>{numberToWords(invoice.total_amount)} ریال</>
                                           );
                                        })()} */}
                        <span className="px-2">{NumberSeparator(invoice.total_amount)} ریال</span>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* payment detail */}
              <table className="text-center w-full mt-2">
                <thead>
                  <tr>
                    <th
                      colSpan={5}
                      className="border border-asiatech-gray-500 py-1 bg-asiatech-gray-400"
                    >
                      مشخصات پرداخت
                    </th>
                  </tr>
                </thead>

                <thead>
                  <tr>
                    <th className="border border-asiatech-gray-500 py-1 bg-asiatech-gray-400">
                      نوع پرداخت
                    </th>
                    <th className="border border-asiatech-gray-500 py-1 bg-asiatech-gray-400">
                      تاریخ پرداخت
                    </th>
                    <th className="border border-asiatech-gray-500 py-1 bg-asiatech-gray-400">
                      درگاه
                    </th>
                    <th className="border border-asiatech-gray-500 py-1 bg-asiatech-gray-400">
                      شناسه پرداخت
                    </th>
                    <th className="border border-asiatech-gray-500 py-1 bg-asiatech-gray-400">
                      مبلغ
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-asiatech-gray-500 py-1">
                      {invoice.payment_info && invoice.payment_info.type}
                    </td>
                    <td className="border border-asiatech-gray-500 py-1">
                      {new DateObject(invoice.updated_at)
                        .convert(persian, persian_fa)
                        .format("YYYY/MM/DD")}
                    </td>
                    <td className="border border-asiatech-gray-500 py-1">
                      {invoice.payment_info && invoice.payment_info.gateway}
                    </td>
                    <td className="border border-asiatech-gray-500 py-1">
                      {invoice.payment_info &&
                        invoice.payment_info.meta &&
                        invoice.payment_info.meta.TRACENO}
                    </td>
                    <td className="border border-asiatech-gray-500 py-1">
                      {invoice.total_amount && NumberSeparator(invoice.total_amount)}
                    </td>
                  </tr>
                </tbody>
              </table>
              {/* signs */}
              <table className="w-full mt-2">
                <tbody>
                  {invoice?.serial?.includes("cloud") && (
                    <tr className="w-full">
                      <td className="border border-asiatech-gray-500 py-2  w-7/12">
                        <div className="flex items-center justify-between">
                          <div className="pr-7 ">
                            <p className="mb-4">مهرو امضا فروشنده</p>
                            <p>تاریخ امضا</p>
                          </div>
                          <div className="pl-7 pt-2 w-40 h-20">
                            <img src="/invoice.png" alt="logo" />
                          </div>
                        </div>
                      </td>
                      <td className="border border-asiatech-gray-500 px-7 py-4 w-5/12">
                        <div>
                          <p className="mb-4">مهرو امضا خریدار</p>
                          <p>تاریخ امضا</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          );
        })}
      </div>

      {/* <div className="w-full flex justify-end">
        <ReactToPrint
          trigger={() => (
            <Button
              className={`h-full flex flex-row items-center bg-asiatech-blue-800  text-asiatech-gray-200 rounded-14 p-3`}
              color="secondary"
            >
              چاپ فاکتور
            </Button>
          )}
          content={() => {
            return invoiceRef.current;
          }}
        />
      </div> */}
    </div>
  );
}

export default MultiplePrintInvoice;
