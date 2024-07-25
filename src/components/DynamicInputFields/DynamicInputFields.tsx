"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const FormSchema = z.record(
  z.string().min(1, {
    message: "Value should be at least 1 character long",
  }),
);

interface IFieldsData {}
export const DynamicInputFields = () => {
  const [fieldsData, setFieldsData] = useState<z.infer<typeof FormSchema>>({
    Title: "",
    Description: "",
  });
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: fieldsData,
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {Object.keys(fieldsData).map((key) => (
            <FormField
              key={key}
              control={form.control}
              name={key}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{key}</FormLabel>
                  <FormControl>
                    <Input placeholder={key} {...field} />
                  </FormControl>
                  {/* <FormDescription>This is {key} name.</FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button type="submit" className="my-2">
            Submit Now
          </Button>
        </form>
      </Form>
      <AddFieldDialogue setFieldsData={setFieldsData} />
    </div>
  );
};

interface AddFieldDialogueProps {
  setFieldsData: React.Dispatch<
    React.SetStateAction<z.infer<typeof FormSchema>>
  >;
}

const FieldSchema = z.object({
  label: z.string().min(2, {
    message: "Title shoudl be at leas 2 characters long.",
  }),
});

const AddFieldDialogue: React.FC<AddFieldDialogueProps> = ({
  setFieldsData,
}) => {
  const form = useForm<z.infer<typeof FieldSchema>>({
    resolver: zodResolver(FieldSchema),
    defaultValues: {
      label: "",
    },
  });

  function onSubmit(data: z.infer<typeof FieldSchema>) {
    const label = data.label;
    if (label !== null) {
      setFieldsData((prev) => ({ ...prev, [label]: "" }));
    }
    form.reset(); // Clear the form
  }

  return (
    <Dialog>
      <DialogTrigger>
        <Button
          asChild
          variant={"outline"}
          className="my-4 flex gap-2 border-brand bg-transparent"
        >
          <p className="text-brand">Add New</p>
        </Button>
      </DialogTrigger>

      <DialogContent className="w-full px-10">
        <DialogHeader className="">
          <DialogTitle className="text-center text-lg font-bold text-black">
            Add Data Field
          </DialogTitle>
          <DialogDescription className=""></DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="label"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Title Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter className="sm:justify-center">
              <DialogClose className="my-4 w-full">
                <Button
                  type="submit"
                  className="w-full py-8 text-lg font-semibold"
                >
                  Add
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
