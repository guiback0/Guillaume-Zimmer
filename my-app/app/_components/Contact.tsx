"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
   Drawer,
   DrawerClose,
   DrawerContent,
   DrawerDescription,
   DrawerFooter,
   DrawerHeader,
   DrawerTitle,
} from "@/components/ui/drawer";

import { Section } from "./Section";
import { ProfileForm } from "./ContactForm";

export const Email = () => {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <Section>
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
                  <ProfileForm />
                  <DrawerFooter>
                     <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                     </DrawerClose>
                  </DrawerFooter>
               </DrawerContent>
            </Drawer>
         </div>
      </Section>
   );
};
