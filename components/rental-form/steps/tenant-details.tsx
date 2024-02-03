"use client";

import FormAction from "@/components/rental-form/form-action";
import { FormHeader, FormTitle } from "@/components/rental-form/form-header";
import FormScrollableArea from "@/components/rental-form/form-scrollable-area";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormInput } from "@/components/ui/form-input";
import { stepsData } from "@/constants/steps-data";
import { useSteps, useTenantDetails } from "@/hooks/use-store-hooks";
import {
  TenantSchema,
  tenantSchema,
} from "@/lib/validations/tenant-details-schema";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const TenantDetails = () => {
  const tenantDetails = useTenantDetails();
  const { currentStep, nextStep, prevStep } = useSteps();
  const form = useForm<TenantSchema>({
    resolver: zodResolver(tenantSchema),
    defaultValues: tenantDetails,
  });

  const onSubmit = (data: TenantSchema) => {
    tenantDetails.updateForm(data);
    nextStep();
  };

  return (
    <Form {...form}>
      <form className="h-full" onSubmit={form.handleSubmit(onSubmit)}>
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
            <FormInput
              control={form.control}
              name="fullname"
              placeholder="Full Name"
            />

            <FormInput
              control={form.control}
              name="parentName"
              placeholder="Father/Mother Name"
            />

            <FormInput
              control={form.control}
              name="phoneNo"
              placeholder="Phone Number"
            />

            <FormInput
              control={form.control}
              name="email"
              placeholder="Email"
              type="email"
            />

            <FormInput
              control={form.control}
              name="permenantAddress"
              placeholder="Permenant Address"
            />

            <FormInput
              control={form.control}
              name="panNo"
              placeholder="Pan No. (optional)"
            />
          </div>
        </FormScrollableArea>

        <FormAction>
          <div className="px-6 lg:px-0">
            <Button type="submit" className="w-full">
              Next, Add Property Details
            </Button>
          </div>
        </FormAction>
      </form>
    </Form>
  );
};

export default TenantDetails;
