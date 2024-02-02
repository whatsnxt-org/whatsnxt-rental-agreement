"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  CustomRadioGroupLabel,
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { HTMLAttributes, ReactElement, ReactNode } from "react";
import {
  Control,
  ControllerRenderProps,
  FieldValues,
  Path,
} from "react-hook-form";

type FormRadioGroupProps<T extends FieldValues> = {
  control: Control<T, any>;
  name: Path<T>;
  label: ReactNode;
  className?: HTMLAttributes<HTMLDivElement>["className"];
  render: (field: ControllerRenderProps<T, Path<T>>) => ReactElement;
};
export const FormRadioGroup = <T extends FieldValues>({
  control,
  name,
  label,
  className,
  render,
}: FormRadioGroupProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className={className}
            >
              {render(field)}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

type FormRadioItem<T extends FieldValues> = {
  field: ControllerRenderProps<T, Path<T>>;
  value: string;
  children: ReactNode;
};

export const FormRadioItem = <T extends FieldValues>({
  field,
  value,
  children,
}: FormRadioItem<T>) => (
  <FormItem className="flex items-center">
    <FormControl>
      <RadioGroupItem value={value} />
    </FormControl>
    <FormLabel className="w-full">
      <CustomRadioGroupLabel isSelected={value === field.value}>
        {children}
      </CustomRadioGroupLabel>
    </FormLabel>
  </FormItem>
);
