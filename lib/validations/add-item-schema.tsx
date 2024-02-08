import { z } from "zod";
import { requiredStringSchema } from "./shared";

export const addItemSchema = z.object({
  name: requiredStringSchema,
});
export type AddItemSchema = z.infer<typeof addItemSchema>;
