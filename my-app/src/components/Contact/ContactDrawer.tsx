/* eslint-disable react/no-unescaped-entities */
"use client";

import { PropsWithChildren } from "react";
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
import { ProfileForm } from "../Contact/ContactForm";

export const ContactDrawer = (props: PropsWithChildren<{}>) => {
   return (
      <Drawer>
         <DrawerTrigger asChild>{props.children}</DrawerTrigger>
         <DrawerContent className="p-6">
            <DrawerHeader>
               <DrawerTitle>Prenez Contact</DrawerTitle>
               <DrawerDescription>
                  N'hésitez pas à me laisser un message. Je suis impatient de
                  discuter de vos projets ou de toute opportunité
                  professionnelle. Ensemble, nous pouvons explorer comment
                  collaborer pour atteindre vos objectifs.
               </DrawerDescription>
            </DrawerHeader>
            <ProfileForm />
            <DrawerFooter>
               <div className="flex justify-center">
                  <DrawerClose asChild>
                     <Button variant="outline">Cancel</Button>
                  </DrawerClose>
               </div>
            </DrawerFooter>
         </DrawerContent>
      </Drawer>
   );
};
