import { TextField } from "@mui/material";
import { CustomMenu } from "../menu/page";
import React from "react";
import { PiWarningCircleFill } from "react-icons/pi";
import { Button } from "@/components/button/page";
import { Input } from "@/components/input/page";

export const ContractDetails = ({ stepForward }: { stepForward: Function }) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    stepForward();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-full justify-around flex flex-col gap-5"
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl mt-12 font-medium md:hidden">
          Contract Details
        </h2>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1 w-full">
            <Input
              label="Agreement Start Date"
              // defaultValue={"20/09/24"}
            />
            <div className="flex gap-2">
              <PiWarningCircleFill color="lightgray" fontSize={20} />
              <p className="text-slate-400 text-xs">
                You will need to renew this agreement after 11 months from the
                date of agreement
              </p>
            </div>
          </div>

          <Input label="Monthly Rent" />
          <div className="flex gap-2">
            <input type="checkbox" />
            <p className="text-sm font-bold">
              Electricity/Water charges will be paid by the tenant/s
            </p>
          </div>
          <CustomMenu />
          <Input label="Security Amount" />
          <div className="flex flex-col gap-3">
            <p className="text-xs text-slate-500">Notice Period (In Months)</p>
            <div className="flex flex-wrap gap-3 items-center">
              <div className="border border-gray-200 rounded-lg p-4 pl-5 pr-6">
                <p className="text-sm">1</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 pl-5 pr-6">
                <p className="text-sm">1</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 pl-5 pr-6">
                <p className="text-sm">1</p>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" />
            <p className="text-sm font-bold">Increase rent after 11 months</p>
          </div>
          <Input label="Increase Percentage (%)" />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Button title="Next,Add Contract Details" />
    </form>
  );
};
