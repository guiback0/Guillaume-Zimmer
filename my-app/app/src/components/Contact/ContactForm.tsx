"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import {
   Form,
   FormControl,
   FormDescription,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const formSchema = z.object({
   email: z.string().min(2, {
      message: "Username must be at least 2 characters.",
   }),
});

const onSubmit = (data) => {
   console.log(data);
   // Handle form submission, e.g., send data to the server
};

export function ContactForm() {
   // ...
   const form = useForm();
   return (
      <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 m-4">
            <FormField
               control={form.control}
               name="email"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>Votre e-mail</FormLabel>
                     <FormControl>
                        <Input placeholder="E-mail" {...field} />
                     </FormControl>

                     <FormDescription>
                        <div className="grid w-full gap-1.5">
                           <Label htmlFor="message-2">Votre message</Label>
                           <Textarea
                              placeholder="Écrivez votre message ici"
                              id="message-2"
                           />

                        </div>
                     </FormDescription>
                     <FormMessage />
                  </FormItem>
               )}
            />
            <div className="flex justify-center">
         <Button type="submit">Submit</Button>
      </div>
         </form>
      </Form>
   );
}
