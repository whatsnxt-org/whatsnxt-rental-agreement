"use client";

import { Control, FieldValues, Path } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { CustomInput } from "@/components/ui/custom-input";
import { cn } from "@/lib/utils";

type FormInputProps<T extends FieldValues> = {
  control: Control<T, any>;
  name: Path<T>;
  type?: string;
  placeholder: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
};
export const FormInput = <T extends FieldValues>({
  name,
  control,
  type,
  placeholder,
  disabled,
  onChange,
}: FormInputProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState: { invalid } }) => (
        <FormItem>
          <FormControl>
            <CustomInput
              type={type}
              placeholder={placeholder}
              className={cn("bg-inherit disabled:cursor-default")}
              {...field}
              error={invalid}
              disabled={disabled}
              onChange={(e) => {
                field.onChange(e);
                onChange?.(e.target.value);
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
