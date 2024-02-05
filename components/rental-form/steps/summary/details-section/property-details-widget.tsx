"use client";

import {
  useLandlordDetails,
  usePropertyDetails,
  useSteps,
} from "@/hooks/use-store-hooks";
import { IoLocateOutline } from "react-icons/io5";
import DetailsWidget from "./details-widget";

const PropertyDetailsWidget = () => {
  const { setStep } = useSteps();
  const {
    address: _address,
    space,
    houseNo,
    sameLandlordAddress,
  } = usePropertyDetails();
  const { landlords } = useLandlordDetails();
  const landlordAddress = landlords[0].permenantAddress;
  const address = sameLandlordAddress ? landlordAddress : _address;
  return (
    <DetailsWidget
      icon={<IoLocateOutline className="w-5 h-5" />}
      title="Property Details"
      onChange={() => setStep(3)}
    >
      <div className="flex flex-col gap-2 text-muted-foreground text-xs font-semibold">
        <span className="text-foreground text-base capitalize">{address}</span>

        <span>
          {houseNo && `House No. ${houseNo} *`} {space}
        </span>
      </div>
    </DetailsWidget>
  );
};

export default PropertyDetailsWidget;
