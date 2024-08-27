"use client";

import { Work } from "./Work";
import { useState, useEffect } from "react";
import { Card } from "../ui/card";
import { Section } from "../Shared/Section";
import { SideProject } from "./SideProject";
import { RepositoryProps } from "@/src/domain/types/repository";
import { Socials } from "./Socials"; // Ensure SocialsProps is imported
import { transformRepositories } from "../../utils/transformRepositories";
import { Language } from "./LanguagePie/Language";
import {
   getTop10ReposBySize,
   getRepos,
   getTop3ReposBySize,
} from "@/src/domain/usecases/getRepos";
import { GithubLink } from "../Shared/GithubLink";
import { SocialProps } from "../../domain/types/social";
import { WorkProps } from "../../domain/types/work";
import { LoadingIndicator } from "../Shared/LoadingIndicator";

export const Status = ({
   works,
   socials,
}: {
   works: WorkProps[];
   socials: SocialProps[];
}) => {
   // Provide default values and types
   const [loading, setLoading] = useState(true);
   const [repositories, setRepositories] = useState<RepositoryProps[]>([]);

   useEffect(() => {
      const loadRepositories = async () => {
         const isMobile = window.innerWidth <= 767;
         const data = isMobile
            ? await getTop3ReposBySize("guiback0")
            : await getTop10ReposBySize("guiback0");
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
            <Card className="w-full p-4 flex flex-col gap-2">
               <p className="text-lg text-muted-foreground">Side Project</p>
               <div className="flex flex-col gap-4">
                  <LoadingIndicator/>
               </div>
               <GithubLink />
            </Card>
         </div>

         <div className="flex-[2] flex flex-col gap-4 w-full">
            <Card className="p-4 flex-1 w-full">
               <p className="text-lg text-muted-foreground">Expériences</p>
               <div className="flex flex-col gap-4">
                  {works.map((work, index) => (
                     <Work key={index} works={work} />
                  ))}
               </div>
            </Card>
            <Card className="p-4 flex-[2] flex flex-col gap-2 w-full">
               <p className="text-lg text-muted-foreground">Contactez-moi</p>
               {socials.map((social, index) => (
                  <Socials key={index} socials={social} />
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
            <Card className="w-full p-4 flex flex-col gap-2">
               <p className="text-lg text-muted-foreground">Side Project</p>
               <div className="flex flex-col gap-4">
                  {sideProjects.map((project, index) => (
                     <SideProject key={index} {...project} />
                  ))}
               </div>
               <GithubLink />
            </Card>
         </div>

         <div className="flex-[2] flex flex-col gap-4 w-full">
            <Card className="p-4 flex-1 w-full">
               <p className="text-lg text-muted-foreground">Expériences</p>
               <div className="flex flex-col gap-4">
                  {works.map((work, index) => (
                     <Work key={index} works={work} />
                  ))}
               </div>
            </Card>
            <Card className="p-4 flex-[2] flex flex-col gap-2 w-full">
               <p className="text-lg text-muted-foreground">Contactez-moi</p>
               {socials.map((social, index) => (
                  <Socials key={index} socials={social} />
               ))}
            </Card>
            <Language />
         </div>
      </Section>
   );
};
