"use client";

import ContractDetailsWidget from "./contract-details-widget";
import ItemsListWidget from "./items-list-widget";
import LandlordDetailsWidget from "./landlord-details-widget";
import PropertyDetailsWidget from "./property-details-widget";
import TenantDetailsWidget from "./tenant-details-widget";

const DetailsSection = () => {
  return (
    <div className="space-y-4">
      <LandlordDetailsWidget />
      <TenantDetailsWidget />
      <PropertyDetailsWidget />
      <ContractDetailsWidget />
      <ItemsListWidget />
    </div>
  );
};
export default DetailsSection;
