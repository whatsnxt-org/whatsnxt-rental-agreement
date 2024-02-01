import BasicDetails from "@/components/rental-form/steps/basic-details";
import { File } from "lucide-react";

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
    icon: <File />,
    component: <BasicDetails />,
  },
];
