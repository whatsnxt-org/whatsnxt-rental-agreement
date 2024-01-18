import { TextField } from "@mui/material"
import { PiWarningCircleFill } from "react-icons/pi"
import { CustomMenu } from "../menu/page";
import { Button } from "@/components/button/page";
import { Input } from "@/components/input/page";

export const PropertyDetails = ({ stepForward }: { stepForward: Function }) => {
    const handleSubmit = (e: any) => {
      e.preventDefault();
      stepForward()
    };

    return  <form onSubmit={handleSubmit} className="w-full h-full justify-around flex flex-col gap-5">
    <div className="flex flex-col gap-4 w-full h-3/4">
    <h2 className="text-2xl mt-12 font-medium md:hidden">Property Details</h2>
    <div className="flex flex-wrap gap-3 items-center">
      <div className="border border-gray-200 rounded-lg p-4 pl-5 pr-6">
        <p className="text-sm">1 RK</p>
      </div>
      <div className="border border-gray-200 rounded-lg p-4 pl-5 pr-6">
        <p className="text-sm">1 BHK</p>
      </div><div className="border border-gray-200 rounded-lg p-4 pl-5 pr-6">
        <p className="text-sm">1.5 BHK</p>
      </div><div className="border border-gray-200 rounded-lg p-4 pl-5 pr-6">
        <p className="text-sm">2 BHK</p>
      </div><div className="border border-gray-200 rounded-lg p-4 pl-5 pr-6">
        <p className="text-sm">2.5 BHK</p>
      </div>
      <div className="border border-gray-200 rounded-lg p-4 pl-5 pr-6">
        <p className="text-sm">3 BHK</p>
      </div>
      <div className="border border-gray-200 rounded-lg p-4 pl-5 pr-6">
        <p className="text-sm">3.5 BHK</p>
      </div>
      <div className="border border-gray-200 rounded-lg p-4 pl-5 pr-6">
        <p className="text-sm">4 BHK</p>
      </div>
      
      </div>
    <div className="flex flex-col gap-5 items-start overflow-x-scroll w-full">
    <div className="flex flex-col gap-5 items-start w-full">
      <label>Address</label>
      <div className="flex gap-2">
        <input type="checkbox" />
        <p className="text-sm font-bold">Same as Landlord Address</p>
      </div>
      <Input
        label="House No."
      />
      <Input
        label="Property Address"
      />
      <Input
        label="Locality"
      />
       <Input
        label="Pincode"
      />
      <Input
        label="City"
      />
    </div>
    </div>
    
    </div>
    <br /><br /><br /><br /><br />

    <Button
     title="Next,Add Property Details"
     />
  </form>
}