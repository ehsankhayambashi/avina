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
import { IsearchModal } from "../interfaces";

export default function SearchModal({
  isOpen,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
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
                    placeHolder="تاریخ را انتخاب کنبد"
                    portal={false}
                    value={
                      startDate && new DateObject(startDate).convert(persian, persian_fa).format()
                    }
                    onChange={(e: any) => {
                      let date = new DateObject(e)
                        .convert(gregorian, gregorian_en)
                        .format("YYYY-MM-DD");
                      setStartDate(date);
                    }}
                  />
                </div>
                <div className="w-full">
                  <label className="text-asiatech-gray-700 ">تا تاریخ</label>
                  <DatePickerIcon
                    portal={false}
                    placeHolder="تاریخ را انتخاب کنبد"
                    value={endDate && new DateObject(endDate).convert(persian, persian_fa).format()}
                    onChange={(e: any) => {
                      let date = new DateObject(e)
                        .convert(gregorian, gregorian_en)
                        .format("YYYY-MM-DD");
                      setEndDate(date);
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
