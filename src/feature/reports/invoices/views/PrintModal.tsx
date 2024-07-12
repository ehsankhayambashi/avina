import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import ReactToPrint from "react-to-print";
import { IPrintModal } from "../interface";

export default function PrintModal({
  isOpen,
  componentToShow,
  onOpenChange,
  invoiceRef,
}: IPrintModal) {
  return (
    <Modal
      backdrop="opaque"
      onOpenChange={onOpenChange}
      isOpen={isOpen}
      hideCloseButton={true}
      size="5xl"
      placement="center"
      scrollBehavior="inside"
      //   className="max-sm:mx-4"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-asiatech-gray-900"></ModalHeader>
            <ModalBody>{componentToShow}</ModalBody>
            <ModalFooter>
              <Button color="default" className="text-white bg-asiatech-gray-600" onPress={onClose}>
                بازگشت
              </Button>

              <ReactToPrint
                trigger={() => (
                  <Button
                    className={`h-full flex flex-row items-center bg-asiatech-blue-800  text-asiatech-gray-200 rounded-14 px-3 py-2.5`}
                    color="secondary"
                  >
                    چاپ فاکتور
                  </Button>
                )}
                content={() => {
                  return invoiceRef.current;
                }}
              />
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
