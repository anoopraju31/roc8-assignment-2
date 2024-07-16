import { z } from "zod";

export const signUpFormSchema = z.object({
  email: z.string({ required_error: "email is required" }).email(),
  name: z.string({ required_error: "name is required" }).min(1),
  password: z.string({ required_error: "password is required" }).min(6),
});

export type SignUpFormData = z.infer<typeof signUpFormSchema>;

export const signInFormSchema = z.object({
  email: z.string({ required_error: "email is required" }).email(),
  password: z.string({ required_error: "password is required" }).min(6),
});

export type SignInFormData = z.infer<typeof signInFormSchema>;

export const otpFormSchema = z.object({
  pin: z
    .string({
      message: "Your one-time password must be 8 characters.",
    })
    .min(8),
});

export type OtpFormData = z.infer<typeof otpFormSchema>;
