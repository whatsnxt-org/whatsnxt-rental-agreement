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
import { FieldError, FieldErrorsImpl, Merge, useForm } from "react-hook-form";

const TenantDetails = () => {
  const { currentStep, nextStep, prevStep } = useSteps();
  const { tenants, addTenant } = useTenantDetails();

  const form = useForm<TenantsSchema>({
    resolver: zodResolver(tenantsSchema),
    defaultValues: { tenants },
  });

  useEffect(() => {
    form.setValue("tenants", tenants);
  }, [tenants]);

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
          <div className="px-6 lg:px-0 space-y-4 pb-6">
            {tenants.map((_, i) => (
              <div key={i}>
                <TenantForm
                  index={i}
                  errors={form.formState.errors?.tenants?.[i]}
                />
              </div>
            ))}

            {/* // Add Tenant Button */}
            <Button
              size={"sm"}
              variant={"ghost"}
              type="button"
              className="text-wnr-purple rounded-none hover:bg-inherit focus-visible:bg-inherit hover:text-wnr-purple focus-visible:text-wnr-purple p-0 flex items-center"
              onClick={() => addTenant()}
            >
              <Plus className="w-3 h-3" strokeWidth={3} />
              <span>Add Tenant</span>
            </Button>
          </div>
        </FormScrollableArea>

        <FormAction>
          <div className="px-6 lg:px-0">
            <Button
              type="button"
              size={"lg"}
              className="w-full"
              onClick={form.handleSubmit(nextStep)}
            >
              Next, Add Property Details
            </Button>
          </div>
        </FormAction>
      </div>
    </>
  );
};

type TenantFormError = Merge<FieldError, FieldErrorsImpl<TenantSchema>>;
const TenantForm = ({
  index,
  errors,
}: {
  index: number;
  errors?: TenantFormError;
}) => {
  const { tenants, updateForm, removeTenant } = useTenantDetails();
  const tenant = tenants[index];

  const form = useForm<TenantSchema>({
    resolver: zodResolver(tenantSchema),
    defaultValues: tenant,
    mode: "onChange",
  });

  useEffect(() => {
    if (errors) {
      Object.keys(errors).map((key) =>
        form.setError(key as keyof TenantSchema, {
          message: errors?.[key as keyof TenantSchema]?.message,
        })
      );
    }
  }, [errors]);

  useEffect(() => {
    form.setValue("fullname", tenant.fullname);
    form.setValue("email", tenant.email);
    form.setValue("panNo", tenant.panNo);
    form.setValue("parentName", tenant.parentName);
    form.setValue("permenantAddress", tenant.permenantAddress);
    form.setValue("phoneNo", tenant.phoneNo);
  }, [tenants]);

  return (
    <>
      {index !== 0 && (
        <div className="flex items-center justify-between">
          <span className="text-sm">{`Tenant ${index + 1}`}</span>
          <span
            className="text-sm text-wnr-purple cursor-pointer"
            onClick={() => removeTenant(index)}
          >
            Remove
          </span>
        </div>
      )}
      <div className="px-6 py-2 rounded-lg border">
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
              onChange={(value) =>
                updateForm(index, { permenantAddress: value })
              }
            />

            <FormInput
              control={form.control}
              name="panNo"
              placeholder="Pan No. (optional)"
              onChange={(value) => updateForm(index, { panNo: value })}
            />
          </form>
        </Form>
      </div>
    </>
  );
};
export default TenantDetails;
