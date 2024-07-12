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
import gregorian_en from "react-date-object/locales/gregorian_en";
import { DateObject } from "react-multi-date-picker";
import { IAdvancedSearchModal } from "../interface";

const AdvancedSearchModal = ({
  isOpen,
  searchData,
  setSearchData,
  setPage,
  page,
  perPage,
  searchBtnHandler,
  disableSearchBtn,
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
                  value={""}
                  onFocusedDateChange={(e: any) => {
                    setSearchData({
                      ...searchData,
                      start_date: new DateObject(e)
                        .convert(gregorian, gregorian_en)
                        .format("YYYY-MM-DD"),
                    });
                  }}
                />
              </div>
              <div className="w-full">
                <label className="text-asiatech-gray-700 ">تا تاریخ</label>
                <DatePickerIcon
                  portal={false}
                  value={""}
                  onFocusedDateChange={(e: any) => {
                    setSearchData({
                      ...searchData,
                      end_date: new DateObject(e)
                        .convert(gregorian, gregorian_en)
                        .format("YYYY-MM-DD"),
                    });
                  }}
                />
              </div>
            </div>
          </ModalBody>
          <ModalFooter className="flex flex-wrap">
            <Button
              disabled={disableSearchBtn}
              onClick={() => {
                setPage(1);
                searchBtnHandler(1, perPage);
                setOpen(false);
              }}
              className={`max-sm:w-full text-white bg-asiatech-blue-902 px-4 rounded-lg h-10 flex items-center justify-center`}
            >
              جستجو{" "}
            </Button>
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
