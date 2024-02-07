"use client";

import { useSteps, useTenantDetails } from "@/hooks/use-store-hooks";
import { useState } from "react";
import { LiaUserAstronautSolid } from "react-icons/lia";
import DetailsWidget from "./details-widget";
import ShowDetailsToggler from "./show-details-toggler";

const TenantDetailsWidget = () => {
  const [showDetails, setShowDetails] = useState(false);
  const { setStep } = useSteps();
  const { tenants } = useTenantDetails();
  const { email, fullname, permenantAddress, phoneNo } = tenants[0];
  return (
    <DetailsWidget
      icon={<LiaUserAstronautSolid className="w-5 h-5" />}
      title="Tenant Details"
      onChange={() => setStep(2)}
    >
      <div className="flex flex-col gap-2 text-muted-foreground text-xs font-semibold">
        <span className="text-foreground text-base capitalize">{fullname}</span>
        {showDetails && (
          <>
            <span className="capitalize">{permenantAddress}</span>
            <span className="whitespace-break-spaces">
              {`${phoneNo}   *   ${email}`}
            </span>
          </>
        )}

        <ShowDetailsToggler show={showDetails} toggleShow={setShowDetails} />
      </div>
    </DetailsWidget>
  );
};

export default TenantDetailsWidget;
