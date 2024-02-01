"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import useFormData, { FormInputs } from "@/hooks/use-form-data";
import useSteps from "@/hooks/use-steps";
import {
  BasicDetailsSchema,
  basicDetailsSchema,
} from "@/lib/validations/basic-details-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormHeader, FormTitle } from "@/components/rental-form/form-header";
import FormScrollableArea from "../form-scrollable-area";
import { CustomInput } from "@/components/ui/custom-input";
import FormAction from "../form-action";
import { Button } from "@/components/ui/button";
import { File } from "lucide-react";
import { stepsData } from "@/constants/steps-data";

const BasicDetails = () => {
  const { city, email, fullname, phoneNo, state, type, updateForm } =
    useFormData(
      ({ city, email, fullname, phoneNo, state, type, updateForm }) => ({
        city,
        email,
        fullname,
        phoneNo,
        state,
        type,
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
    },
  });

  const onSubmit = (data: FormInputs) => {
    console.log(data);
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
          <div className="px-6 lg:px-0">
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
