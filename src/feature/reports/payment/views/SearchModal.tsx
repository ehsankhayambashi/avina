import { DatePickerIcon } from "@/components/DatePickerIcon";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import gregorian from "react-date-object/calendars/gregorian";
import persian from "react-date-object/calendars/persian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import persian_fa from "react-date-object/locales/persian_fa";
import { DateObject } from "react-multi-date-picker";

export default function SearchModal({
  isOpen,
  onClose,
  searchData,
  setSearchData,
  onOpenChange,
  Searching,
}: any) {
  return (
    <Modal
      backdrop="opaque"
      onOpenChange={onOpenChange}
      isOpen={isOpen}
      hideCloseButton={true}
      //   size="2xl"
      placement="center"
      scrollBehavior="inside"
      //   className="max-sm:mx-4"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-3 text-asiatech-gray-900">
              جستجوی پیشرفته
            </ModalHeader>
            <ModalBody>
              <div className="w-full flex gap-3 ">
                <div className="w-full max-sm:w-full">
                  <label className="text-asiatech-gray-800 font-bold" dir="ltr">
                    نام
                  </label>
                  <Input
                    variant="bordered"
                    type="text"
                    placeholder="نام | نام خانوادگی"
                    className="w-full mt-2"
                    value={searchData?.name}
                    classNames={{
                      input: "placeholder:text-asiatech-gray-500",
                      inputWrapper: [
                        "backdrop-saturate-200",
                        "focus-within:!border-asiatech-gray-500 !border-1",
                        "inputWrapper: h-[40px]",
                      ],
                    }}
                    onChange={(e: any) => {
                      setSearchData((prev: any) => ({
                        ...prev,
                        name: e.target.value,
                      }));
                    }}
                  />
                </div>
                <div className="w-full max-sm:w-full">
                  <label className="text-asiatech-gray-800 font-bold" dir="ltr">
                    شماره فاکتور
                  </label>
                  <Input
                    variant="bordered"
                    type="text"
                    placeholder="cloud/1403/110234"
                    className="w-full mt-2"
                    value={searchData?.serial}
                    classNames={{
                      input: "placeholder:text-asiatech-gray-500",
                      inputWrapper: [
                        "backdrop-saturate-200",
                        "focus-within:!border-asiatech-gray-500 !border-1",
                        "inputWrapper: h-[40px]",
                      ],
                    }}
                    onChange={(e: any) => {
                      setSearchData((prev: any) => ({
                        ...prev,
                        serial: e.target.value,
                      }));
                    }}
                  />
                </div>
              </div>
              <div className="w-full flex gap-3">
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
              </div>
              <div className="w-1/2 max-sm:w-full ml-3">
                <div className="  max-sm:w-full">
                  <label className="text-asiatech-gray-800 font-bold" dir="ltr">
                    کد رهگیری
                  </label>
                  <Input
                    variant="bordered"
                    type="text"
                    placeholder="379670"
                    className="w-full mt-2"
                    value={searchData?.["trace-no"]}
                    classNames={{
                      input: "placeholder:text-asiatech-gray-500",
                      inputWrapper: [
                        "backdrop-saturate-200",
                        "focus-within:!border-asiatech-gray-500 !border-1",
                        "inputWrapper: h-[40px]",
                      ],
                    }}
                    onChange={(e: any) => {
                      setSearchData((prev: any) => ({
                        ...prev,
                        "trace-no": e.target.value,
                      }));
                    }}
                  />
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                className="text-white "
                onClick={() => {
                  // onClick();
                  Searching(searchData, setSearchData);
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
