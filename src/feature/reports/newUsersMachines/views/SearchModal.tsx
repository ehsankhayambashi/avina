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
import gregorian from "react-date-object/calendars/gregorian";
import persian from "react-date-object/calendars/persian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import persian_fa from "react-date-object/locales/persian_fa";
import { DateObject } from "react-multi-date-picker";
import { IsearchModal } from "../interfaces";

export default function SearchModal({
  isOpen,
  searchData,
  setSearchData,
  onOpenChange,
  onClick,
  isLoading,
}: IsearchModal) {
  console.log(searchData);
  return (
    <Modal
      backdrop="opaque"
      onOpenChange={onOpenChange}
      isOpen={isOpen}
      hideCloseButton={true}
      size="xl"
      placement="center"
      scrollBehavior="inside"
      //   className="max-sm:mx-4"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-asiatech-gray-900">
              جستجوی پیشرفته
            </ModalHeader>
            <ModalBody>
              <Button className="opacity-0 w-0 h-0" />
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className=" max-sm:w-full">
                  <label className="text-asiatech-gray-700 font-bold">از تاریخ</label>
                  <DatePickerIcon
                    portal={false}
                    value={new DateObject(searchData.start_date)
                      .convert(persian, persian_fa)
                      .format()}
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
                    value={new DateObject(searchData.end_date)
                      .convert(persian, persian_fa)
                      .format()}
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
                <div className="w-full max-sm:w-full">
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
                <div className="w-full max-sm:w-full">
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
                    selectedKeys={
                      searchData.has_demo ? new Set<Key>([searchData.has_demo]) : ["all"]
                    }
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
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                isDisabled={isLoading}
                color="primary"
                className="text-white "
                onClick={() => {
                  onClick();
                  onClose();
                }}
              >
                جستجو
              </Button>
              <Button color="default" className="text-white bg-asiatech-gray-600" onClick={onClose}>
                بازگشت
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
