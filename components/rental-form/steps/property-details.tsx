"use client";

import FormAction from "@/components/rental-form/form-action";
import { FormHeader, FormTitle } from "@/components/rental-form/form-header";
import FormScrollableArea from "@/components/rental-form/form-scrollable-area";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormCheckbox } from "@/components/ui/form-checkbox";
import { FormInput } from "@/components/ui/form-input";
import {
  FormRadioGroup,
  FormRadioItem,
} from "@/components/ui/form-radio-group";
import { propertySpaces } from "@/constants/property-spaces";
import { stepsData } from "@/constants/steps-data";
import {
  useBasicDetails,
  useLandlordDetails,
  usePropertyDetails,
  useSteps,
} from "@/hooks/use-store-hooks";
import {
  PropertyDetailsSchema,
  propertyDetailsSchema,
} from "@/lib/validations/property-details-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import FloorPickerDropdown from "../floor-picker-dropdown";

const PropertyDetails = () => {
  const propertyDetails = usePropertyDetails();
  const landlorsDetails = useLandlordDetails();
  const basicDetails = useBasicDetails();

  const { nextStep, currentStep, prevStep } = useSteps();

  const form = useForm<PropertyDetailsSchema>({
    resolver: zodResolver(propertyDetailsSchema),
    defaultValues: propertyDetails,
    mode: "onChange",
  });

  const floorNo = form.watch("floor");

  const isSameLandlordAddress = form.watch("sameLandlordAddress");
  const address = form.watch("address");

  const onSubmit = (data: PropertyDetailsSchema) => {
    propertyDetails.updateForm(data);
    nextStep();
  };

  useEffect(() => {
    form.setValue(
      "address",
      isSameLandlordAddress ? landlorsDetails.landlords[0].permenantAddress : ""
    );
    form.setFocus("address");
    if (isSameLandlordAddress) form.clearErrors("address");
  }, [isSameLandlordAddress]);

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
            <FormRadioGroup
              control={form.control}
              name="floor"
              label="Floor No."
              className="relative grid grid-cols-6 gap-x-4 gap-y-1 items-center"
              render={(field) => (
                <>
                  {["G", "1", "2", "3"].map((value) => (
                    <FormRadioItem key={value} value={value} field={field}>
                      {value}
                    </FormRadioItem>
                  ))}

                  <FloorPickerDropdown
                    field={field}
                    isSelected={!["G", "1", "2", "3"].includes(floorNo)}
                    floorNo={floorNo}
                  />
                </>
              )}
            />

            <FormRadioGroup
              control={form.control}
              name="space"
              label="Choose BHK"
              className="grid grid-cols-3 gap-x-4 gap-y-1"
              render={(field) => (
                <>
                  {propertySpaces.map((value) => (
                    <FormRadioItem key={value} value={value} field={field}>
                      {value}
                    </FormRadioItem>
                  ))}
                </>
              )}
            />

            <FormCheckbox
              control={form.control}
              name="sameLandlordAddress"
              label="Same as landlord address"
            />

            <FormInput
              control={form.control}
              name="address"
              placeholder="Property Address"
              onChange={() => form.setValue("sameLandlordAddress", false)}
            />

            <FormInput
              control={form.control}
              name="houseNo"
              placeholder="House No."
            />

            <FormInput
              control={form.control}
              name="locality"
              placeholder="Locality"
            />

            <FormInput
              control={form.control}
              name="pincode"
              placeholder="Pin Code"
            />

            <FormInput
              control={form.control}
              name="city"
              placeholder={`${basicDetails.state} (${basicDetails.city})`}
              disabled={true}
            />
          </div>
        </FormScrollableArea>

        <FormAction>
          <div className="px-6 lg:px-0">
            <Button type="submit" size={"lg"} className="w-full">
              Next, Add Contract Details
            </Button>
          </div>
        </FormAction>
      </form>
    </Form>
  );
};

export default PropertyDetails;
