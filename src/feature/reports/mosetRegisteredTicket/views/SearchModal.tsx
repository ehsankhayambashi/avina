import { DatePickerIcon } from "@/components/DatePickerIcon";
import {
  Button,
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
            <ModalHeader className="flex flex-col gap-1 text-asiatech-gray-900">
              جستجوی پیشرفته
            </ModalHeader>
            <ModalBody>
              <Button className="opacity-0 w-0 h-0" />
              <div className="w-full flex gap-3">
                {/* <div className="w-full opacity-0">
                </div> */}
                <div className="w-full">
                  <label className="text-asiatech-gray-700 ">از تاریخ</label>
                  <DatePickerIcon
                    portal={false}
                    value={new DateObject(getValues("start_date"))
                      .convert(persian, persian_fa)
                      .format()}
                    onChange={(e: any) => {
                      let date = new DateObject(e)
                        .convert(gregorian, gregorian_en)
                        .format("YYYY-MM-DD");
                      setValue("start_date", date, { shouldValidate: true });
                    }}
                  />
                </div>
                <div className="w-full">
                  <label className="text-asiatech-gray-700 ">تا تاریخ</label>
                  <DatePickerIcon
                    portal={false}
                    value={new DateObject(getValues("end_date"))
                      .convert(persian, persian_fa)
                      .format()}
                    onChange={(e: any) => {
                      let date = new DateObject(e)
                        .convert(gregorian, gregorian_en)
                        .format("YYYY-MM-DD");
                      setValue("end_date", date, { shouldValidate: true });
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
