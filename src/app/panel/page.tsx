import TriangleExclamationIcon from "@/assets/icons/TriangleExclamationIcon";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

export default function Page() {
  return (
    <>
      <Card>
        <CardHeader className=" text-asiatech-gray-800">
          <div>
            <TriangleExclamationIcon className="w-6 h-6" />
          </div>
          <div className="pr-2">هشدار</div>
        </CardHeader>
        <CardBody className="text-right">
          لطفا از منو سمت راست، بخش مورد نظر خود را انتخاب نمایید
        </CardBody>
      </Card>
    </>
  );
}
