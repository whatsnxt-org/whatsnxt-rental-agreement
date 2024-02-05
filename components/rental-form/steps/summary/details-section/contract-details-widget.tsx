"use client";

import { useSteps, useContractDetails } from "@/hooks/use-store-hooks";
import { useState } from "react";
import { LiaFileContractSolid, LiaUserAstronautSolid } from "react-icons/lia";
import DetailsWidget from "./details-widget";
import ShowDetailsToggler from "./show-details-toggler";
import { format } from "date-fns";

const ContractDetailsWidget = () => {
  const [showDetails, setShowDetails] = useState(false);
  const { setStep } = useSteps();
  const {
    monthlyRent,
    increaseRent,
    increaseRentPercentage,
    noticePeriod,
    rentPaymentDate,
    startDate,
    securityAmount,
  } = useContractDetails();

  return (
    <DetailsWidget
      icon={<LiaFileContractSolid className="w-5 h-5" />}
      title="Contract Details"
      onChange={() => setStep(4)}
    >
      <div className="flex flex-col gap-2 text-muted-foreground text-xs font-semibold">
        <span className="text-foreground text-base capitalize">
          {format(startDate, "PPP")}
        </span>
        <div className="flex gap-4">
          <span className="capitalize whitespace-break-spaces">
            {`Rent: ${monthlyRent}   *   Deposit: ${securityAmount}`}
          </span>
        </div>
        <span className="capitalize whitespace-break-spaces">
          {`Rent Date:   ${rentPaymentDate}   (Every Month)   *   Notice ${noticePeriod} Months`}
        </span>
        <span className="capitalize whitespace-break-spaces">
          {increaseRent &&
            `Rent Increment:   ${increaseRentPercentage}%   After Duration Is Over`}
        </span>
      </div>
    </DetailsWidget>
  );
};

export default ContractDetailsWidget;
