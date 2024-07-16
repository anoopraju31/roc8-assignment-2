import { z } from "zod";

export const signUpFormSchema = z.object({
  email: z.string().optional(),
  name: z.string().min(1, "name is required"),
  password: z.string().min(6, "password is required"),
});

export type SignUpFormData = z.infer<typeof signUpFormSchema>;
