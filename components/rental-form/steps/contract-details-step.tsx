"use client";

import FormAction from "@/components/rental-form/form-action";
import { FormHeader, FormTitle } from "@/components/rental-form/form-header";
import FormScrollableArea from "@/components/rental-form/form-scrollable-area";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormCalender } from "@/components/ui/form-calender";
import { FormCheckbox } from "@/components/ui/form-checkbox";
import { FormInput } from "@/components/ui/form-input";
import {
  FormRadioGroup,
  FormRadioItem,
} from "@/components/ui/form-radio-group";
import { FormSelect, FormSelectItem } from "@/components/ui/form-select";
import { daysInMonth } from "@/constants/days-of-month";
import { stepsData } from "@/constants/steps-data";
import { useContractDetails, useSteps } from "@/hooks/use-store-hooks";
import {
  ContractDetailsSchema,
  contractDetailsSchema,
} from "@/lib/validations/contract-details-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ClausesSamplesModal from "../modals/clauses-samples-modal";

const ContractDeatils = () => {
  const [clauseModalOpen, setClauseModalOpen] = useState(false);
  const contractDetails = useContractDetails();
  const { nextStep, currentStep, prevStep } = useSteps();

  const form = useForm<ContractDetailsSchema>({
    resolver: zodResolver(contractDetailsSchema),
    defaultValues: contractDetails,
  });

  const isIncreasedRent = form.watch("increaseRent");
  const clauses = form.watch("clauses");

  const handleClauses = () => {
    if (clauses[clauses.length - 1]?.text?.length > 0)
      form.setValue("clauses", [...clauses, { text: "" }]);
    console.log("clauses");
  };

  const onSubmit = (data: ContractDetailsSchema) => {
    contractDetails.updateForm(data);
    nextStep();
  };

  useEffect(() => {
    if (!isIncreasedRent) form.clearErrors("increaseRentPercentage");
  }, [isIncreasedRent]);

  return (
    <>
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
              <FormCalender
                control={form.control}
                name="startDate"
                format="PPP"
                label="Agreement Start Date"
                description="You will need to renew this agreement after 11 month from the date of agreement"
              />

              <div>
                <FormInput
                  control={form.control}
                  name="monthlyRent"
                  placeholder="Monthly Rent"
                />

                <div className="py-2">
                  <FormCheckbox
                    control={form.control}
                    name="tenantCharges"
                    label="Electricity/Water charges will be paid by the tenant/s"
                  />
                </div>
              </div>

              <FormSelect
                control={form.control}
                name="rentPaymentDate"
                label="Rent Payment Date"
                placeholder="Rent Payment Date"
              >
                {daysInMonth.map((day) => (
                  <FormSelectItem key={`day-${day}`} value={day}>
                    {day}
                  </FormSelectItem>
                ))}
              </FormSelect>

              <FormInput
                control={form.control}
                name="securityAmount"
                placeholder="Security Amount"
              />

              <FormRadioGroup
                control={form.control}
                name="noticePeriod"
                label="Notice Period (In Months)"
                className="grid grid-cols-5 gap-4"
                render={(field) => (
                  <>
                    <FormRadioItem value={"1"} field={field}>
                      1
                    </FormRadioItem>
                    <FormRadioItem value={"2"} field={field}>
                      2
                    </FormRadioItem>
                    <FormRadioItem value={"3"} field={field}>
                      3
                    </FormRadioItem>
                  </>
                )}
              />

              <div className="pt-4 space-y-4">
                <FormCheckbox
                  control={form.control}
                  name="increaseRent"
                  label="Increase rent after 11 months"
                />

                {isIncreasedRent && (
                  <FormInput
                    control={form.control}
                    name="increaseRentPercentage"
                    placeholder="Increase Percentage (%)"
                    disabled={!isIncreasedRent}
                  />
                )}
              </div>

              {clauses.map((_, i) => (
                <FormInput
                  key={i}
                  control={form.control}
                  name={`clauses.${i}.text`}
                  placeholder="Any other clause? (optional)"
                  onChange={handleClauses}
                />
              ))}

              <div className="grid grid-cols-[1fr_auto] gap-4">
                <span className="text-muted-foreground text-xs">
                  Write about houses rules, restrictions or other important
                  details
                </span>
                <span
                  className="text-wnr-purple text-xs cursor-pointer"
                  onClick={() => setClauseModalOpen(true)}
                >
                  View Sample
                </span>
              </div>
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
      <ClausesSamplesModal
        isOpen={clauseModalOpen}
        onOpenChange={setClauseModalOpen}
      />
    </>
  );
};

export default ContractDeatils;
