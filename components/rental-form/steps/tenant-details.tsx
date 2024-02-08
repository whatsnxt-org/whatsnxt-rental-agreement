"use client";

import FormAction from "@/components/rental-form/form-action";
import FormHeader, { FormTitle } from "@/components/rental-form/form-header";
import FormScrollableArea from "@/components/rental-form/form-scrollable-area";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormInput } from "@/components/ui/form-input";
import { stepsData } from "@/constants/steps-data";
import { useSteps, useTenantDetails } from "@/hooks/use-store-hooks";
import {
  TenantSchema,
  TenantsSchema,
  tenantSchema,
  tenantsSchema,
} from "@/lib/validations/tenant-details-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { useEffect } from "react";
import {
  Control,
  FieldError,
  FieldErrorsImpl,
  Merge,
  useForm,
} from "react-hook-form";
import { defaultTenant } from "@/store/tenant-details-store";

const TenantDetails = () => {
  const { currentStep, nextStep, prevStep } = useSteps();
  const { tenants: storeTenants, updateForm } = useTenantDetails();

  const form = useForm<TenantsSchema>({
    resolver: zodResolver(tenantsSchema),
    defaultValues: { tenants: storeTenants },
  });

  const tenants = form.watch("tenants");

  const handleSubmit = ({ tenants }: TenantsSchema) => {
    updateForm(tenants);
    nextStep();
  };

  const handleRemove = (index: number) => {
    const newTenantsArr = [...form.getValues("tenants")];
    newTenantsArr.splice(index, 1);
    form.setValue("tenants", newTenantsArr);
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
            {tenants.map((_, i) => (
              <div key={i}>
                <TenantForm
                  index={i}
                  control={form.control}
                  onRemove={handleRemove}
                />
              </div>
            ))}

            {/* // Add Tenant Button */}
            <Button
              size={"sm"}
              variant={"ghost"}
              type="button"
              className="text-wnr-purple rounded-none hover:bg-inherit focus-visible:bg-inherit hover:text-wnr-purple focus-visible:text-wnr-purple p-0 flex items-center"
              onClick={() =>
                form.setValue("tenants", [
                  ...form.getValues("tenants"),
                  { ...defaultTenant },
                ])
              }
            >
              <Plus className="w-3 h-3" strokeWidth={3} />
              <span>Add Tenant</span>
            </Button>
          </div>
        </FormScrollableArea>

        <FormAction>
          <div className="px-6 lg:px-0">
            <Button type="submit" size={"lg"} className="w-full">
              Next, Add Property Details
            </Button>
          </div>
        </FormAction>
      </form>
    </Form>
  );
};

const TenantForm = ({
  index,
  control,
  onRemove,
}: {
  index: number;
  control: Control<TenantsSchema, any>;
  onRemove: (index: number) => void;
}) => {
  return (
    <>
      {index !== 0 && (
        <div className="flex items-center justify-between">
          <span className="text-sm">{`Tenant ${index + 1}`}</span>
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
            name={`tenants.${index}.fullname`}
            placeholder="Full Name"
          />

          <FormInput
            control={control}
            name={`tenants.${index}.parentName`}
            placeholder="Father/Mother Name"
          />

          <FormInput
            control={control}
            name={`tenants.${index}.phoneNo`}
            placeholder="Phone Number"
          />

          <FormInput
            control={control}
            name={`tenants.${index}.email`}
            placeholder="Email"
            type="email"
          />

          <FormInput
            control={control}
            name={`tenants.${index}.permenantAddress`}
            placeholder="Permenant Address"
          />

          <FormInput
            control={control}
            name={`tenants.${index}.panNo`}
            placeholder="Pan No. (optional)"
          />
        </div>
      </div>
    </>
  );
};
export default TenantDetails;
