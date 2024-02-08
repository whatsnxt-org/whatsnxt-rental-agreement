"use client";

import FormAction from "@/components/rental-form/form-action";
import FormHeader, { FormTitle } from "@/components/rental-form/form-header";
import FormScrollableArea from "@/components/rental-form/form-scrollable-area";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormInput } from "@/components/ui/form-input";
import { stepsData } from "@/constants/steps-data";
import { useLandlordDetails, useSteps } from "@/hooks/use-store-hooks";
import {
  LandlordsSchema,
  landlordsSchema,
} from "@/lib/validations/landlord-details-schema";
import { defaultLandlord } from "@/store/landlord-details-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { Control, useForm } from "react-hook-form";

const LandLordDetails = () => {
  const { currentStep, nextStep, prevStep } = useSteps();
  const { landlords: storeLandlords, updateForm } = useLandlordDetails();

  const form = useForm<LandlordsSchema>({
    resolver: zodResolver(landlordsSchema),
    defaultValues: { landlords: storeLandlords },
  });

  const landlords = form.watch("landlords");

  const handleSubmit = ({ landlords }: LandlordsSchema) => {
    updateForm(landlords);
    nextStep();
  };

  const handleRemove = (index: number) => {
    const newLandlordsArr = [...form.getValues("landlords")];
    newLandlordsArr.splice(index, 1);
    form.setValue("landlords", newLandlordsArr);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="h-full">
        <FormHeader>
          <FormTitle
            currentStep={currentStep + 1}
            totalSteps={stepsData.length}
            desktopTitle={stepsData[currentStep].title.desktop}
            mobileTitle={stepsData[currentStep].title.mobile}
            icon={stepsData[currentStep].icon}
            onPrevStep={prevStep}
          />
        </FormHeader>

        <FormScrollableArea>
          <div className="px-6 lg:px-0 space-y-4 pb-6">
            {landlords.map((_, i) => (
              <div key={i}>
                <LandlordForm
                  control={form.control}
                  index={i}
                  onRemove={handleRemove}
                />
              </div>
            ))}

            {/* // Add Owner Button */}
            <Button
              size={"sm"}
              variant={"ghost"}
              type="button"
              className="text-wnr-purple rounded-none hover:bg-inherit focus-visible:bg-inherit hover:text-wnr-purple focus-visible:text-wnr-purple p-0 flex items-center"
              onClick={() =>
                form.setValue("landlords", [
                  ...form.getValues("landlords"),
                  { ...defaultLandlord },
                ])
              }
            >
              <Plus className="w-3 h-3" strokeWidth={3} />
              <span>Add Co-owner</span>
            </Button>
          </div>
        </FormScrollableArea>

        <FormAction>
          <div className="px-6 lg:px-0">
            <Button type="submit" size={"lg"} className="w-full">
              Next, Add Tenant Details
            </Button>
          </div>
        </FormAction>
      </form>
    </Form>
  );
};

const LandlordForm = ({
  index,
  control,
  onRemove,
}: {
  index: number;
  control: Control<LandlordsSchema, any>;
  onRemove: (index: number) => void;
}) => {
  return (
    <>
      {index !== 0 && (
        <div className="flex items-center justify-between">
          <span className="text-sm">{`Landlord ${index + 1}`}</span>
          <span
            className="text-sm text-wnr-purple cursor-pointer"
            onClick={() => onRemove(index)}
          >
            Remove
          </span>
        </div>
      )}
      <div className="px-6 py-2 rounded-lg border">
        <div className="space-y-2">
          <FormInput
            control={control}
            name={`landlords.${index}.fullname`}
            placeholder="Full Name"
          />

          <FormInput
            control={control}
            name={`landlords.${index}.parentName`}
            placeholder="Father/Mother Name"
          />

          <FormInput
            control={control}
            name={`landlords.${index}.phoneNo`}
            placeholder="Phone Number"
          />

          <FormInput
            control={control}
            name={`landlords.${index}.email`}
            placeholder="Email"
            type="email"
          />

          <FormInput
            control={control}
            name={`landlords.${index}.permenantAddress`}
            placeholder="Permenant Address"
          />

          <FormInput
            control={control}
            name={`landlords.${index}.panNo`}
            placeholder="Pan No. (optional)"
          />
        </div>
      </div>
    </>
  );
};
export default LandLordDetails;
