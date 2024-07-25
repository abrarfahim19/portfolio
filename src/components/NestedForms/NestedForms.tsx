"use client";

import { useState } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { Button } from "../ui/button";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

export const NestedForms = () => {
  const form = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FirstFrom />
          <SecondFrom />
          <StateData />
          <SubmitButton />
        </form>
      </FormProvider>
    </div>
  );
};

const FirstFrom = () => {
  const form = useFormContext();
  return (
    <div>
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input placeholder="shadcn" {...field} />
            </FormControl>
            <FormDescription>This is your public display name.</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

const SecondFrom = () => {
  const form = useFormContext();
  return (
    <div>
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="shadcn" {...field} />
            </FormControl>
            <FormDescription>This is your public display name.</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

const StateData = () => {
  const form = useFormContext();
  const [state, setstate] = useState<number>(0);

  const increment = () => {
    setstate((prev) => prev + 1);
  };
  form.setValue("state", state);
  return (
    <div>
      <Button variant={"outline"} onClick={increment}>
        Increment
      </Button>
      <div>{state}</div>
    </div>
  );
};
const SubmitButton = () => {
  return (
    <Button className="mt-10" type="submit">
      Submit
    </Button>
  );
};
