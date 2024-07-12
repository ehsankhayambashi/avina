import { DatePickerIcon } from "@/components/DatePickerIcon";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { Key } from "react";
import persian from "react-date-object/calendars/persian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import { DateObject } from "react-multi-date-picker";
import { IAdvancedSearchModal } from "../interfaces";

const AdvancedSearchModal = ({
  isOpen,
  searchData,
  setSearchData,
  page,
  perPage,
  searchBtnHandler,
  disableBtn,
  setOpen,
}: IAdvancedSearchModal) => {
  return (
    <>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        hideCloseButton={true}
        size="lg"
        placement="center"
        className="max-sm:mx-4 overflow-visible"
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1 text-asiatech-gray-900">
            جستجوی پیشرفته
          </ModalHeader>
          <ModalBody className="w-full ">
            <div className="w-0 h-0 opacity-0">
              <Button></Button>
            </div>
            <div className="flex max-sm:flex-col gap-4">
              <div className="w-full">
                <label className="text-asiatech-gray-700 ">از تاریخ</label>
                <DatePickerIcon
                  portal={false}
                  value={searchData.start_date}
                  onFocusedDateChange={(e: any) => {
                    setSearchData({
                      ...searchData,
                      start_date: new DateObject(e)
                        .convert(persian, gregorian_en)
                        .format("YYYY-MM-DD 00:00:00"),
                    });
                  }}
                />
              </div>
              <div className="w-full">
                <label className="text-asiatech-gray-700 ">تا تاریخ</label>
                <DatePickerIcon
                  portal={false}
                  value={searchData.end_date}
                  onFocusedDateChange={(e: any) => {
                    setSearchData({
                      ...searchData,
                      end_date: new DateObject(e)
                        .convert(persian, gregorian_en)
                        .format("YYYY-MM-DD 23:59:00"),
                    });
                  }}
                />
              </div>
            </div>

            <div className="w-full sm:w-1/2 sm:pl-2">
              <label className="text-asiatech-gray-700" dir="ltr">
                نوع مشترک
              </label>
              <Select
                items={[]}
                dir="ltr"
                selectedKeys={new Set<Key>([searchData.type])}
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
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  setSearchData({
                    ...searchData,
                    type: e.target.value,
                  });
                }}
              >
                <SelectItem value={"new"} key={"new"}>
                  مشترکین جدید
                </SelectItem>
                <SelectItem value={"old"} key={"old"}>
                  مشترکین تمدیدی
                </SelectItem>
              </Select>
            </div>
          </ModalBody>
          <ModalFooter className="flex flex-wrap">
            <button
              disabled={
                disableBtn ||
                (searchData.end_date === "" &&
                  searchData.start_date === "" &&
                  searchData.type === "")
              }
              onClick={() => {
                searchBtnHandler(page, perPage);
              }}
              className={`max-sm:w-full text-white bg-asiatech-blue-902 px-4 rounded-lg h-10 flex items-center justify-center ${
                disableBtn ||
                searchData.end_date === "" ||
                searchData.start_date === "" ||
                searchData.type === ""
                  ? "opacity-25"
                  : ""
              }`}
            >
              جستجو{" "}
            </button>
            <Button
              onClick={() => {
                setOpen(false);
              }}
              color="default"
              className="text-white bg-asiatech-gray-600 max-sm:w-full"
            >
              بازگشت
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AdvancedSearchModal;
