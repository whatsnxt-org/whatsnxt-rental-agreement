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
import {
  useBasicDetails,
  useLandlordDetails,
  useSteps,
  useTenantDetails,
} from "@/hooks/use-store-hooks";
import { cn, isEmptyString } from "@/lib/utils";
import {
  BasicDetailsSchema,
  basicDetailsSchema,
} from "@/lib/validations/basic-details-schema";
import { RentType } from "@/store/basic-details-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { FaUserTie } from "react-icons/fa6";
import { LiaUserAstronautSolid } from "react-icons/lia";
import { TfiUser } from "react-icons/tfi";

const BasicDetails = () => {
  const basicDetails = useBasicDetails();
  const { nextStep, currentStep } = useSteps();
  const {
    reset: resetLandlords,
    updateForm: updateLandlords,
    landlords,
  } = useLandlordDetails();
  const {
    reset: resetTenants,
    updateForm: updateTenants,
    tenants,
  } = useTenantDetails();

  const form = useForm<BasicDetailsSchema>({
    resolver: zodResolver(basicDetailsSchema),
    defaultValues: basicDetails,
    mode: "onChange",
  });

  const currentRentType = form.watch("type");
  const currentState = form.watch("state");

  const cities = useMemo(
    () => states.find((state) => state.name === currentState)?.cities ?? [],
    [currentState]
  );

  const updateLandlordAndTenant = () => {
    const { fullname, email, phoneNo, type: rentType } = form.getValues();
    if (rentType === RentType.Agent) return;

    if (rentType === RentType.Tenant) {
      const mainTenant = tenants[0];
      updateTenants(0, {
        fullname: isEmptyString(mainTenant.fullname)
          ? fullname
          : mainTenant.fullname,
        email: isEmptyString(mainTenant.email) ? email : mainTenant.email,
        phoneNo: isEmptyString(mainTenant.phoneNo)
          ? phoneNo
          : mainTenant.phoneNo,
      });
    }

    if (rentType === RentType.LandLord) {
      const mainLandlord = landlords[0];

      updateLandlords(0, {
        fullname: isEmptyString(mainLandlord.fullname)
          ? fullname
          : mainLandlord.fullname,
        email: isEmptyString(mainLandlord.email) ? email : mainLandlord.email,
        phoneNo: isEmptyString(mainLandlord.phoneNo)
          ? phoneNo
          : mainLandlord.phoneNo,
      });
    }
  };

  const onSubmit = (data: BasicDetailsSchema) => {
    updateLandlordAndTenant();
    basicDetails.updateForm(data);
    nextStep();
  };

  // Reset the form on changing rent type
  useEffect(() => {
    if (currentRentType !== basicDetails.type) {
      console.log("rent type changed");
      resetLandlords();
      resetTenants();
    }
  }, [currentRentType]);

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
                    <div className="flex items-center gap-2">
                      <LiaUserAstronautSolid
                        className={cn(
                          "w-6 h-6",
                          field.value === RentType.Tenant && "text-wnr-purple"
                        )}
                      />
                    </div>
                    <span>Tenant</span>
                  </FormRadioItem>
                  <FormRadioItem value={RentType.LandLord} field={field}>
                    <div className="flex items-center gap-2">
                      <TfiUser
                        className={cn(
                          "w-4 h-4",
                          field.value === RentType.LandLord && "text-wnr-purple"
                        )}
                      />
                      <span>Landlord</span>
                    </div>
                  </FormRadioItem>
                  <FormRadioItem value={RentType.Agent} field={field}>
                    <div className="flex items-center gap-2">
                      <FaUserTie
                        className={cn(
                          "w-4 h-4",
                          field.value === RentType.Agent && "text-wnr-purple"
                        )}
                      />
                      <span>Agent</span>
                    </div>
                  </FormRadioItem>
                </>
              )}
            />
          </div>
        </FormScrollableArea>

        <FormAction>
          <div className="px-6 lg:px-0">
            <Button type="submit" size={"lg"} className="w-full">
              Next, Add Landlord Details
            </Button>
          </div>
        </FormAction>
      </form>
    </Form>
  );
};

export default BasicDetails;
