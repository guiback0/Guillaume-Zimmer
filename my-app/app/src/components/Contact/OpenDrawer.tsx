"use client";

/**
 * a prendre en exemple pour utilisation
 */

import React from "react";
import { ContactDrawer } from "./ContactDrawer";
import { Button } from "../ui/button";

export function OpenDrawerButton({ children }) {
   return (
      <div>
         <ContactDrawer>
            <div className="cursor-pointer">{children}</div>
         </ContactDrawer>
      </div>
   );
}
