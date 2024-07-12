import SearchNewIcon from "@/assets/icons/SearchNewIcon";
import TicketIcon from "@/assets/icons/TicketIcon";
import EmptyState from "@/components/emptyState/EmptyState";
import {
  Button,
  Card,
  Input,
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
import { getTicketExcel, getTicketList } from "../helper/controller";
import { useMostTickets } from "../hooks/useMostTickets";
import SearchModal from "./SearchModal";

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
    selectedKeys,
    setSelectedKeys,
    search,
    setSearch,
    searchHandler,
    searchPage,
  } = useMostTickets();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <Card className="px-4 py-6 shadow-one mt-6">
      <div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between">
            <div className="flex">
              <TicketIcon className="w-6 h-6 ml-2" />
              <span className="font-extrabold text-base text-asiatech-darkblue-502">
                گزارش مشترکین با بیشترین تعداد تیکت ثبت شده
              </span>
            </div>
            <div className="max-lg:w-full flex flex-col md:flex-row gap-2">
              <button
                disabled={isLoading}
                onClick={() => {
                  onOpen();
                }}
                className={`max-sm:w-full text-asiatech-blue-902 border border-asiatech-blue-902 px-4 rounded-lg h-10 flex items-center justify-center ml-2
                ${isLoading ? "text-asiatech-darkblue-500  border-asiatech-darkblue-500" : ""}`}
              >
                جستجو پیشرفته
              </button>
              <Button
                isDisabled={isLoading}
                color="primary"
                onClick={() =>
                  getTicketExcel(setIsLoading, getValues("start_date"), getValues("end_date"))
                }
              >
                خروجی اکسل
              </Button>
            </div>
          </div>
          <div className="w-full flex gap-6 flex-wrap justify-between items-center">
            <div className=" w-full lg:w-7/12">
              <Input
                variant="bordered"
                type="text"
                isDisabled={isLoading}
                placeholder="جست و جو با نام کاربری"
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
                    if (search) {
                      searchHandler();
                    }
                  }
                }}
              />
            </div>
            <div className="self-end flex text-asiatech-gray-600  text-sm">
              <span className=" whitespace-nowrap">تعداد سطر هر صفحه:</span>
              <Select
                isDisabled={isLoading}
                onChange={(e: any) => {
                  setPageSize(e.target.value);
                }}
                selectedKeys={new Set<Key>([String(pageSize)])}
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
            <div className="flex max-sm:flex-col text-right text-asiatech-gray-800 ">
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
              </p>
            </div>
          )}
          <Table
            aria-label="domain table"
            shadow="none"
            isHeaderSticky
            className="!p-0 "
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
              <TableColumn
                className="w-60 !rounded-l-none !rounded-r-14 !text-right border-none pr-4 "
                key="name"
              >
                نام
              </TableColumn>
              <TableColumn key="username" className="w-40 !text-right">
                نام کاربری
              </TableColumn>
              <TableColumn
                className="!rounded-r-none rounded-l-14 flex  !text-right  items-center"
                key="ticket-num"
              >
                تعداد تیکت
              </TableColumn>
            </TableHeader>
            <TableBody
              loadingContent={<Spinner />}
              isLoading={isLoading}
              emptyContent={isLoading ? " " : <EmptyState />}
            >
              {tableData &&
                tableData?.map((item: any, index) => {
                  return (
                    <TableRow className="text-right bordertabel" key={item?.id}>
                      <TableCell className="!text-right p-4">{`${item?.user_profile?.first_name} ${item?.user_profile?.last_name}`}</TableCell>
                      <TableCell className="!text-right p-4">{`${item?.id}`}</TableCell>
                      <TableCell className="!text-right p-4">{`${item?.user_tickets_count}`}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>

          <div className="mt-10 w-full flex justify-start xl:justify-start ">
            {!isLoading && totalItems > 1 ? (
              <Pagination
                isCompact
                showControls
                classNames={{ next: "rotate-180", prev: "rotate-180" }}
                total={totalItems}
                page={page}
                onChange={(e) => {
                  setPage(e);
                  searchPage(e);
                }}
              />
            ) : (
              ""
            )}
          </div>
        </div>
        <SearchModal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          getValues={getValues}
          setValue={setValue}
          onClick={() => {
            setTableData([]);
            setPage(1);
            getTicketList(
              `start_date=${getValues("start_date")}&end_date=${getValues(
                "end_date"
              )}&paginate=true&page=1&per_page=${pageSize}`,
              setTableData,
              setTotalItems,
              setIsLoading
            );
          }}
        />
      </div>
    </Card>
  );
}

export default Index;
