"use client";

import FormAction from "@/components/rental-form/form-action";
import { FormHeader, FormTitle } from "@/components/rental-form/form-header";
import FormScrollableArea from "@/components/rental-form/form-scrollable-area";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormInput } from "@/components/ui/form-input";
import {
  FormRadioGroup,
  FormRadioItem,
} from "@/components/ui/form-radio-group";
import { FormSelect, FormSelectItem } from "@/components/ui/form-select";
import { states } from "@/constants/states";
import { stepsData } from "@/constants/steps-data";
import { useStore } from "@/hooks/use-store-hooks";
import {
  BasicDetailsSchema,
  basicDetailsSchema,
} from "@/lib/validations/basic-details-schema";
import { RentType } from "@/store/basic-details-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import { useForm } from "react-hook-form";

const BasicDetails = () => {
  const {
    basicDetails,
    steps: { nextStep, currentStep },
  } = useStore((state) => ({
    basicDetails: state.basicDetails,
    steps: state.steps,
  }));

  const form = useForm<BasicDetailsSchema>({
    resolver: zodResolver(basicDetailsSchema),
    defaultValues: basicDetails,
  });

  const currentState = form.watch("state");
  const cities = useMemo(
    () => states.find((state) => state.name === currentState)?.cities ?? [],
    [currentState]
  );

  const onSubmit = (data: BasicDetailsSchema) => {
    basicDetails.updateForm(data);
    nextStep();
  };

  return (
    <Form {...form}>
      <form className="h-full" onSubmit={form.handleSubmit(onSubmit)}>
        <FormHeader>
          <FormTitle
            currentStep={currentStep + 1}
            totalSteps={stepsData.length}
            desktopTitle="Enter Basic Details"
            mobileTitle="Let us know more about you"
            icon={stepsData[currentStep].icon}
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
              name="phoneNo"
              placeholder="Phone Number"
            />

            <FormInput
              control={form.control}
              name="email"
              placeholder="Email"
              type="email"
            />

            <FormSelect
              control={form.control}
              name="state"
              label="State"
              placeholder="State where property is located"
              onChange={(v) => {
                form.setValue("state", v);
                form.setValue("city", "");
              }}
            >
              {states.map((state) => (
                <FormSelectItem key={state.name} value={state.name}>
                  {state.name}
                </FormSelectItem>
              ))}
            </FormSelect>

            <FormSelect
              control={form.control}
              name="city"
              label="City"
              placeholder="City where property is located"
            >
              {cities.map((city) => (
                <FormSelectItem key={city} value={city}>
                  {city}
                </FormSelectItem>
              ))}
            </FormSelect>

            <FormSelect
              control={form.control}
              name="stamp"
              label="Stamp"
              placeholder=""
            >
              <FormSelectItem value="₹ 100">₹ 100</FormSelectItem>
            </FormSelect>

            <FormRadioGroup
              control={form.control}
              name="type"
              label="I am a/an"
              className="grid grid-cols-3 gap-4"
              render={(field) => (
                <>
                  <FormRadioItem value={RentType.Tenant} field={field}>
                    Tenant
                  </FormRadioItem>
                  <FormRadioItem value={RentType.LandLord} field={field}>
                    Landlord
                  </FormRadioItem>
                  <FormRadioItem value={RentType.Agent} field={field}>
                    Agent
                  </FormRadioItem>
                </>
              )}
            />
          </div>
        </FormScrollableArea>

        <FormAction>
          <div className="px-6">
            <Button type="submit" className="w-full">
              Next, Add Landlord Details
            </Button>
          </div>
        </FormAction>
      </form>
    </Form>
  );
};

export default BasicDetails;
