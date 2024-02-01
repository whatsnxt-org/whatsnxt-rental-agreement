import { z } from "zod";

export const requiredStringSchema = z.string().min(1, "Required");
