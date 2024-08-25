"use client";

import React from "react";
import { ContactDrawer } from "../Contact/ContactDrawer";
import { ButtonProps } from "../../domain/types/button";

export function OpenDrawerButton({ children }: ButtonProps) {
   return (
      <div>
         <ContactDrawer>
            <div className="cursor-pointer">{children}</div>
         </ContactDrawer>
      </div>
   );
}
