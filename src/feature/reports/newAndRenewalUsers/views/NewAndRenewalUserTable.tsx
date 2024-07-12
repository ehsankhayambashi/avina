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

import CommentIcon from "@/assets/icons/CommentIcon";
import UserIcon from "@/assets/icons/UserIcon";
import WalletIcon from "@/assets/icons/WalletIcon";
import EmptyState from "@/components/emptyState/EmptyState";
import NumberSeparator from "@/utils/NumberSeprator";
import { Key } from "react";
import { useNewAndRenewalUser } from "../hooks/useNewAndRenewalUser";
import { ITableData } from "../interfaces";
import AdvancedSearchModal from "./AdvancedSearchModal";

const NewAndRenewalUserTable = () => {
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
    getExcelReport,
    excelDisableBtn,
    infoData,
    perPage,
    setPerPage,
    setOpenSearchModal,
    openSearchModal,
  } = useNewAndRenewalUser();

  return (
    <>
      <Card className="px-4 py-6 mt-6 overflow-visible">
        <CardHeader className="flex max-sm:flex-wrap justify-between p-0 mb-6 text-asiatech-gray-800">
          <p className="flex">
            <CommentIcon className="w-6 h-6 ml-2" />
            <span className="font-extrabold text-base">مشترکین جدید و تمدیدی</span>
          </p>
          <div className="flex max-sm:flex-wrap max-sm:w-full max-sm:mt-4">
            <Button
              isDisabled={loading}
              className={`max-sm:w-full max-sm:mb-2 flex items-center justify-center sm:ml-2`}
              variant="bordered"
              color="primary"
              onClick={() => {
                setPage(1);
                setOpenSearchModal(true);
              }}
            >
              <span> جستجوی پیشرفته</span>
            </Button>
            <Button
              isDisabled={tableData.length < 1 || excelDisableBtn}
              className={`max-sm:w-full max-sm:mb-2 flex items-center justify-center`}
              color="primary"
              onClick={() => {
                getExcelReport();
              }}
            >
              <span>خروجی اکسل</span>
            </Button>
          </div>
        </CardHeader>

        {tableData && tableData?.length > 0 && (
          <div className="w-full flex flex-wrap items-center">
            <div className="w-full sm:w-1/2 max-sm:mb-2 sm:pl-2">
              <div className="h-[72px] flex max-sm:flex justify-between items-center border rounded-xl p-4 relative">
                <WalletIcon className="absolute left-2 w-14 h-1w-14 text-asiatech-green-300 opacity-30" />
                <p className="flex items-center">
                  <span className="w-10 h-10 flex items-center justify-center rounded-50 bg-asiatech-green-300">
                    <WalletIcon className="w-6 h-6 text-asiatech-green-901" />
                  </span>
                  <span className="text-sm sm:text-lg font-bold text-asiatech-gray-800 mr-2">
                    مجموع شارژ
                  </span>
                </p>
                <p className="text-asiatech-gray-600 font-bold max-sm:text-sm">
                  {NumberSeparator(infoData["charge-total"])} ریال
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 max-sm:mb-2 sm:pr-2">
              <div className="h-[72px] flex max-sm:flex justify-between items-center border rounded-xl p-4 relative">
                <UserIcon className="absolute left-2 w-14 h-1w-14 text-asiatech-green-300 opacity-30" />
                <p className="flex items-center">
                  <span className="w-10 h-10 flex items-center justify-center rounded-50 bg-asiatech-blue-301">
                    <UserIcon className="w-6 h-6 text-asiatech-blue-902" />
                  </span>
                  <span className="text-sm sm:text-lg font-bold text-asiatech-gray-800 mr-2">
                    تعداد مشتریان
                  </span>
                </p>
                <p className="text-asiatech-gray-600 font-bold max-sm:text-sm">
                  {NumberSeparator(infoData["count-total"])} نفر
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="w-full flex justify-end items-center text-left  text-asiatech-gray-600 text-sm max-md:my-4 mt-8">
          <span className="whitespace-nowrap">تعداد سطر هر صفحه:</span>
          <Select
            isDisabled={loading}
            onChange={(e: any) => {
              setPerPage(e.target.value);
              if (
                searchData.end_date !== "" &&
                searchData.start_date !== "" &&
                searchData.type !== ""
              ) {
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
        {tableData && tableData?.length > 0 && (
          <div className="flex max-sm:flex-col text-right text-asiatech-gray-800">
            <p>
              ( از تاریخ
              <span className="mx-1 text-asiatech-blue-903" dir="ltr">
                {searchData.start_date.split(" ")[0]}
              </span>
              تا
              <span className="mx-1 text-asiatech-blue-903" dir="ltr">
                {searchData.end_date.split(" ")[0]}
              </span>
              )
            </p>
            <p className="sm:mr-3">
              {searchData.type === "new" ? `(مشترکین جدید)` : `(مشترکین تمدیدی)`}
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
            <TableColumn className="!rounded-l-none rounded-r-lg" key="id">
              #
            </TableColumn>
            <TableColumn key="date"> تاریخ </TableColumn>
            <TableColumn key="count"> تعداد مشتریان</TableColumn>
            <TableColumn key="description" className="!rounded-r-none rounded-l-lg">
              {" "}
              میزان شارژ
            </TableColumn>
          </TableHeader>
          <TableBody
            loadingContent={<Spinner />}
            isLoading={loading}
            emptyContent={loading ? " " : <EmptyState text="لطفا جستجوی پیشرفته را پر کنید." />}
          >
            {tableData &&
              tableData?.map((i: ITableData, index: number) => {
                return (
                  <TableRow className="bordertabel" key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{i?.date}</TableCell>
                    <TableCell>{NumberSeparator(i?.count)}</TableCell>
                    <TableCell>{NumberSeparator(i?.charge)} ریال </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
        <div className="mt-10 w-full flex flex-wrap justify-start items-center">
          {!loading && totalPage > 1 && (
            <Pagination
              isDisabled={loading}
              isCompact
              showControls
              classNames={{ next: "rotate-180", prev: "rotate-180", wrapper: "max-sm:w-full" }}
              total={totalPage}
              initialPage={page}
              onChange={(e: any) => {
                setPage(e);
                searchBtnHandler(e, perPage);
              }}
            />
          )}
        </div>
      </Card>

      <AdvancedSearchModal
        page={page}
        perPage={perPage}
        isOpen={openSearchModal}
        setOpen={setOpenSearchModal}
        disableBtn={disableBtn}
        searchData={searchData}
        setSearchData={setSearchData}
        searchBtnHandler={searchBtnHandler}
      />
    </>
  );
};
export default NewAndRenewalUserTable;
