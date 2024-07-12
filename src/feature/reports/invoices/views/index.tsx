import MicrosoftExelIcon from "@/assets/icons/MicrosoftExelIcon";
import PrintIcon from "@/assets/icons/PrintIcon";
import ReceiptIcon from "@/assets/icons/ReceiptIcon";
import ReceiptIcon2 from "@/assets/icons/ReceiptIcon2";
import TicketIcon from "@/assets/icons/TicketIcon";
import EmptyState from "@/components/emptyState/EmptyState";
import NumberSeparator from "@/utils/NumberSeprator";
import {
  Button,
  Card,
  Pagination,
  Spinner,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tabs,
  useDisclosure,
} from "@nextui-org/react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { DateObject } from "react-multi-date-picker";
import { getInvoiceFastExcel, getInvoiceListFilter } from "../helper/controller";
import { useInvoices } from "../hooks/useInvoices";
import { Invoice, UserProfile } from "../interface";
import MultiplePrintInvoice from "./MultiplePrintInvoice";
import PrintInvoice from "./PrintInvoice";
import PrintModal from "./PrintModal";
import SearchModal from "./SearchModal";
import "./table.css";

function Index() {
  const {
    getValues,
    setValue,
    page,
    pageSize,
    setPage,
    setPageSize,
    setTableData,
    setTotalItems,
    tableData,
    totalItems,
    isLoading,
    setIsLoading,
    printPage,
    setPrintPage,
    printHandler,
    encodedName,
    encodedSerial,
    encodedTraceNumber,
    selectedKeys,
    setSelectedKeys,
    filteredData,
    invoiceRef,
    invoiceRefMultiple,
    isLoadingPrint,
    setIsLoadingPrint,
    isLoadingExel,
    setIsLoadingExel,
    getCurrentDate,
    setFromAdvance,
    searchPagination,
    userId,
  } = useInvoices();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isOpenSearch,
    onOpen: onOpenSearch,
    onOpenChange: onOpenChangeSearch,
  } = useDisclosure();
  const {
    isOpen: isOpenMultiple,
    onOpen: onOpenMultiple,
    onOpenChange: onOpenChangeMultiple,
  } = useDisclosure();
  console.log(getValues());
  return (
    <Card className="px-4 py-6 shadow-one mt-6">
      <div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between">
            <div className="flex">
              <TicketIcon className="w-6 h-6 ml-2" />
              <span className="font-extrabold text-asiatech-darkblue-502 text-base">فاکتورها</span>
            </div>
            <div className="max-lg:w-full flex flex-col md:flex-row gap-2">
              <button
                onClick={() => {
                  // اگر تاریخ انتخاب نشه تاریخ امروز ارسال میشه برای دریافت اکسل

                  if (getValues("end_date") === "" || getValues("start_date") === "") {
                    getInvoiceFastExcel(setIsLoadingExel, {
                      start_date: getCurrentDate(),
                      end_date: getCurrentDate(),
                    });
                  } else {
                    console.log("por");
                    getInvoiceFastExcel(setIsLoadingExel, {
                      start_date: getValues("start_date"),
                      end_date: getValues("end_date"),
                    });
                  }
                }}
                className={` max-lg:w-full text-asiatech-blue-902 border border-asiatech-blue-902 px-2 rounded-lg h-10 flex items-center justify-center ml-2`}
              >
                {isLoadingExel ? <Spinner /> : <MicrosoftExelIcon className="w-6 h-6" />}
              </button>
              <button
                disabled={Array.from(selectedKeys).length < 1}
                onClick={() => {
                  if (Array.from(selectedKeys).length > 0) {
                    onOpenMultiple();
                  }
                }}
                className={`max-lg:w-full text-asiatech-blue-902 border border-asiatech-blue-902 px-2 rounded-lg h-10 flex items-center justify-center ml-2
                 ${
                   Array.from(selectedKeys).length < 1
                     ? "text-asiatech-darkblue-600 border border-asiatech-darkblue-600"
                     : ""
                 }`}
              >
                <PrintIcon className="w-6 h-6" />
              </button>
              <button
                onClick={() => {
                  onOpenSearch();
                }}
                className={`max-lg:w-full text-asiatech-blue-902 border border-asiatech-blue-902 px-4 rounded-lg h-10 flex items-center justify-center ml-2`}
              >
                جستجو پیشرفته
              </button>
              <Button
                isDisabled={true}
                className={`max-sm:w-full max-sm:mb-4 flex max-lg:justify-center items-center justify-between lg:ml-2`}
                // variant="bordered"
                color="primary"
                onClick={() => {
                  // getExcelReport();
                }}
              >
                <span>افزودن فاکتور</span>
              </Button>
            </div>
          </div>

          <Tabs
            aria-label="Options"
            className=" "
            color="primary"
            disabledKeys={["returnBill"]}
            classNames={{ panel: "!px-0", tabList: "border border-asiatech-gray-500 bg-inherit" }}
          >
            <Tab
              key="daily"
              title={
                <div className="flex items-center gap-1">
                  <ReceiptIcon2 className="w-6 h-6 " />
                  همه فاکتورها
                </div>
              }
              className=""
            >
              {tableData && tableData?.length > 0 && (
                <div className="flex max-sm:flex-col text-right text-asiatech-gray-800 mb-4">
                  <p>
                    ( از تاریخ
                    <span className="mx-1 text-asiatech-blue-903" dir="ltr">
                      {new DateObject(getValues("start_date"))
                        .convert(persian, persian_fa)
                        .format("YYYY/MM/DD")}
                    </span>
                    تا
                    <span className="mx-1 text-asiatech-blue-903" dir="ltr">
                      {new DateObject(getValues("end_date"))
                        .convert(persian, persian_fa)
                        .format("YYYY/MM/DD")}
                    </span>
                    )
                  </p>{" "}
                  &nbsp;
                  {getValues("name") && (
                    <p>
                      ( نام | نام خانوادگی:{" "}
                      <span className="text-asiatech-blue-903">{getValues("name")}</span>)
                    </p>
                  )}
                  &nbsp;
                  {getValues("serial") && (
                    <p>
                      ( شماره فاکتور:{" "}
                      <span className="text-asiatech-blue-903">{getValues("serial")}</span>)
                    </p>
                  )}
                  &nbsp;
                  {getValues("traceNumber") && (
                    <p>
                      ( شناسه پرداخت:{" "}
                      <span className="text-asiatech-blue-903">{getValues("traceNumber")}</span>)
                    </p>
                  )}
                  &nbsp;
                  {getValues("userId") && (
                    <p>
                      ( شناسه کاربر:{" "}
                      <span className="text-asiatech-blue-903">{getValues("userId")}</span>)
                    </p>
                  )}
                </div>
              )}
              <Table
                aria-label="domain table"
                shadow="none"
                isHeaderSticky
                className="!p-0 overflow-x-auto"
                selectionMode="multiple"
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}
                removeWrapper
                classNames={{
                  tr: "!rounded-14",
                  th: "text-center bg-asiatech-gray-300 text-asiatech-gray-800 shadow-none",
                  td: "text-center",
                  thead: "shadow-none",
                  table: "text-asiatech-gray-800",
                }}
              >
                <TableHeader>
                  <TableColumn key="user">کاربر</TableColumn>
                  <TableColumn key="user">شناسه کاربر</TableColumn>
                  <TableColumn key="user-type">نوع کاربر</TableColumn>
                  <TableColumn key="title">عنوان</TableColumn>
                  <TableColumn key="price">مبلغ</TableColumn>
                  <TableColumn key="price-date">تاریخ پرداخت</TableColumn>
                  <TableColumn key="shnase-pardakht">شناسه پرداخت</TableColumn>
                  <TableColumn key="key">شماره فاکتور</TableColumn>
                  <TableColumn key="key">صادر کننده</TableColumn>
                  <TableColumn key="state">وضعیت</TableColumn>
                  <TableColumn
                    key="print"
                    className="!rounded-r-none rounded-l-14 flex justify-center items-center"
                  >
                    چاپ
                  </TableColumn>
                </TableHeader>
                <TableBody
                  loadingContent={<Spinner />}
                  isLoading={isLoading}
                  emptyContent={
                    isLoading ? " " : <EmptyState text="اطلاعاتی جهت نمایش وجود ندارد." />
                  }
                >
                  {tableData &&
                    tableData.map((item: Invoice, index) => {
                      return (
                        <TableRow className="text-right bordertabel" key={item?.id}>
                          <TableCell>
                            {item.user.user_profile.first_name ? (
                              <span>
                                {item.user.user_profile.first_name}{" "}
                                {item.user.user_profile.last_name}
                              </span>
                            ) : (
                              <span>
                                {
                                  (
                                    item.user.user_profile as UserProfile & {
                                      agent_first_name: string;
                                    }
                                  ).agent_first_name
                                }{" "}
                                {
                                  (
                                    item.user.user_profile as UserProfile & {
                                      agent_last_name: string;
                                    }
                                  ).agent_last_name
                                }
                              </span>
                            )}
                          </TableCell>
                          <TableCell>{item.user_id}</TableCell>
                          <TableCell>{`حقیقی`}</TableCell>
                          <TableCell>{`${item?.title}`}</TableCell>
                          <TableCell>{`${NumberSeparator(item?.total_amount)} ریال`}</TableCell>
                          <TableCell>
                            {new DateObject(item?.invoice_items[0]?.created_at)
                              .convert(persian, persian_fa)
                              .format()}
                          </TableCell>
                          <TableCell>{`${item?.payment_info?.tracking_number}`}</TableCell>
                          <TableCell key={"key"}>{`${item?.serial}`}</TableCell>
                          <TableCell key={"key"}>
                            {item.created_user.user_profile.first_name ? (
                              <span>
                                {item.created_user.user_profile.first_name}{" "}
                                {item.created_user.user_profile.last_name}
                              </span>
                            ) : (
                              <span>
                                {
                                  (
                                    item.created_user.user_profile as UserProfile & {
                                      agent_first_name: string;
                                    }
                                  ).agent_first_name
                                }{" "}
                                {
                                  (
                                    item.created_user.user_profile as UserProfile & {
                                      agent_last_name: string;
                                    }
                                  ).agent_last_name
                                }
                              </span>
                            )}
                          </TableCell>
                          <TableCell>{`${
                            item?.status === "success" ? "پرداخت شده" : "نامشخص"
                          }`}</TableCell>
                          <TableCell>
                            <div
                              className="flex justify-center items-center p-2 cursor-pointer"
                              onClick={() => {
                                onOpen();
                                printHandler(item, isOpen);
                              }}
                            >
                              <PrintIcon className="w-6 h-6 stroke-asiatech-blue-902" />
                            </div>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>

              <PrintModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                invoiceRef={invoiceRef}
                componentToShow={<PrintInvoice invoice={printPage.data} invoiceRef={invoiceRef} />}
              />

              <PrintModal
                isOpen={isOpenMultiple}
                invoiceRef={invoiceRefMultiple}
                onOpenChange={onOpenChangeMultiple}
                componentToShow={
                  <MultiplePrintInvoice invoices={filteredData} invoiceRef={invoiceRefMultiple} />
                }
              />

              <div className="mt-10 w-full flex justify-start xl:justify-start ">
                {!isLoading && totalItems > 1 && (
                  <Pagination
                    isCompact
                    showControls
                    classNames={{ next: "rotate-180", prev: "rotate-180" }}
                    total={totalItems}
                    page={page}
                    onChange={(e) => {
                      setPage(e);
                      searchPagination(e);
                      setSelectedKeys(new Set([]));
                    }}
                  />
                )}
              </div>
            </Tab>
            <Tab
              key="returnBill"
              title={
                <div className="flex items-center gap-1">
                  <ReceiptIcon className="w-6 h-6 " />
                  فاکتورهای برگشتی
                </div>
              }
            >
              تست تب 2
            </Tab>
          </Tabs>
          {/* <div className="w-full md:w-60">
              <label className="text-asiatech-gray-700" dir="ltr">
                نام
              </label>
              <Input
                variant="bordered"
                type="text"
                placeholder="نام خود را وارد کنید"
                className="w-full mt-2"
                value={getValues("name")}
                classNames={{
                  input: "placeholder:text-asiatech-gray-500",
                  inputWrapper: [
                    "backdrop-saturate-200",
                    "focus-within:!border-asiatech-gray-500 !border-1",
                    "inputWrapper: h-[40px]",
                  ],
                }}
                onChange={(e: any) => {
                  setValue("name", e.target.value, { shouldValidate: true });
                }}
              />
            </div>
            <div className="w-full md:w-60">
              <label className="text-asiatech-gray-700" dir="ltr">
                شماره فاکتور
              </label>
              <Input
                variant="bordered"
                type="text"
                placeholder="شماره فاکتور را وارد کنید"
                className="w-full mt-2"
                value={getValues("serial")}
                classNames={{
                  input: "placeholder:text-asiatech-gray-500",
                  inputWrapper: [
                    "backdrop-saturate-200",
                    "focus-within:!border-asiatech-gray-500 !border-1",
                    "inputWrapper: h-[40px]",
                  ],
                }}
                onChange={(e: any) => {
                  setValue("serial", e.target.value, { shouldValidate: true });
                }}
              />
            </div>
            <div className="w-full md:w-60">
              <label className="text-asiatech-gray-700" dir="ltr">
                شناسه پرداخت
              </label>
              <Input
                variant="bordered"
                type="text"
                placeholder="شناسه پرداخت را وارد کنید"
                className="w-full mt-2"
                value={getValues("traceNumber")}
                classNames={{
                  input: "placeholder:text-asiatech-gray-500",
                  inputWrapper: [
                    "backdrop-saturate-200",
                    "focus-within:!border-asiatech-gray-500 !border-1",
                    "inputWrapper: h-[40px]",
                  ],
                }}
                onChange={(e: any) => {
                  setValue("traceNumber", e.target.value, { shouldValidate: true });
                }}
              />
            </div>
            <div className="w-full md:w-60">
              <label className="text-asiatech-gray-700 font-bold">از تاریخ</label>
              <DatePickerIcon
                portal={false}
                value={new DateObject(getValues("start_date"))
                  .convert(persian, persian_fa)
                  .format()}
                onChange={(e: any) => {
                  let date = new DateObject(e)
                    .convert(gregorian, gregorian_en)
                    .format("YYYY-MM-DD");
                  setValue("start_date", date, { shouldValidate: true });
                }}
              />
            </div>
            <div className="w-full md:w-60">
              <label className="text-asiatech-gray-700 font-bold">تا تاریخ</label>
              <DatePickerIcon
                portal={false}
                value={new DateObject(getValues("end_date")).convert(persian, persian_fa).format()}
                onChange={(e: any) => {
                  let date = new DateObject(e)
                    .convert(gregorian, gregorian_en)
                    .format("YYYY-MM-DD");
                  setValue("end_date", date, { shouldValidate: true });
                }}
              />
            </div>
            <div className="w-full md:w-60 flex items-end">
              <Button
                type="button"
                color="primary"
                isDisabled={isLoading}
                onClick={() =>
                  getInvoiceListFilter(
                    `name=${encodedName}&trace-no=${encodedTraceNumber}&serial=${encodedSerial}`,
                    {
                      start_date: getValues("start_date"),
                      end_date: getValues("end_date"),
                    },
                    setTableData,
                    setTotalItems,
                    setIsLoading
                  )
                }
                className="w-full"
              >
                {isLoading ? "در حال بارگذاری ..." : "جستجو"}
              </Button>
            </div> */}
          {/* table */}
        </div>
        <SearchModal
          isOpen={isOpenSearch}
          onOpenChange={onOpenChangeSearch}
          getValues={getValues}
          setValue={setValue}
          onClick={() => {
            setFromAdvance(true);
            setPage(1);
            setTableData([]);
            getInvoiceListFilter(
              `name=${encodedName}&trace-no=${encodedTraceNumber}&serial=${encodedSerial}&user_id=${userId}&page=1`,
              {
                start_date: getValues("start_date"),
                end_date: getValues("end_date"),
              },
              setTableData,
              setTotalItems,
              setIsLoading,
              setFromAdvance
            );
          }}
        />
      </div>
    </Card>
  );
}

export default Index;
