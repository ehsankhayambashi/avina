import CommentIcon from "@/assets/icons/CommentIcon";
import SearchNewIcon from "@/assets/icons/SearchNewIcon";
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
} from "@nextui-org/react";
import { Key } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { DateObject } from "react-multi-date-picker";
import { useHighestAmountOfServerCreation } from "../hooks/useHighestAmountOfServerCreation";
import { IHighestServerCreation } from "../interface";
import AdvancedSearchModal from "./AdvancedSearchModal";

const HighestAmountOfServerCreation = () => {
  const {
    page,
    setPage,
    perPage,
    setPerPage,
    searchData,
    setSearchData,
    tableData,
    setTableData,
    totalPage,
    setTotalPage,
    disableSearchBtn,
    getHighServerCreationHandler,
    getExcelDataHandler,
    disableExcelBtn,
    openSearchModal,
    setOpenSearchModal,
    EnterKeyHandler,
    setSearchInput,
  } = useHighestAmountOfServerCreation();

  return (
    <Card className="px-4 py-6 mt-6 overflow-visible">
      <CardHeader className="flex max-sm:flex-wrap justify-between p-0 mb-6 text-asiatech-gray-800">
        <p className="flex">
          <CommentIcon className="w-6 h-6 ml-2" />
          <span className="font-extrabold text-base"> بیشترین تعداد ساخت ماشین</span>
        </p>
        <div className="flex max-sm:flex-wrap max-sm:w-full max-sm:mt-4">
          <Button
            className={`max-sm:w-full max-sm:mb-2 flex items-center justify-center sm:ml-2`}
            variant="bordered"
            color="primary"
            onClick={() => {
              setOpenSearchModal(true);
            }}
          >
            <span> جستجوی پیشرفته</span>
          </Button>
          <Button
            isDisabled={tableData.length < 1 || disableExcelBtn}
            className={`max-sm:w-full max-sm:mb-2 flex items-center justify-center sm:ml-2`}
            color="primary"
            onClick={() => {
              getExcelDataHandler();
            }}
          >
            <span>خروجی اکسل</span>
          </Button>
        </div>
      </CardHeader>

      <div className="w-full flex max-sm:flex-wrap justify-between items-center text-left  text-asiatech-gray-600 text-sm">
        <div className="relative w-full sm:w-9/12">
          {/* <Input
              variant="bordered"
              isDisabled={loading}
              type="text"
              placeholder="جست و جو با شناسه کاربری"
              className="w-full mt-2"
              value={search}
              startContent={<SearchNewIcon className="w-6 h-6" />}
              classNames={{
                input: "placeholder:text-asiatech-gray-500",
                inputWrapper: [
                  "backdrop-saturate-200",
                  "focus-within:!border-asiatech-gray-500 !border-1",
                  "inputWrapper: h-[40px]",
                ],
              }}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSearch(e.target.value);
              }}
              onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                if (e.key === "Enter") {
                  searchHandler(1);
                }
              }}
            /> */}

          {/* <SearchIcon className="w-3 h-3 absolute right-1 top-3.5" /> */}
          <SearchNewIcon className="w-6 h-6 absolute right-4 top-2" />
          <input
            className="w-full border h-10 text-asiatech-gray-900  rounded-2xl focus:outline-none pr-12 placeholder:text-asiatech-gray-500"
            placeholder="جست و جو با شناسه کاربری"
            onChange={(e: any) => {
              setPage(1);
              setSearchInput(e.target.value);
            }}
            onKeyDown={EnterKeyHandler}
          />
        </div>
        <div className="max-sm:mt-2">
          <span className="whitespace-nowrap">تعداد سطر هر صفحه:</span>
          <Select
            isDisabled={disableSearchBtn}
            onChange={(e: any) => {
              setPage(1);
              setPerPage(e.target.value);
              getHighServerCreationHandler(1, e.target.value);
            }}
            selectedKeys={new Set<Key>([String(perPage)])}
            classNames={{
              base: "h-6 w-[70px] mr-1",
              mainWrapper: "h-6 w-[70px]",
              trigger: "h-6 bg-tranparent shadow-none border-spacing-0 rounded-lg",
              value: "text-right",
              selectorIcon: "right-[unset] left-2",
            }}
          >
            <SelectItem value="10" key="10">
              10
            </SelectItem>
            <SelectItem value="25" key="25">
              25
            </SelectItem>
            <SelectItem value="50" key="50">
              50
            </SelectItem>
          </Select>
        </div>
      </div>
      {tableData && tableData?.length > 0 && (
        <div className="flex max-sm:flex-col text-right text-asiatech-gray-800 mt-4">
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
          </p>
        </div>
      )}
      <Table
        aria-label="reasons table"
        shadow="none"
        isHeaderSticky
        className="!p-0 mt-6 overflow-x-auto"
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
          <TableColumn key="count"> شناسه کاربر </TableColumn>
          <TableColumn key="date"> نام </TableColumn>
          <TableColumn key="type">نوع کاربر</TableColumn>
          <TableColumn key="mobile"> موبایل </TableColumn>
          <TableColumn key="register-date"> تاریخ ثبت نام </TableColumn>
          <TableColumn key="count">تعداد ماشین ساخته شده</TableColumn>
          <TableColumn key="description" className="!rounded-r-none rounded-l-lg">
            پکیج ها
          </TableColumn>
        </TableHeader>
        <TableBody
          loadingContent={<Spinner />}
          isLoading={disableSearchBtn}
          emptyContent={disableSearchBtn ? " " : <EmptyState />}
        >
          {tableData &&
            tableData.map((i: IHighestServerCreation, index: any) => {
              return (
                <TableRow className="bordertabel" key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{i.user.id}</TableCell>
                  <TableCell>
                    {i.user.user_profile.company_name
                      ? ` ${i.user.user_profile.agent_first_name} ${i.user.user_profile.agent_last_name}(${i.user.user_profile.company_name})`
                      : `${i.user.user_profile.first_name} ${i.user.user_profile.last_name}`}
                  </TableCell>
                  <TableCell>{i.user.user_profile.company_name ? "حقوقی" : "حقیقی"}</TableCell>
                  <TableCell>{i.user.user_profile.mobile_number}</TableCell>
                  <TableCell>
                    {(new DateObject(i.user.created_at.split("T")[0]) as any)
                      .convert(persian, persian_fa)
                      .format("YYYY/MM/DD")}
                  </TableCell>
                  <TableCell>{i.vcenter_count}</TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      {i.packages.map((z: any, index: number) => {
                        return (
                          <span className="mb-1" key={index}>
                            {z.instance_name} ({z.package_count})
                          </span>
                        );
                      })}
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
      <div className="mt-10 w-full flex flex-wrap justify-start items-center">
        {!disableSearchBtn && totalPage > 1 && (
          <Pagination
            isDisabled={disableSearchBtn}
            isCompact
            showControls
            classNames={{ next: "rotate-180", prev: "rotate-180" }}
            total={totalPage}
            initialPage={page}
            onChange={(e: any) => {
              setPage(e);
              getHighServerCreationHandler(e, perPage);
            }}
          />
        )}
      </div>

      <AdvancedSearchModal
        disableSearchBtn={disableSearchBtn}
        isOpen={openSearchModal}
        setPage={setPage}
        page={page}
        perPage={perPage}
        searchData={searchData}
        setOpen={setOpenSearchModal}
        setSearchData={setSearchData}
        searchBtnHandler={getHighServerCreationHandler}
      />
    </Card>
  );
};
export default HighestAmountOfServerCreation;
