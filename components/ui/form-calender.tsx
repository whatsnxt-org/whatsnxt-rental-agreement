"use client";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { format as dateFormat } from "date-fns";
import { CalendarIcon, Info } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { Control, FieldValues, Path } from "react-hook-form";

type FormCalenderProps<T extends FieldValues> = {
  control: Control<T, any>;
  name: Path<T>;
  label: string;
  format?: string;
  placeholder?: string;
  description?: string;
};
export const FormCalender = <T extends FieldValues>({
  control,
  name,
  label,
  description,
  format = "PPP",
  placeholder,
}: FormCalenderProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel className="text-muted-foreground text-xs">
            {label}
          </FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={"ghost"}
                  className={cn(
                    "w-full px-0 text-left font-semibold text-lg hover:bg-inherit focus-visible:bg-inherit border-b",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value ? (
                    dateFormat(field.value, format)
                  ) : (
                    <span>{placeholder ?? "Pick a date"}</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          {description && (
            <FormDescription className="flex items-center gap-2">
              <Info className="w-4 h-4" />
              <span className="text-xs">{description}</span>
            </FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
