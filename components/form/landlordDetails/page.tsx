import { Button } from "@/components/button/page";
import { Input } from "@/components/input/page";
import { TextField } from "@mui/material";

export const LandlordDetails = ({ stepForward }: { stepForward: Function }) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    stepForward();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-full justify-around flex flex-col gap-5"
    >
      <div className="flex flex-col gap-4 w-full h-3/4">
        <h2 className="text-2xl mt-12 font-medium md:hidden">Landlord Details</h2>
        <div className="flex flex-col gap-5 items-start overflow-x-scroll w-full">
          <div className="flex flex-col gap-5 items-start w-full border border-gray-200 rounded-xl p-4">
            <Input
              label="Full Name"
            />
            <Input
              label="Father / Mother's Name"
            />
            <Input
              label="Phone Number"
            />
            <Input
              label="Permanent Address"
            />
            <Input
              label="Email Id"
            />
            <Input
              label="PAN No. (optional)"
            />
          </div>
          <button className="text-wnr-purple text-sm font-bold">
            + Add Co-owner
          </button>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />

      <Button title="Next,Add Tenant Details" />
    </form>
  );
};
