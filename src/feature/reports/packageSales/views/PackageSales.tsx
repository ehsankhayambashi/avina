import ServerIcon from "@/assets/icons/ServerIcon";
import EmptyState from "@/components/emptyState/EmptyState";
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
  useDisclosure,
} from "@nextui-org/react";
import { Key } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { DateObject } from "react-multi-date-picker";
import { usePackageSales } from "../hooks/usePackageSales";
import { IPackageSales } from "../interfaces";
import SearchModal from "./SearchModal";

const PackageSales = () => {
  const {
    searchBtnHandler,
    disableBtn,
    tableData,
    loading,
    page,
    setPage,
    totalPage,
    getExcelReport,
    excelDisableBtn,
    infoData,
    perPage,
    setPerPage,
    todayFa,
    search,
    setSearch,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    searchHandler,
  } = usePackageSales();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Card className="px-4 py-6 mt-6 overflow-visible">
        <CardHeader className="flex flex-col lg:flex-row justify-between p-0 mb-6 text-asiatech-gray-800">
          <div className="flex gap-2">
            <ServerIcon className="w-6 h-6 ml-2" />
            <span className="font-extrabold text-base">گزارش فروش پکیج ها</span>
          </div>
          <div className="max-lg:w-full flex flex-col lg:flex-row gap-2 mt-4">
            <button
              disabled={loading}
              onClick={() => {
                onOpen();
              }}
              className={`max-lg:w-full text-asiatech-blue-902 border border-asiatech-blue-902 px-4 rounded-lg h-10 flex items-center justify-center ml-2
              ${loading ? "text-asiatech-darkblue-500 border border-asiatech-darkblue-500" : ""}`}
            >
              جستجو پیشرفته
            </button>
            <Button
              isDisabled={excelDisableBtn}
              className={`max-sm:w-full max-sm:mb-4 flex max-lg:justify-center items-center justify-between lg:ml-2 ${
                excelDisableBtn ? "opacity-25" : ""
              }`}
              // variant="bordered"
              color="primary"
              onClick={() => {
                getExcelReport();
              }}
            >
              <span>خروجی اکسل</span>
            </Button>
          </div>
        </CardHeader>
        <div className="flex flex-col lg:flex-row  gap-6 flex-wrap justify-end items-center mb-4">
          <div className="w-full  text-asiatech-gray-600 text-sm lg:w-3/12 lg:justify-end flex gap2">
            <span className="whitespace-nowrap ">تعداد سطر هر صفحه:</span>
            <Select
              isDisabled={loading}
              onChange={(e: any) => {
                setPerPage(e.target.value);
                if (endDate !== "" && startDate !== "") {
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
            <TableColumn key="date" className="w-40 !rounded-l-none rounded-r-lg !text-right pr-4">
              تاریخ
            </TableColumn>
            <TableColumn key="count" className="w-40 !text-right">
              {" "}
              نوع پکیج
            </TableColumn>
            <TableColumn key="description" className="!rounded-r-none rounded-l-lg !text-right">
              تعداد فروش
            </TableColumn>
          </TableHeader>
          <TableBody
            loadingContent={<Spinner />}
            isLoading={loading}
            emptyContent={loading ? " " : <EmptyState />}
          >
            {tableData &&
              tableData?.map((data: IPackageSales, index: number) => {
                return (
                  <TableRow className="bordertabel" key={index}>
                    <TableCell className="!text-right pr-4">{data.date}</TableCell>
                    <TableCell className="!text-right">{data.name}</TableCell>
                    <TableCell className="!text-right">{data.count}</TableCell>
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
        </div>
      </Card>
    </>
  );
};
export default PackageSales;