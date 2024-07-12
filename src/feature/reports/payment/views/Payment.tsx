import AiBrainIcon from "@/assets/icons/AiBrainIcon";
import NumberSeparator from "@/utils/NumberSeprator";
import {
  Button,
  Card,
  CardHeader,
  Pagination,
  Select,
  SelectItem,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { Key } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { DateObject } from "react-multi-date-picker";
import { usePayment } from "../hooks/usePayment";
import SearchModal from "./SearchModal";

export default function Payment() {
  const {
    Searching,
    paymentData,
    setPaymentData,
    page,
    setPage,
    pageCount,
    setPageCount,
    lastPage,
    isLoading,
    searchDataHandler,
    searchData,
    setSearchData,
    totalSale,
    searchModal,
    setSearchModal,
  } = usePayment();
  return (
    <Card className="px-4 py-6 mb-8 overflow-visible">
      <CardHeader className="w-full flex flex-wrap md:justify-between p-0 min-md:mb-6 text-asiatech-gray-600">
        <div className="flex items-center max-md:mb-6">
          {/* <ServerIcon className="w-6 h-6 ml-2" /> */}
          <span className="font-extrabold">آخرین پرداخت‌ها</span>
        </div>
        <Button
          type="button"
          color="primary"
          isDisabled={isLoading}
          onClick={() => {
            setSearchModal(true);
            // Searching(searchData, setSearchData);
          }}
          className={`max-lg:w-full bg-white text-asiatech-blue-902  border border-asiatech-blue-902 px-4 rounded-lg h-10 flex items-center justify-center ml-2`}
        >
          {isLoading ? "در حال بارگذاری ..." : "جستجوی پیشرفته"}
        </Button>
      </CardHeader>
      <div>
        {/* <div className="flex justify-between">
          <div className="w-full flex gap-6 flex-nowrap max-sm:flex-wrap items-end">
            <div className=" max-sm:w-full flex items-end">
              <Button
                type="button"
                color="primary"
                isDisabled={isLoading}
                onClick={() => {
                  setSearchModal(true);
                  // Searching(searchData, setSearchData);
                }}
                className="w-full"
              >
                {isLoading ? "در حال بارگذاری ..." : "جستجو"}
              </Button>
            </div>
          </div>
        </div> */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-center flex-wrap mt-4 ">
          {totalSale !== 0 ? (
            <div className="w-full lg:w-6/12 flex justify-between h-fit border border-asiatech-gray-401 rounded-2xl px-4 ">
              <div className="w-full flex items-center justify-between">
                <div className="w-full flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <AiBrainIcon className="w-10 h-10" />
                    <p className="text-xl font-bold text-asiatech-gray-800">
                      مبلغ کل فروش در بازه انتخابی
                    </p>
                  </div>
                  <div className="relative text-xl font-bold p-4 text-asiatech-green-900 bg-opacity-20">
                    <div className="absolute inset-0 bg-[url('/icon/aiBrainDelete.svg')] bg-no-repeat bg-center bg-cover opacity-5"></div>
                    <div className="relative">{NumberSeparator(totalSale)} ریال</div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <h1></h1>
            </div>
          )}

          <div className="flex self-end justify-end max-sm:w-full items-center text-asiatech-gray-600 text-sm max-md:my-4 my-8  ">
            <span>تعداد سطر هر صفحه:</span>
            <Select
              isDisabled={isLoading}
              onChange={(e: any) => {
                if (e.target.value) {
                  setPageCount(e.target.value);
                  setPage(1);
                  searchDataHandler(1, e.target.value);
                }
              }}
              selectedKeys={new Set<Key>([String(pageCount)])}
              defaultSelectedKeys={"5"}
              classNames={{
                base: "h-6 w-[65px] mr-1",
                mainWrapper: "h-6 w-[65px]",
                trigger: "h-6 bg-tranparent shadow-none border-spacing-0 rounded-lg",
                value: "text-right",
                selectorIcon: "right-[unset] left-2",
              }}
            >
              <SelectItem value="5" key="5">
                5
              </SelectItem>
              <SelectItem value="10" key="10">
                10
              </SelectItem>
              <SelectItem value="15" key="15">
                15
              </SelectItem>
            </Select>
          </div>
        </div>
        {
          <div className="flex max-sm:flex-col text-right text-asiatech-gray-800 mb-4">
            <p>
              ( از تاریخ
              <span className="mx-1 text-asiatech-blue-903" dir="ltr">
                {new DateObject(searchData.start_date)
                  .convert(persian, persian_fa)
                  .format("YYYY/MM/DD")}
              </span>
              تا
              <span className="mx-1 text-asiatech-blue-903" dir="ltr">
                {new DateObject(searchData.end_date)
                  .convert(persian, persian_fa)
                  .format("YYYY/MM/DD")}
              </span>
              )
            </p>{" "}
            &nbsp;
            {searchData.name && (
              <p>
                ( نام | نام خانوادگی:{" "}
                <span className="text-asiatech-blue-903">{searchData.name}</span>)
              </p>
            )}
            &nbsp;
            {searchData.serial && (
              <p>
                ( شماره فاکتور: <span className="text-asiatech-blue-903">{searchData.serial}</span>)
              </p>
            )}
            &nbsp;
            {searchData?.["trace-no"] && (
              <p>
                ( کد رهگیری:{" "}
                <span className="text-asiatech-blue-903">{searchData?.["trace-no"]}</span>)
              </p>
            )}
          </div>
        }
        <Table
          aria-label="domain table"
          shadow="none"
          isHeaderSticky
          className="table-auto overflow-x-scroll lg:overflow-x-auto !p-0"
          removeWrapper
          classNames={{
            th: "text-right",
            td: "text-right py-6 ",
            thead: "shadow-none",
            table: "text-asiatech-gray-800",
          }}
        >
          <TableHeader>
            <TableColumn className="!rounded-l-none rounded-r-lg">شماره مشتری</TableColumn>
            <TableColumn key="name">کاربر</TableColumn>
            <TableColumn key="title">عنوان</TableColumn>
            <TableColumn key="amount">مبلغ</TableColumn>
            <TableColumn key="serialDate">تاریخ فاکتور</TableColumn>
            <TableColumn key="paymentDate">تاریخ پرداخت</TableColumn>
            <TableColumn key="serialNumber">شماره فاکتور</TableColumn>
            <TableColumn key="traceNumber">کد رهگیری</TableColumn>
            <TableColumn key="cardNumber">شماره کارت</TableColumn>
            <TableColumn key="status" className="!rounded-r-none rounded-l-lg">
              وضعیت
            </TableColumn>
          </TableHeader>
          <TableBody
            // loadingContent={<Spinner label="Loading..." />}
            // emptyContent={"موردی برای نمایش وجود ندارد."}
            loadingContent={<Spinner />}
            isLoading={isLoading}
            emptyContent={isLoading ? " " : "موردی برای نمایش وجود ندارد."}
          >
            {paymentData &&
              paymentData.map((i: any, index: number) => {
                return (
                  <TableRow className="bordertabel" key={index}>
                    <TableCell>{i.user?.id}</TableCell>
                    <TableCell>
                      {i.user?.user_profile?.first_name || i.user?.user_profile?.agent_first_name}{" "}
                      {i.user?.user_profile?.last_name || i.user?.user_profile?.agent_last_name}{" "}
                      {i.user?.user_profile?.company_name
                        ? "(" + i.user?.user_profile?.company_name + ")"
                        : ""}
                    </TableCell>
                    <TableCell>{i.title}</TableCell>
                    <TableCell>{NumberSeparator(i.total_amount)}ریال </TableCell>
                    <TableCell>
                      {(new DateObject(i?.created_at) as any)
                        .convert(persian, persian_fa)
                        .format("HH:MM:SS YYYY/MM/DD")}
                    </TableCell>
                    <TableCell>
                      {" "}
                      {(new DateObject(i?.updated_at) as any)
                        .convert(persian, persian_fa)
                        .format("HH:MM:SS YYYY/MM/DD")}
                    </TableCell>
                    <TableCell>{i?.serial}</TableCell>
                    <TableCell>{i?.payment_info?.meta?.TRACENO}</TableCell>
                    <TableCell>{i?.payment_info?.meta?.SecurePan}</TableCell>
                    <TableCell>{i?.invoice_items[0]?.payment?.description}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </div>
      {!isLoading && lastPage > 1 && (
        <div className="mt-10 w-full flex justify-start ">
          <Pagination
            isDisabled={isLoading}
            isCompact
            showControls
            classNames={{ next: "rotate-180", prev: "rotate-180" }}
            total={lastPage}
            initialPage={page}
            // page={page}
            onChange={(e: any) => {
              // if (page !== null) {
              setPage(e);
              searchDataHandler(e, pageCount);
              // }
            }}
          />
        </div>
      )}
      <SearchModal
        isOpen={searchModal}
        onOpenChange={setSearchModal}
        searchData={searchData}
        setSearchData={setSearchData}
        Searching={Searching}
      />
    </Card>
  );
}
