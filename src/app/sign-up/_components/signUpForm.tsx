"use client";

import { type FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type SignUpFormData, signUpFormSchema } from "~/lib/validations";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";

const SignUpForm: FC = () => {
  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormSchema),
  });

  return (
    <Form {...form}>
      <form className="flex flex-col gap-6 rounded-xl border-gray-400 px-6 py-10 sm:border sm:px-14">
        <div>
          <h1 className="text-center text-3xl font-bold">
            Create your account
          </h1>
        </div>
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem className="">
              <FormLabel> Name </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="border border-gray-400 outline-none focus:border-none"
                  placeholder="Enter your name"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem className="">
              <FormLabel> Email </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  className="border border-gray-400 outline-none focus:border-none"
                  placeholder="Enter your Email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem className="">
              <FormLabel> Password </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="password"
                  className="border border-gray-400 outline-none focus:border-none"
                  placeholder="Enter your password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="mt-2 w-full bg-black uppercase text-white"
        >
          Create Account
        </Button>
      </form>
    </Form>
  );
};

export default SignUpForm;
