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
   username: z.string().min(2, {
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
         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
               control={form.control}
               name="username"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>Email</FormLabel>
                     <FormControl>
                        <Input placeholder="Email" {...field} />
                     </FormControl>
                     <FormLabel>Nom Complet</FormLabel>
                     <FormControl>
                        <Input placeholder="Email" {...field} />
                     </FormControl>
                     <FormDescription>
                        <div className="grid w-full gap-1.5">
                           <Label htmlFor="message-2">Your Message</Label>
                           <Textarea
                              placeholder="Type your message here."
                              id="message-2"
                           />
                           <p className="text-sm text-muted-foreground">
                              Your message will be copied to the support team.
                           </p>
                        </div>
                     </FormDescription>
                     <FormMessage />
                  </FormItem>
               )}
            />
            <Button type="submit">Submit</Button>
         </form>
      </Form>
   );
}
