"use client";

import { Control, FieldValues, Path } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { CustomInput } from "@/components/ui/custom-input";

type FormInputProps<T extends FieldValues> = {
  control: Control<T, any>;
  name: Path<T>;
  type?: string;
  placeholder: string;
  onChange?: (value: string) => void;
};
export const FormInput = <T extends FieldValues>({
  name,
  control,
  type,
  placeholder,
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
              className="bg-inherit"
              {...field}
              error={invalid}
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
