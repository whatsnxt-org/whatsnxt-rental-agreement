"use client";

import { Button } from "@/components/ui/button";
import useScreen from "@/hooks/useScreen";
import { ChevronLeft } from "lucide-react";
import { ReactNode } from "react";

export const FormHeader = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-[5rem] w-full lg:max-w-[480px] mx-auto bg-white shadow-md lg:shadow-none">
      <div className="flex h-full items-center">{children}</div>
    </div>
  );
};

type FormTitleProps = {
  mobileTitle: string;
  desktopTitle: string;
  currentStep: number;
  totalSteps: number;
  icon: JSX.Element;
  onPrevStep?: () => void;
};

export const FormTitle = ({
  mobileTitle,
  desktopTitle,
  currentStep,
  totalSteps,
  icon,
  onPrevStep,
}: FormTitleProps) => {
  const { isDesktop } = useScreen();
  return isDesktop ? (
    <DesktopFormTitle title={desktopTitle} onPrevStep={onPrevStep} />
  ) : (
    <MobileFormTitle
      title={mobileTitle}
      currentStep={currentStep}
      totalSteps={totalSteps}
      icon={icon}
      onPrevStep={onPrevStep}
    />
  );
};

const MobileFormTitle = ({
  icon,
  title,
  currentStep,
  totalSteps,
  onPrevStep,
}: {
  icon: JSX.Element;
  currentStep: number;
  totalSteps: number;
  title: string;
  onPrevStep?: () => void;
}) => (
  <div className="flex items-center h-full px-6">
    {/* // prev icon */}
    <Button
      type="button"
      variant={"ghost"}
      size={"icon"}
      className="p-0 w-10 h-10 rounded-full"
      onClick={onPrevStep}
    >
      <ChevronLeft className="w-4 h-4" />
    </Button>

    {/* // icon */}
    <div className="ms-3 w-10 h-10 rounded-full bg-muted flex items-center justify-center text-primary">
      {icon}
    </div>

    <div className="ms-4 flex flex-col items-start justify-center ">
      <span className="text-muted-foreground text-xs font-semibold">
        Step {currentStep} of {totalSteps}
      </span>
      <h2 className="font-semibold">{title}</h2>
    </div>
  </div>
);

const DesktopFormTitle = ({
  title,
  onPrevStep,
}: {
  title: string;
  onPrevStep?: () => void;
}) => (
  <>
    {onPrevStep && (
      <div className="absolute top-6 left-6">
        <Button
          variant={"ghost"}
          size={"icon"}
          type="button"
          className="px-0 w-10 h-10 rounded-full"
          onClick={onPrevStep}
        >
          <ChevronLeft />
        </Button>
      </div>
    )}
    <div>
      <h2 className="text-2xl font-semibold text-gray-700">{title}</h2>
    </div>
  </>
);

export default FormHeader;
