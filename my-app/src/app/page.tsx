
import { Contact } from "../components/Status/Contact";
/* import { Header } from "../components/Header"; */
import { Hero } from "../components/Hero";
import { Skills } from "../components/Skills/Skills";
import { Spacing } from "../components/Shared/Spacing";
import { Status } from "../components/Status/Status";
import { PrismaClient } from "@prisma/client";
import { Toaster } from "../components/ui/toaster"


export default async function Home() {
   const prisma = new PrismaClient();
   const skills = await prisma.skills.findMany();
   const socials = await prisma.socials.findMany();
   const works = await prisma.works.findMany();

   return (
      <main>
         <Spacing size="sm" />
         <Hero />
         <Spacing size="sm" />
         <Status socials={socials} works={works} />

         <Spacing size="sm" />
         <Skills skills={skills} />
         <Spacing size="sm" />
         <Contact />
         <Toaster />
         <Spacing size="md" />
      </main>
   );
}
