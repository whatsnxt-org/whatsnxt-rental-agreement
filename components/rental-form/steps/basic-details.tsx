"use client";

import { FormHeader, FormTitle } from "@/components/rental-form/form-header";
import { Button } from "@/components/ui/button";
import { CustomInput } from "@/components/ui/custom-input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { states } from "@/constants/states";
import { stepsData } from "@/constants/steps-data";
import useFormData, { RentType } from "@/hooks/use-form-data";
import useSteps from "@/hooks/use-steps";
import {
  BasicDetailsSchema,
  basicDetailsSchema,
} from "@/lib/validations/basic-details-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import FormAction from "../form-action";
import FormScrollableArea from "../form-scrollable-area";
import {
  CustomRadioGroupLabel,
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { FaUserTie } from "react-icons/fa6";

const BasicDetails = () => {
  const { city, email, fullname, phoneNo, state, type, stamp, updateForm } =
    useFormData(
      ({ city, email, fullname, phoneNo, state, type, stamp, updateForm }) => ({
        city,
        email,
        fullname,
        phoneNo,
        state,
        type,
        stamp,
        updateForm,
      })
    );

  const { pushNextStep, currentStep } = useSteps((state) => ({
    pushNextStep: state.nextStep,
    currentStep: state.currentStep,
  }));

  const form = useForm<BasicDetailsSchema>({
    resolver: zodResolver(basicDetailsSchema),
    defaultValues: {
      city,
      email,
      fullname,
      phoneNo,
      state,
      type,
      stamp,
    },
  });

  const onSubmit = (data: BasicDetailsSchema) => {
    console.log(data);
  };

  const currentState = form.watch("state");
  const cities = useMemo(
    () => states.find((state) => state.name === currentState)?.cities ?? [],
    [currentState]
  );

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
            <FormField
              control={form.control}
              name="fullname"
              render={({ field, fieldState: { invalid } }) => (
                <FormItem>
                  <FormControl>
                    <CustomInput
                      placeholder="Full Name"
                      className="bg-inherit"
                      {...field}
                      error={invalid}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phoneNo"
              render={({ field, fieldState: { invalid } }) => (
                <FormItem>
                  <FormControl>
                    <CustomInput
                      placeholder="Phone Number"
                      className="bg-inherit"
                      {...field}
                      error={invalid}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field, fieldState: { invalid } }) => (
                <FormItem>
                  <FormControl>
                    <CustomInput
                      type="email"
                      placeholder="Email"
                      className="bg-inherit"
                      {...field}
                      error={invalid}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={(v) => {
                      field.onChange(v);
                      form.setValue("city", "");
                    }}
                    defaultValue={field.value}
                  >
                    <FormLabel className="text-muted-foreground">
                      State
                    </FormLabel>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="State where property is located" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {states.map((state) => (
                        <SelectItem key={state.name} value={state.name}>
                          {state.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormLabel className="text-muted-foreground">
                      City
                    </FormLabel>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="City where property is located" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {cities.map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="stamp"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormLabel className="text-muted-foreground">
                      Stamp
                    </FormLabel>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="₹ 100" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="₹ 100">₹ 100</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel>I am a/an</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="grid grid-cols-3 gap-4"
                    >
                      <FormItem className="flex items-center">
                        <FormControl>
                          <RadioGroupItem value={RentType.Tenant} />
                        </FormControl>
                        <FormLabel className="w-full">
                          <CustomRadioGroupLabel
                            isSelected={field.value === RentType.Tenant}
                          >
                            <FaUserTie fontSize={20} />
                            <span>Tenant</span>
                          </CustomRadioGroupLabel>
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center">
                        <FormControl>
                          <RadioGroupItem value={RentType.LandLord} />
                        </FormControl>
                        <FormLabel className="w-full">
                          <CustomRadioGroupLabel
                            isSelected={field.value === RentType.LandLord}
                          >
                            <FaUserTie fontSize={20} />
                            <span>Landlord</span>
                          </CustomRadioGroupLabel>
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center">
                        <FormControl>
                          <RadioGroupItem value={RentType.Agent} />
                        </FormControl>
                        <FormLabel className="w-full">
                          <CustomRadioGroupLabel
                            isSelected={field.value === RentType.Agent}
                          >
                            <FaUserTie fontSize={20} />
                            <span>Agent</span>
                          </CustomRadioGroupLabel>
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
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
