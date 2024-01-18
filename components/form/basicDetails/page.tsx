import { TextField } from "@mui/material";
import { CustomMenu } from "../menu/page";
import { FaUserTie } from "react-icons/fa6";
import { Button } from "@/components/button/page";
import { Input } from "@/components/input/page";

export const BasicDetails = ({ stepForward }: { stepForward: Function }) => {
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
        <h2 className="text-2xl mt-12 font-medium md:hidden">Enter Basic Details</h2>
        <div className="flex flex-col gap-5">
          <Input label="Full Name" />
          <Input label="Phone Number" />
          <Input label="Email Id" />
          
          <CustomMenu />
          <CustomMenu />
          <CustomMenu />

          <p className="text-xs">I am a/an</p>
          <div className="flex gap-4 w-full flex-wrap">
            <button className="w-auto justify-center flex gap-3 items-center border border-gray-300 p-4 bg-gray-100 bg-opacity-50 text-sm rounded-lg">
              <FaUserTie fontSize={20} className="text-wnr-purple" />
              Tenant
            </button>
            <button className="w-auto justify-center flex gap-3 items-center border border-gray-300 p-4 bg-gray-100 bg-opacity-50 text-sm rounded-lg">
              <FaUserTie fontSize={20} className="text-wnr-purple" />
              Landlord
            </button>
            <button className="w-auto justify-center flex gap-3 items-center border border-gray-300 p-4 bg-gray-100 bg-opacity-50 text-sm rounded-lg">
              <FaUserTie fontSize={20} className="text-wnr-purple" />
              Agent
            </button>
          </div>
        </div>
      </div>
      <br /><br /><br /><br /><br />
      <Button title="Next,Add Landlord Details" />
    </form>
  );
};
