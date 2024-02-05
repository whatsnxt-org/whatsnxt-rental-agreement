"use client";

import FormAction from "@/components/rental-form/form-action";
import FormHeader, { FormTitle } from "@/components/rental-form/form-header";
import FormScrollableArea from "@/components/rental-form/form-scrollable-area";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormInput } from "@/components/ui/form-input";
import { stepsData } from "@/constants/steps-data";
import {
  useLandlordDetails,
  useSteps,
  useStore,
} from "@/hooks/use-store-hooks";
import {
  LandLordSchema,
  LandlordsSchema,
  landlordSchema,
  landlordsSchema,
} from "@/lib/validations/landlord-details-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { useEffect } from "react";
import { FieldError, FieldErrorsImpl, Merge, useForm } from "react-hook-form";

const LandLordDetails = () => {
  const { currentStep, nextStep, prevStep } = useSteps();
  const { landlords, addOwner } = useLandlordDetails();

  const form = useForm<LandlordsSchema>({
    resolver: zodResolver(landlordsSchema),
    defaultValues: { landlords },
  });

  useEffect(() => {
    form.setValue("landlords", landlords);
  }, [landlords]);

  return (
    <>
      <div className="h-full">
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
          <div className="px-6 lg:px-0 space-y-8 pb-6">
            {landlords.map((_, i) => (
              <div key={i}>
                {i !== 0 && (
                  <span className="font-semibold text-lg">Co Owner</span>
                )}
                <LandlordForm
                  index={i}
                  errors={form.formState.errors?.landlords?.[i]}
                />
              </div>
            ))}

            {/* // Add Owner Button */}
            <Button
              size={"sm"}
              variant={"ghost"}
              type="button"
              className="text-wnr-purple border-b border-b-wnr-purple rounded-none hover:bg-inherit focus-visible:bg-inherit hover:text-wnr-purple focus-visible:text-wnr-purple p-0 flex items-center gap-4"
              onClick={() => addOwner()}
            >
              <Plus className="w-4 h-4" />
              <span>Add Co-Owner</span>
            </Button>
          </div>
        </FormScrollableArea>

        <FormAction>
          <div className="px-6 lg:px-0">
            <Button
              type="button"
              className="w-full"
              onClick={form.handleSubmit(nextStep)}
            >
              Next, Add Tenant Details
            </Button>
          </div>
        </FormAction>
      </div>
    </>
  );
};

type LandlordFormError = Merge<FieldError, FieldErrorsImpl<LandLordSchema>>;
const LandlordForm = ({
  index,
  errors,
}: {
  index: number;
  errors?: LandlordFormError;
}) => {
  const { landlord, updateForm } = useStore((state) => ({
    landlord: state.landlordDetails.landlords[index],
    updateForm: state.landlordDetails.updateForm,
  }));

  const form = useForm<LandLordSchema>({
    resolver: zodResolver(landlordSchema),
    defaultValues: landlord,
    mode: "onChange",
  });

  useEffect(() => {
    if (errors) {
      Object.keys(errors).map((key) =>
        form.setError(key as keyof LandLordSchema, {
          message: errors?.[key as keyof LandLordSchema]?.message,
        })
      );
    }
  }, [errors]);

  return (
    <Form {...form}>
      <form className="space-y-2">
        <FormInput
          control={form.control}
          name="fullname"
          placeholder="Full Name"
          onChange={(value) => updateForm(index, { fullname: value })}
        />

        <FormInput
          control={form.control}
          name="parentName"
          placeholder="Father/Mother Name"
          onChange={(value) => updateForm(index, { parentName: value })}
        />

        <FormInput
          control={form.control}
          name="phoneNo"
          placeholder="Phone Number"
          onChange={(value) => updateForm(index, { phoneNo: value })}
        />

        <FormInput
          control={form.control}
          name="email"
          placeholder="Email"
          type="email"
          onChange={(value) => updateForm(index, { email: value })}
        />

        <FormInput
          control={form.control}
          name="permenantAddress"
          placeholder="Permenant Address"
          onChange={(value) => updateForm(index, { permenantAddress: value })}
        />

        <FormInput
          control={form.control}
          name="panNo"
          placeholder="Pan No. (optional)"
          onChange={(value) => updateForm(index, { panNo: value })}
        />
      </form>
    </Form>
  );
};
export default LandLordDetails;
