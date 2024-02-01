import BasicDetails from "@/components/rental-form/steps/basic-details";
import { MdOutlineAssignment } from "react-icons/md";

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
      <MdOutlineAssignment className="w-6 h-6" color="hsl(var(--primary))" />
    ),
    component: <BasicDetails />,
  },
];
