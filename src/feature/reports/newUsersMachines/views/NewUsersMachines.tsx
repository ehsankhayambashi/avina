import CommentIcon from "@/assets/icons/CommentIcon";
import EmptyState from "@/components/emptyState/EmptyState";
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
import { useNewUsersMachines } from "../hooks/useNewUsersMachines";
import SearchModal from "./SearchModal";

export default function NewUsersMachines() {
  const {
    Searching,
    newUserMachineData,
    setNewUserMachineData,
    page,
    setPage,
    pageCount,
    setPageCount,
    lastPage,
    isLoading,
    searchDataHandler,
    searchData,
    setSearchData,
  } = useNewUsersMachines();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  console.log("injaaaaaaaaaaaaa");
  return (
    <>
      <Card className="px-4 py-6 mb-8 overflow-visible">
        <CardHeader className="w-full flex flex-wrap md:justify-between p-0 min-md:mb-6 text-asiatech-gray-600">
          <div className="flex gap-2">
            <CommentIcon className="w-6 h-6 ml-2" />
            <span className="font-extrabold text-base">
              گزارش تعداد ماشین های فعال و غیر فعال مشترکین
            </span>
          </div>
          <div className="max-lg:w-full flex flex-col lg:flex-row gap-2 mt-4">
            <button
              disabled={isLoading}
              onClick={() => {
                onOpen();
              }}
              className={`max-lg:w-full text-asiatech-blue-902 border border-asiatech-blue-902 px-4 rounded-lg h-10 flex items-center justify-center ml-2
              ${isLoading ? "text-asiatech-darkblue-500 border border-asiatech-darkblue-500" : ""}`}
            >
              جستجو پیشرفته
            </button>
          </div>
        </CardHeader>
        <div>
          {/* <div className="flex justify-between"> */}
          {/* <div className="w-full flex gap-6 flex-nowrap max-sm:flex-wrap items-end mt-4">
            <div className=" max-sm:w-full">
              <label className="text-asiatech-gray-700 font-bold">از تاریخ</label>
              <DatePickerIcon
                portal={false}
                value={new DateObject(searchData.start_date).convert(persian, persian_fa).format()}
                onChange={(e: any) => {
                  let date = new DateObject(e)
                    .convert(gregorian, gregorian_en)
                    .format("YYYY-MM-DD");
                  setSearchData({
                    ...searchData,
                    start_date: date,
                  });
                }}
              />
            </div>
            <div className=" max-sm:w-full">
              <label className="text-asiatech-gray-700 font-bold">تا تاریخ</label>
              <DatePickerIcon
                portal={false}
                value={new DateObject(searchData.end_date).convert(persian, persian_fa).format()}
                onChange={(e: any) => {
                  let date = new DateObject(e)
                    .convert(gregorian, gregorian_en)
                    .format("YYYY-MM-DD");
                  setSearchData({
                    ...searchData,
                    end_date: date,
                  });
                }}
              />
            </div>
            <div className="w-[15%] max-sm:w-full">
              <label className="text-asiatech-gray-700 font-bold">وضعیت پروفایل</label>
              <Select
                onChange={(e: any) => {
                  if (e.target.value) {
                    setSearchData({ ...searchData, status: e.target.value });
                  }
                }}
                selectedKeys={new Set<Key>([searchData.status])}
                dir="ltr"
                className="w-full mt-2 h-10"
                variant="bordered"
                label={""}
                placeholder="انتخاب کنید"
                classNames={{
                  mainWrapper: "h-10 p-0",
                  value: "pt-0 text-right",
                  innerWrapper: "w-full",
                  trigger: "h-10 min-h-10",
                  selectorIcon: "right-[unset]",
                  label:
                    "absolute -right-3 top-4 font-medium rtl text-asiatech-gray-700 whitespace-nowrap",
                }}
              >
                <SelectItem value="all" key="all">
                  همه
                </SelectItem>
                <SelectItem value="completed0" key="completed">
                  تکمیل
                </SelectItem>
                <SelectItem value="not-completed0" key="not-completed">
                  ناقص
                </SelectItem>
              </Select>
            </div>
            <div className="w-[15%] max-sm:w-full">
              <label className="text-asiatech-gray-700 font-bold">دمو</label>
              <Select
                onChange={(e: any) => {
                  if (e.target.value) {
                    // if (e.target.value !== "all") {
                    setSearchData({ ...searchData, has_demo: e.target.value });
                    // } else {
                    //   delete searchData.has_demo;
                    // }
                  }
                }}
                selectedKeys={new Set<Key>([searchData.has_demo])}
                dir="ltr"
                className="w-full min-w-36 mt-2 h-10"
                variant="bordered"
                label={""}
                placeholder="انتخاب کنید"
                classNames={{
                  mainWrapper: "h-10 p-0 min-w-36",
                  value: "pt-0 text-right min-w-36",
                  innerWrapper: "w-full min-w-36",
                  trigger: "h-10 min-h-10 min-w-36",
                  selectorIcon: "right-[unset]",
                  label:
                    "absolute -right-3 top-4 font-medium rtl text-asiatech-gray-700 whitespace-nowrap",
                }}
              >
                <SelectItem value="all" key="all">
                  همه
                </SelectItem>
                <SelectItem value="true" key="true">
                  ماشین دمو دارد
                </SelectItem>
                <SelectItem value="false" key="false">
                  ماشین دمو ندارد
                </SelectItem>
              </Select>
            </div>
            <div className=" max-sm:w-full flex items-end">
              <Button
                type="button"
                color="primary"
                isDisabled={isLoading}
                onClick={() => {
                  Searching(searchData, setSearchData);
                }}
                className="w-full"
              >
                {isLoading ? "در حال بارگذاری ..." : "جستجو"}
              </Button>
            </div>
          </div> */}
          {/* </div> */}

          <div className="flex justify-end max-sm:w-full items-center text-asiatech-gray-600 text-sm max-md:my-4 my-8  ">
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
              <TableColumn key="name" className="!rounded-l-none rounded-r-lg">
                نام و نام خانوادگی
              </TableColumn>
              <TableColumn key="number">نام کاربری</TableColumn>
              <TableColumn key="title">تاریخ ثبت نام</TableColumn>
              <TableColumn key="amount">ماشین دمو</TableColumn>
              <TableColumn key="serialDate">وضعیت پروفایل</TableColumn>

              <TableColumn key="serialNumber">ماشین‌های فعال</TableColumn>
              <TableColumn key="traceNumber" className="!rounded-r-none rounded-l-lg">
                ماشین‌های غیرفعال
              </TableColumn>
            </TableHeader>
            <TableBody
              // loadingContent={<Spinner label="Loading..." />}
              // emptyContent={"موردی برای نمایش وجود ندارد."}
              loadingContent={<Spinner />}
              isLoading={isLoading}
              emptyContent={isLoading ? " " : <EmptyState />}
            >
              {newUserMachineData &&
                newUserMachineData.map((i: any, index: number) => {
                  console.log(i.user_profile);
                  return (
                    <TableRow className="bordertabel" key={index}>
                      <TableCell>
                        {i.user_profile?.first_name || i.user_profile?.agent_first_name}{" "}
                        {i.user_profile?.last_name || i.user_profile?.agent_last_name}{" "}
                        {i.user_profile?.company_name
                          ? "(" + i.user_profile?.company_name + ")"
                          : ""}
                      </TableCell>
                      <TableCell>{i?.id}</TableCell>
                      <TableCell>
                        {(new DateObject(i?.user_profile?.created_at) as any)
                          .convert(persian, persian_fa)
                          .format("HH:MM:SS YYYY/MM/DD")}
                      </TableCell>
                      <TableCell>{i?.has_demo ? "فعال کرده" : "فعال نکرده"}</TableCell>
                      <TableCell>{i?.status === "not-completed" ? "ناقص" : "تکمیل"}</TableCell>

                      <TableCell>{i?.active_count}</TableCell>
                      <TableCell>{i?.other_count}</TableCell>
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
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          searchData={searchData}
          setSearchData={setSearchData}
          isLoading={isLoading}
          onClick={() => {
            setPage(1);
            Searching(searchData, setSearchData);
            // searchBtnHandler(page, perPage);
          }}
        />
      </Card>
    </>
  );
}
