"use client";

import React, { ReactNode } from "react";
import { Control, FieldValues, Path } from "react-hook-form";
import {
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
import { cn } from "@/lib/utils";

type FormSelectProps<T extends FieldValues> = {
  control: Control<T, any>;
  name: Path<T>;
  label: string;
  placeholder: ReactNode;
  onChange?: (value: string) => void;
  children: ReactNode;
};
export const FormSelect = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  onChange,
  children,
}: FormSelectProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState: { invalid } }) => (
        <FormItem>
          <Select
            onValueChange={(v) => {
              field.onChange(v);
              onChange?.(v);
            }}
            defaultValue={field.value}
          >
            <FormLabel
              className={cn(
                "text-muted-foreground text-xs font-semibold",
                invalid && "text-destructive"
              )}
            >
              {label}
            </FormLabel>
            <FormControl>
              <SelectTrigger
                className={cn(
                  "bg-inherit text-lg border-0 border-b",
                  field.value !== "" && "font-semibold"
                )}
              >
                <SelectValue
                  placeholder={
                    <span className="text-muted-foreground">{placeholder}</span>
                  }
                />
              </SelectTrigger>
            </FormControl>
            <SelectContent>{children}</SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export const FormSelectItem = SelectItem;
