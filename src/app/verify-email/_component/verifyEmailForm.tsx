"use client";

import { type FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type OtpFormData, otpFormSchema } from "~/lib/validations";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "~/components/ui/input-otp";
import { Button } from "~/components/ui/button";

const VerifyEmailForm: FC = () => {
  const form = useForm<OtpFormData>({
    resolver: zodResolver(otpFormSchema),
  });

  const onSubmit = () => {
    console.log("ok");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 rounded-xl border-gray-400 px-6 py-10 sm:border sm:px-14"
      >
        <div>
          <h1 className="text-center text-3xl font-bold">Verify your email</h1>
        </div>
        <FormDescription className="flex flex-col items-center text-black">
          <span>Enter the 8 digit code you have received on</span>
          <span className="font-bold">swa***@gmail.com</span>
        </FormDescription>
        <FormField
          name="pin"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel> Code </FormLabel>
              <FormControl>
                <InputOTP maxLength={8} {...field} className="rounded-[0px]">
                  <InputOTPGroup className="flex w-full flex-row justify-between gap-2">
                    <InputOTPSlot
                      index={0}
                      className="!rounded-l-none border border-black"
                    />
                    <InputOTPSlot index={1} className="border border-black" />
                    <InputOTPSlot index={2} className="border border-black" />
                    <InputOTPSlot index={3} className="border border-black" />
                    <InputOTPSlot index={4} className="border border-black" />
                    <InputOTPSlot
                      index={5}
                      className="!rounded-r-none border border-black"
                    />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="mt-2 w-full bg-black uppercase text-white"
        >
          Verify
        </Button>
      </form>
    </Form>
  );
};

export default VerifyEmailForm;
