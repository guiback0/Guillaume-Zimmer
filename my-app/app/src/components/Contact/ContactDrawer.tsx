"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import {
   Drawer,
   DrawerClose,
   DrawerContent,
   DrawerDescription,
   DrawerFooter,
   DrawerHeader,
   DrawerTitle,
} from "../ui/drawer";

import { ContactForm } from "../Contact/ContactForm";

export const ContactDrawer = () => {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <div>
         <Button variant="outline" onClick={() => setIsOpen(true)}>
            Open
         </Button>
         <Drawer open={isOpen} onOpenChange={setIsOpen}>
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
      </div>
   );
};
