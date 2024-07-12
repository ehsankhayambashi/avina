import AiBrainIcon from "@/assets/icons/AiBrainIcon";
import ServerIcon from "@/assets/icons/ServerIcon";
import EmptyState from "@/components/emptyState/EmptyState";
import NumberSeparator from "@/utils/NumberSeprator";
import {
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
  useDisclosure,
} from "@nextui-org/react";
import { Key } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { DateObject } from "react-multi-date-picker";
import { useWallet } from "../hooks/useWallet";
import { IwalletData } from "../interfaces";
import SearchModal from "./SearchModal";

const Wallet = () => {
  const {
    searchData,
    setSearchData,
    searchBtnHandler,
    disableBtn,
    tableData,
    loading,
    page,
    setPage,
    totalPage,
    excelDisableBtn,
    infoData,
    perPage,
    setPerPage,
    todayFa,
    profileTypeHandler,
    UserType,
    totalAmount,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
  } = useWallet();
  console.log(tableData);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Card className="px-4 py-6 mt-6 overflow-visible">
        <CardHeader className="flex flex-col lg:flex-row justify-between p-0 mb-6 text-asiatech-gray-800">
          <div className="flex gap-2">
            <ServerIcon className="w-6 h-6 ml-2" />
            <span className="font-extrabold text-base">کیف پول</span>
          </div>
          <button
            disabled={loading}
            onClick={() => {
              onOpen();
            }}
            className={`max-lg:w-full max-sm:mt-4  text-asiatech-blue-902 border border-asiatech-blue-902 px-4 rounded-lg h-10 flex items-center justify-center ml-2
            ${loading ? "text-asiatech-darkblue-500 border border-asiatech-darkblue-500" : ""}`}
          >
            جستجو پیشرفته
          </button>
        </CardHeader>

        <div className="w-full flex flex-col lg:flex-row justify-between items-center flex-wrap mt-4 ">
          {tableData && tableData?.length > 0 ? (
            <div className="w-full lg:w-6/12 flex justify-between h-fit border border-asiatech-gray-401 rounded-2xl px-4 ">
              <div className="w-full flex items-center justify-between">
                <div className="w-full flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <AiBrainIcon className="w-10 h-10" />
                    <p className="text-xl font-bold text-asiatech-gray-800">مبلغ کل </p>
                  </div>
                  <div className="relative text-xl font-bold p-4 text-asiatech-green-900 bg-opacity-20">
                    <div className="absolute inset-0 bg-[url('/icon/aiBrainDelete.svg')] bg-no-repeat bg-center bg-cover opacity-5"></div>
                    <div className="relative">{NumberSeparator(totalAmount)} ریال</div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <h1></h1>
            </div>
          )}
          <div className="flex justify-end self-end max-sm:w-full items-center text-asiatech-gray-600 text-sm max-md:my-4 my-8  ">
            <span className="whitespace-nowrap">تعداد سطر هر صفحه:</span>
            <Select
              isDisabled={loading}
              onChange={(e: any) => {
                setPerPage(e.target.value);
                if (searchData.end_date !== "" && searchData.start_date !== "") {
                  setPage(1);
                  searchBtnHandler(1, e.target.value);
                }
              }}
              selectedKeys={new Set<Key>([String(perPage)])}
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
        {tableData && tableData?.length > 0 && (
          <div className="flex max-sm:flex-col text-right text-asiatech-gray-800 mb-4">
            <p>
              ( از تاریخ
              <span className="mx-1 text-asiatech-blue-903" dir="ltr">
                {new DateObject(startDate).convert(persian, persian_fa).format("YYYY/MM/DD")}
              </span>
              تا
              <span className="mx-1 text-asiatech-blue-903" dir="ltr">
                {new DateObject(endDate).convert(persian, persian_fa).format("YYYY/MM/DD")}
              </span>
              )
            </p>
          </div>
        )}
        <Table
          aria-label="reasons table"
          shadow="none"
          isHeaderSticky
          className="!p-0 mt-1 overflow-x-auto"
          removeWrapper
          classNames={{
            th: "text-center",
            td: "text-center py-6 ",
            thead: "shadow-none",
            table: "text-asiatech-gray-800",
          }}
        >
          <TableHeader>
            <TableColumn className="!rounded-l-none rounded-r-lg" key="number">
              {" "}
              #{" "}
            </TableColumn>
            <TableColumn key="user"> کاربر </TableColumn>
            <TableColumn key="userType"> نوع کاربر</TableColumn>
            <TableColumn key="title"> عنوان</TableColumn>
            <TableColumn key="price"> مبلغ</TableColumn>
            <TableColumn className="!rounded-r-none rounded-l-lg" key="paymentDate">
              {" "}
              تاریخ پرداخت
            </TableColumn>
            {/* <TableColumn key="description" className="!rounded-r-none rounded-l-lg">
              {" "}
              تعداد ماشین حذف شده
            </TableColumn> */}
          </TableHeader>
          <TableBody
            loadingContent={<Spinner />}
            isLoading={loading}
            emptyContent={loading ? " " : <EmptyState text="اطلاعاتی یافت نشد" />}
          >
            {tableData &&
              tableData?.map((data: IwalletData, index: number) => {
                console.log(data);
                return (
                  <TableRow key={index}>
                    <TableCell key={"number"}>{index + 1}</TableCell>
                    <TableCell key={"user"}>
                      {data.user &&
                        data.user.user_profile &&
                        (data.user.user_profile.first_name ??
                          data.user.user_profile.agent_first_name) +
                          " " +
                          (data.user.user_profile.last_name ??
                            data.user.user_profile.agent_last_name)}
                    </TableCell>
                    <TableCell key={"userType"}>
                      {data.user && profileTypeHandler(data.user)}
                      {data.user &&
                        data.user.user_profile &&
                        data.user.user_profile_type === UserType.LEGAL && (
                          <span>&nbsp; ({data.user.user_profile.company_name})</span>
                        )}
                    </TableCell>
                    <TableCell key={"title"}>{data.title}</TableCell>
                    <TableCell key={"price"}>{NumberSeparator(data.total_amount)} ریال</TableCell>
                    <TableCell key={"paymentDate"}>
                      {new DateObject(data.updated_at)
                        .convert(persian, persian_fa)
                        .format("HH:mm YYYY/MM/DD")}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
        <div className="mt-10 w-full flex flex-wrap justify-start items-center">
          {totalPage > 1 && !disableBtn && (
            <Pagination
              isDisabled={loading}
              isCompact
              showControls
              classNames={{ next: "rotate-180", prev: "rotate-180" }}
              total={totalPage}
              initialPage={page}
              onChange={(e: any) => {
                setPage(e);
                searchBtnHandler(e, perPage);
              }}
            />
          )}
        </div>
        <SearchModal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          onClick={() => {
            setPage(1);
            searchBtnHandler(page, perPage);
          }}
        />
      </Card>
    </>
  );
};
export default Wallet;
