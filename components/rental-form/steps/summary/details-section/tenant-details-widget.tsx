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
  // const { email, fullname, permenantAddress, phoneNo } = tenants[0];
  const foldedTitle = tenants.map((tenant) => tenant.fullname).join("   •   ");
  return (
    <DetailsWidget
      icon={<LiaUserAstronautSolid className="w-5 h-5" />}
      title="Tenant Details"
      onChange={() => setStep(2)}
    >
      <div className="flex flex-col gap-2 text-muted-foreground text-xs font-semibold">
        {!showDetails && (
          <span className="text-foreground text-base capitalize">
            {foldedTitle}
          </span>
        )}

        {showDetails &&
          tenants.map((tenant, i) => (
            <Tenant key={`tenant-${i}`} {...tenant} />
          ))}
        <ShowDetailsToggler show={showDetails} toggleShow={setShowDetails} />
      </div>
    </DetailsWidget>
  );
};

const Tenant = ({
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

export default TenantDetailsWidget;
