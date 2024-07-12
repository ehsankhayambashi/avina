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
import { IsearchModal } from "../interface";

export default function SearchModal({
  isOpen,
  getValues,
  setValue,
  onOpenChange,
  onClick,
}: IsearchModal) {
  console.log(getValues());
  console.log(new DateObject(getValues("start_date")).convert(persian, persian_fa).format());
  const startDate = getValues("start_date")
    ? new DateObject(getValues("start_date")).convert(persian, persian_fa).format()
    : "";
  const endDate = getValues("end_date")
    ? new DateObject(getValues("end_date")).convert(persian, persian_fa).format()
    : "";
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
              <div className="grid grid-cols-2 gap-4">
                <div className="w-full md:w-60">
                  <label className="text-asiatech-gray-700" dir="ltr">
                    نام
                  </label>
                  <Input
                    variant="bordered"
                    type="text"
                    placeholder="نام | نام خانوادگی"
                    className="w-full mt-2"
                    value={getValues("name")}
                    classNames={{
                      input: "placeholder:text-asiatech-gray-500",
                      inputWrapper: [
                        "backdrop-saturate-200",
                        "focus-within:!border-asiatech-gray-500 !border-1",
                        "inputWrapper: h-[40px]",
                      ],
                    }}
                    onChange={(e: any) => {
                      setValue("name", e.target.value, { shouldValidate: true });
                    }}
                  />
                </div>
                <div className="w-full md:w-60">
                  <label className="text-asiatech-gray-700" dir="ltr">
                    شماره فاکتور
                  </label>
                  <Input
                    variant="bordered"
                    type="text"
                    placeholder="cloud/1403/104025"
                    className="w-full mt-2"
                    value={getValues("serial")}
                    classNames={{
                      input: "placeholder:text-asiatech-gray-500",
                      inputWrapper: [
                        "backdrop-saturate-200",
                        "focus-within:!border-asiatech-gray-500 !border-1",
                        "inputWrapper: h-[40px]",
                      ],
                    }}
                    onChange={(e: any) => {
                      setValue("serial", e.target.value, { shouldValidate: true });
                    }}
                  />
                </div>
                <div className="w-full md:w-60">
                  <label className="text-asiatech-gray-700" dir="ltr">
                    شناسه پرداخت
                  </label>
                  <Input
                    variant="bordered"
                    type="text"
                    placeholder="171723495490"
                    className="w-full mt-2"
                    value={getValues("traceNumber")}
                    classNames={{
                      input: "placeholder:text-asiatech-gray-500",
                      inputWrapper: [
                        "backdrop-saturate-200",
                        "focus-within:!border-asiatech-gray-500 !border-1",
                        "inputWrapper: h-[40px]",
                      ],
                    }}
                    onChange={(e: any) => {
                      setValue("traceNumber", e.target.value, { shouldValidate: true });
                    }}
                  />
                </div>
                <div className="w-full md:w-60">
                  <label className="text-asiatech-gray-700" dir="ltr">
                    شناسه کاربر
                  </label>
                  <Input
                    variant="bordered"
                    type="text"
                    placeholder="75015"
                    className="w-full mt-2"
                    value={getValues("userId")}
                    classNames={{
                      input: "placeholder:text-asiatech-gray-500",
                      inputWrapper: [
                        "backdrop-saturate-200",
                        "focus-within:!border-asiatech-gray-500 !border-1",
                        "inputWrapper: h-[40px]",
                      ],
                    }}
                    onChange={(e: any) => {
                      setValue("userId", e.target.value, { shouldValidate: true });
                    }}
                  />
                </div>
                <div className="w-full md:w-60">
                  <label className="text-asiatech-gray-700 font-bold">از تاریخ</label>
                  <DatePickerIcon
                    placeHolder="لطفا تاریخ را انتخاب کنید"
                    portal={false}
                    value={startDate}
                    onChange={(e: any) => {
                      let date = new DateObject(e)
                        .convert(gregorian, gregorian_en)
                        .format("YYYY-MM-DD");
                      setValue("start_date", date, { shouldValidate: true });
                    }}
                  />
                </div>
                <div className="w-full md:w-60">
                  <label className="text-asiatech-gray-700 font-bold">تا تاریخ</label>
                  <DatePickerIcon
                    placeHolder="لطفا تاریخ را انتخاب کنید"
                    portal={false}
                    value={endDate}
                    onChange={(e: any) => {
                      let date = new DateObject(e)
                        .convert(gregorian, gregorian_en)
                        .format("YYYY-MM-DD");
                      setValue("end_date", date, { shouldValidate: true });
                    }}
                  />
                </div>
              </div>
              {/* <div className="w-full md:w-60 flex items-end">
              <Button
                  type="button"
                  color="primary"
                  isDisabled={isLoading}
                  onClick={(onClick}>
                { "جستجو"}
              </Button>
            </div> */}
            </ModalBody>
            <ModalFooter>
              <Button
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
