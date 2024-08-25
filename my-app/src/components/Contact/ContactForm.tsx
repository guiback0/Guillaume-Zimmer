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
import { useToast } from "../ui/use-toast";

const formSchema = z.object({
   email: z.string().email({ message: "Adresse e-mail invalide" }),
   message: z
      .string()
      .min(10, {
         message: "Votre message doit faire au moins 10 caractères",
      })
      .max(500, {
         message: "Votre message ne doit pas dépasser 500 caractères",
      }),
});

export function ProfileForm() {
   const { toast } = useToast();
   // 1. Define your form.
   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         email: "",
         message: "",
      },
   });

   function onSubmit(values: z.infer<typeof formSchema>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      console.log(values);
      toast({
         title: "Votre message a bien été envoyé à :",
         description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
               <code className="text-white">
                  guillaume.zimmer.pro@gmail.com
               </code>
            </pre>
         ),
      });
   }
   return (
      <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
               control={form.control}
               name="email"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>E-mail</FormLabel>
                     <FormControl>
                        <Input placeholder="Votre adresse e-mail" {...field} />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />
            <FormField
               control={form.control}
               name="message"
               render={({ field }) => (
                  <FormItem>
                     <Label>Votre message</Label>
                     <FormControl>
                        <Textarea
                           placeholder="Écrivez votre message ici"
                           {...field}
                        />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />
            <div className="flex justify-center">
               <Button variant="outline" type="submit">
                  Submit
               </Button>
            </div>
         </form>
      </Form>
   );

   // 2. Define a submit handler.
}
