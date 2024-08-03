"use client";

import { Work } from "../components/Status/Work";
import { WORKS } from "../components/Status/Work";
import { createContext, useContext, useState, useEffect } from "react";
import { Card } from "../components/ui/card";
import { Section } from "../components/Section";
import { SideProject } from "../components/Status/SideProject";
import { RepositoryProps } from "@/app/src/types/Repository";
import { Socials } from "../components/Status/Socials";

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

   const sideProjects = repositories.map((repo) => ({
      name: repo.name,
      description: repo.description || "Aucune description.",
      html_url: repo.html_url,
      language: repo.language,
   }));

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
                  {WORKS.map((work, index) => (
                     <Work key={index} {...work} />
                  ))}
               </div>
            </Card>
            <Card className="p-4 flex-1 flex flex-col gap-2">
               <p className="text-lg text-muted-foreground">Contact me</p>
               <Socials
                  name="Linkedin"
                  image="https://media.licdn.com/dms/image/D4E03AQHhmSaiobyCHQ/profile-displayphoto-shrink_200_200/0/1718307856444?e=1727308800&v=beta&t=8vc2RbRF6367PswMgBdzfeBO4LvrTXhrfxpOUGzqlFs"
                  mediumImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmgV3rvl_AvDgG9o7p9b_b1sb1ZVChFrvuNQ&s"
                  description="160 relations"
               />
               <Socials
                  name="Mail"
                  image="https://media.licdn.com/dms/image/D4E03AQHhmSaiobyCHQ/profile-displayphoto-shrink_200_200/0/1718307856444?e=1727308800&v=beta&t=8vc2RbRF6367PswMgBdzfeBO4LvrTXhrfxpOUGzqlFs"
                  mediumImage="https://static.vecteezy.com/ti/vecteur-libre/p3/13948544-logo-gmail-sur-fond-blanc-transparent-gratuit-vectoriel.jpg"
                  description="description"
               />
            </Card>
         </div>
      </Section>
   );
};
