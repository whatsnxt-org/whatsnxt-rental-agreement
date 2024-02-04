import BasicDetails from "@/components/rental-form/steps/basic-details";
import { MdOutlineAssignment } from "react-icons/md";
import { TfiUser } from "react-icons/tfi";
import { LiaUserAstronautSolid, LiaFileContractSolid } from "react-icons/lia";
import { IoLocateOutline } from "react-icons/io5";
import LandLordDetails from "@/components/rental-form/steps/landlord-details";
import TenantDetails from "@/components/rental-form/steps/tenant-details";
import PropertyDetails from "@/components/rental-form/steps/property-details";
import ContractDeatils from "@/components/rental-form/steps/contract-details-step";
import ItemsList from "@/components/rental-form/steps/items-list";

export type StepData = {
  title: {
    mobile: string;
    desktop: string;
  };
  icon: JSX.Element;
  component: JSX.Element;
};

export const stepsData: StepData[] = [
  {
    title: {
      mobile: "Help us know you better",
      desktop: "Enter Basic Details",
    },
    icon: <MdOutlineAssignment className="w-6 h-6" />,
    component: <BasicDetails />,
  },
  {
    title: {
      mobile: "Landlord Details",
      desktop: "Enter Landlord Details",
    },
    icon: <TfiUser className="w-6 h-6" />,
    component: <LandLordDetails />,
  },
  {
    title: {
      mobile: "Tenant Details",
      desktop: "Enter Tenant Details",
    },
    icon: <LiaUserAstronautSolid className="w-6 h-6" />,
    component: <TenantDetails />,
  },
  {
    title: {
      mobile: "Property Details",
      desktop: "Enter Property Details",
    },
    icon: <IoLocateOutline className="w-6 h-6" />,
    component: <PropertyDetails />,
  },
  {
    title: {
      mobile: "Contract Details",
      desktop: "Enter Contract Details",
    },
    icon: <LiaFileContractSolid className="w-6 h-6" />,
    component: <ContractDeatils />,
  },
  {
    title: {
      mobile: "Items List",
      desktop: "Enter Items List",
    },
    icon: <LiaFileContractSolid className="w-6 h-6" />,
    component: <ItemsList />,
  },
];
