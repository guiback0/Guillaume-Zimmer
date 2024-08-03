"use client";

/**
 * exemple pour utilisation
 */

import { useState, PropsWithChildren } from "react";
import { Button } from "../ui/button";
import {
   Drawer,
   DrawerClose,
   DrawerContent,
   DrawerDescription,
   DrawerFooter,
   DrawerHeader,
   DrawerTitle,
   DrawerTrigger,
} from "../ui/drawer";

import { ContactForm } from "../Contact/ContactForm";

export const ContactDrawer = (props: PropsWithChildren<{}>) => {
   return (
         <Drawer>
            <DrawerTrigger asChild>
               {props.children}
            </DrawerTrigger>
            <DrawerContent className="p-6">
               <DrawerHeader>
                  <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                  <DrawerDescription>
                     This action cannot be undone.
                  </DrawerDescription>
               </DrawerHeader>
               <ContactForm />
               <DrawerFooter>
                  <DrawerClose asChild>
                     <Button variant="outline">Cancel</Button>
                  </DrawerClose>
               </DrawerFooter>
            </DrawerContent>
         </Drawer>
   );
};
