"use client";

import { type FC } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInFormSchema, type SignInFormData } from "~/lib/validations";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";

const SignInForm: FC = () => {
  const form = useForm<SignInFormData>({
    resolver: zodResolver(signInFormSchema),
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
          <h1 className="mb-8 text-center text-3xl font-bold">Login</h1>

          <h2 className="mb-3 text-center text-2xl font-medium">
            Welcome back to ECOMMERCE
          </h2>
          <p className="text-center"> The next gen business marketplace </p>
        </div>

        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
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
            <FormItem>
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

        <div className="text-center">
          <span className="text-gray-500"> Don&apos;t have an Account? </span>
          <Link href="/sign-up" className="font-medium uppercase">
            Sign Up
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default SignInForm;
