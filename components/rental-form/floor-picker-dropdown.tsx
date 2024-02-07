"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { ControllerRenderProps, FieldValues, Path } from "react-hook-form";
import { Button } from "../ui/button";
import { FormRadioItem } from "../ui/form-radio-group";
import { ScrollArea } from "../ui/scroll-area";

const floorsArray = new Array(47).fill("").map((_, i) => `${i + 4}`);
type FloorPickerDropdownProps<T extends FieldValues> = {
  // onFloorSelecion: (floorNo: string) => void;
  floorNo: string;
  isSelected: boolean;
  field: ControllerRenderProps<T, Path<T>>;
};
export const FloorPickerDropdown = <T extends FieldValues>({
  field,
  floorNo,
  isSelected,
}: FloorPickerDropdownProps<T>) => {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"asRadioGroup"}
          size={"asRadioGroup"}
          className={cn(
            "mt-2 w-20",
            isSelected && "bg-muted/25 hover:bg-muted/25"
          )}
        >
          <span>{isSelected ? floorNo : "4+"}</span>
          {!isSelected && <ChevronDown className="ms-4 w-5 h-5" />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-md shadow-sm" align="end">
        <div className="pt-6 pb-4 px-6">
          <span>Select Floor No.</span>
        </div>
        <ScrollArea className="h-60 w-72 lg:w-96 overflow-y-hidden">
          <div className="px-6 pb-4">
            <div className="grid grid-cols-4 lg:grid-cols-5 gap-4">
              {floorsArray.map((floor) => (
                <FormRadioItem
                  value={floor}
                  field={field}
                  key={floor}
                  onClick={() => setOpen(false)}
                >
                  {floor}
                </FormRadioItem>
              ))}
            </div>
          </div>
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FloorPickerDropdown;
