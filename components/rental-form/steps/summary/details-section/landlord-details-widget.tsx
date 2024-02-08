"use client";

import { useLandlordDetails, useSteps } from "@/hooks/use-store-hooks";
import { useState } from "react";
import { TfiUser } from "react-icons/tfi";
import DetailsWidget from "./details-widget";
import ShowDetailsToggler from "./show-details-toggler";

const LandlordDetailsWidget = () => {
  const [showDetails, setShowDetails] = useState(false);
  const { setStep } = useSteps();
  const { landlords } = useLandlordDetails();

  const foldedTitle = landlords
    .map((landlord) => landlord.fullname)
    .join("   •   ");
  return (
    <DetailsWidget
      icon={<TfiUser className="w-4 h-4" />}
      title="Landlord Details"
      onChange={() => setStep(1)}
    >
      <div className="flex flex-col gap-4 text-muted-foreground text-xs font-semibold">
        {!showDetails && (
          <span className="text-foreground text-base capitalize">
            {foldedTitle}
          </span>
        )}

        {showDetails &&
          landlords.map((landlord, i) => (
            <Landlord key={`landlord-${i}`} {...landlord} />
          ))}

        <ShowDetailsToggler show={showDetails} toggleShow={setShowDetails} />
      </div>
    </DetailsWidget>
  );
};

const Landlord = ({
  fullname,
  parentName,
  phoneNo,
  email,
  permenantAddress,
}: {
  fullname: string;
  phoneNo: string;
  email: string;
  parentName: string;
  permenantAddress: string;
}) => (
  <div className="flex flex-col gap-2 text-muted-foreground text-xs font-semibold">
    <span className="text-foreground text-base capitalize">{fullname}</span>

    <span className="capitalize whitespace-break-spaces">{`S/O   D/O   ${parentName}`}</span>

    <span className="whitespace-break-spaces">
      {`${phoneNo}   •   ${email}`}
    </span>
    <span className="capitalize">{permenantAddress}</span>
  </div>
);
export default LandlordDetailsWidget;
