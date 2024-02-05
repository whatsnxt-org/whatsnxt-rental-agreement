"use client";

import { stepsData } from "@/constants/steps-data";
import { useSteps } from "@/hooks/use-store-hooks";
import IsBrowser from "@/components/ui/is-browser";
import ResponsiveLayout from "@/components/rental-form/layouts/responsive-layout";
import Summary from "@/components/rental-form/steps/summary";

const RentalForm = () => {
  const currentStep = useSteps().currentStep;
  const step = stepsData[currentStep].component;

  const lastStep = currentStep === stepsData.length - 1;

  if (lastStep) return <Summary />;
  return (
    <>
      <IsBrowser>
        <ResponsiveLayout>{step}</ResponsiveLayout>
      </IsBrowser>
    </>
  );
};

export default RentalForm;
