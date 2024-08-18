"use client";

import { Work } from "../components/Status/Work";
import works from "../../src/data/works.json";
import socials from "../../src/data/socials.json";
import { createContext, useContext, useState, useEffect } from "react";
import { Card } from "../components/ui/card";
import { Section } from "../components/Shared/Section";
import { SideProject } from "../components/Status/SideProject";
import { RepositoryProps } from "@/app/src/domain/types/repository";
import { Socials } from "../components/Status/Socials";
import { transformRepositories } from "../utils/transformRepositories";
import { Language } from "../components/Status/LanguagePie/Language";
import { getTop10ReposBySize } from "@/app/src/domain/usecases/getRepos";
import { updatedChartData } from "../components/Status/LanguagePie/LanguagePieChart";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../components/ui/button";
import { GithubIcon } from "@/public/icons/GithubIcon";

export const Status = () => {
   const [loading, setLoading] = useState(true);

   const [repositories, setRepositories] = useState<RepositoryProps[]>([]);

   useEffect(() => {
      const loadRepositories = async () => {
         const data = await getTop10ReposBySize("guiback0");
         setRepositories(data);
         setLoading(false);
      };

      loadRepositories();
   }, []);

   const sideProjects = transformRepositories(repositories);

   if (loading) {
      return (
         <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] w-full">
               <Card className=" w-full p-4 flex flex-col gap-2">
                  <p className="text-lg text-muted-foreground">Side Project</p>
                  <div className="flex items-center justify-center w-full h-full ">
                     <div role="status">
                        <svg
                           aria-hidden="true"
                           className="w-8 h-8 text-muted animate-spin fill-primary"
                           viewBox="0 0 100 101"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"
                           />
                           <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentFill"
                           />
                        </svg>
                        <span className="sr-only">Loading...</span>
                     </div>
                  </div>
               </Card>
            </div>

            <div className="flex-[2] flex flex-col gap-4">
               <Card className="p-4 flex-1">
                  <p className="text-lg text-muted-foreground">Work</p>
                  <div className="flex flex-col gap-4">
                     {works.map((work, index) => (
                        <Work key={index} {...work} />
                     ))}
                  </div>
               </Card>
               <Card className="p-4 flex-[2] flex flex-col gap-2">
                  <p className="text-lg text-muted-foreground">Contact me</p>
                  {socials.map((social, index) => (
                     <Socials key={index} {...social} />
                  ))}
               </Card>
               <Language />
            </div>
         </Section>
      );
   }

   return (
      <Section className="flex max-md:flex-col items-start gap-4">
         <div className="flex-[3] w-full">
            <Card className=" w-full p-4 flex flex-col gap-2">
               <p className="text-lg text-muted-foreground">Side Project</p>
               <div className="flex flex-col gap-4">
                  {sideProjects.map((project, index) => (
                     <SideProject key={index} {...project} />
                  ))}
               </div>
               <Link
                  href="https://github.com/guiback0?tab=repositories"
                  className={cn(
                     buttonVariants({ variant: "outline" }),
                     "w-full p-0 gap-2"
                  )}>
                  <span className="text-sm text-muted-foreground">
                     Voir plus sur GitHub
                  </span>
                  <GithubIcon size={16} className="text-foreground" />
               </Link>
            </Card>
         </div>

         <div className="flex-[2] flex flex-col gap-4">
            <Card className="p-4 flex-1">
               <p className="text-lg text-muted-foreground">Expériences</p>
               <div className="flex flex-col gap-4">
                  {works.map((work, index) => (
                     <Work key={index} {...work} />
                  ))}
               </div>
            </Card>
            <Card className="p-4 flex-[2] flex flex-col gap-2">
               <p className="text-lg text-muted-foreground">Contactez-moi</p>
               {socials.map((social, index) => (
                  <Socials key={index} {...social} />
               ))}
            </Card>

            <Language />
         </div>
      </Section>
   );
};
