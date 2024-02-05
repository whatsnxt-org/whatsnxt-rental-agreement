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

  const mainLandlord = landlords[0];

  return (
    <DetailsWidget
      icon={<TfiUser className="w-4 h-4" />}
      title="Landlord Details"
      onChange={() => setStep(1)}
    >
      <div className="flex flex-col gap-2 text-muted-foreground text-xs font-semibold">
        <span className="text-foreground text-base capitalize">
          {mainLandlord.fullname}
        </span>
        {showDetails && (
          <>
            <span className="capitalize">{mainLandlord.permenantAddress}</span>
            <span>
              {mainLandlord.phoneNo} * {mainLandlord.email}
            </span>
          </>
        )}

        <ShowDetailsToggler show={showDetails} toggleShow={setShowDetails} />
      </div>
    </DetailsWidget>
  );
};

export default LandlordDetailsWidget;
