"use client";

import { Contact } from "./src/pages/Contact";
import { Header } from "./src/pages/Header";
import { Hero } from "./src/pages/Hero";
import { Skills } from "./src/pages/Skills";
import { Spacing } from "./src/components/Shared/Spacing";
import { Status } from "./src/pages/Status";
import { PrismaClient } from "@prisma/client";

export default async function Home() {
   const prisma = new PrismaClient();
   const skills = await prisma.skills.findMany();
   console.log(skills);
   return (
      <main>
         <Spacing size="sm" />
         {/*   <Header />
         <Spacing size="sm" /> */}
         <Hero />
         <Spacing size="sm" />
         <Status />
         <Spacing size="sm" />
         <Skills skills={skills} />
         <Spacing size="sm" />
         <Contact />
         <Spacing size="md" />
      </main>
   );
}
