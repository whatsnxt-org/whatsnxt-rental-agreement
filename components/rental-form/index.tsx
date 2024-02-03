"use client";

import { stepsData } from "@/constants/steps-data";
import { useSteps } from "@/hooks/use-store-hooks";

const RentalForm = () => {
  const currentStep = useSteps().currentStep;
  const step = stepsData[currentStep].component;
  return <>{step}</>;
};

export default RentalForm;
