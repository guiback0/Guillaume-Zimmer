"use client";

import { Work } from "../components/Status/Work";
import works from "../../src/data/works.json";
import socials from "../../src/data/socials.json";
import { createContext, useContext, useState, useEffect } from "react";
import { Card } from "../components/ui/card";
import { Section } from "../components/Section";
import { SideProject } from "../components/Status/SideProject";
import { RepositoryProps } from "@/app/src/types/Repository";
import { Socials } from "../components/Status/Socials";
import { transformRepositories } from "../utils/transformRepositories";
import { Component } from "../components/LanguagePieChart";

import axios from "axios";

export const Status = () => {
   const [repositories, setRepositories] = useState<RepositoryProps[]>([]);

   // Remplacez 'votre_nom_utilisateur' par votre nom d'utilisateur GitHub
   useEffect(() => {
      const fetchRepositories = async () => {
         const response = await axios.get(
            `https://api.github.com/users/guiback0/repos`
         );
         setRepositories(response.data);
         // Afficher les données dans la console pour débuggage.
      };

      fetchRepositories();
   }, []);

   const sideProjects = transformRepositories(repositories);

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

            <Component />
         </div>
      </Section>
   );
};
