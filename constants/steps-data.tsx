import BasicDetails from "@/components/rental-form/steps/basic-details";
import { MdOutlineAssignment } from "react-icons/md";
import { TfiUser } from "react-icons/tfi";
import { LiaUserAstronautSolid, LiaFileContractSolid } from "react-icons/lia";
import { IoLocateOutline } from "react-icons/io5";

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
    icon: (
      <MdOutlineAssignment
        className="w-6 h-6"
        // color="hsl(var(--primary))"
      />
    ),
    component: <BasicDetails />,
  },
  {
    title: {
      mobile: "Landlord Details",
      desktop: "Enter Landlord Details",
    },
    icon: <TfiUser className="w-6 h-6" />,
    component: <BasicDetails />,
  },
  {
    title: {
      mobile: "Tenant Details",
      desktop: "Enter Tenant Details",
    },
    icon: <LiaUserAstronautSolid className="w-6 h-6" />,
    component: <BasicDetails />,
  },
  {
    title: {
      mobile: "Property Details",
      desktop: "Enter Property Details",
    },
    icon: <IoLocateOutline className="w-6 h-6" />,
    component: <BasicDetails />,
  },
  {
    title: {
      mobile: "Contract Details",
      desktop: "Enter Contract Details",
    },
    icon: <LiaFileContractSolid className="w-6 h-6" />,
    component: <BasicDetails />,
  },
  {
    title: {
      mobile: "Item List",
      desktop: "Enter Item List",
    },
    icon: <LiaFileContractSolid className="w-6 h-6" />,
    component: <BasicDetails />,
  },
];
