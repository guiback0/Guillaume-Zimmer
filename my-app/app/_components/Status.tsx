"use client"; // Ajoutez cette ligne au début du fichier

import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { Code, CodeXml, FileCode, Braces, FileJson } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import axios from "axios";
import { useState, useEffect } from "react";

type RepositoryProps = {
   name: string;
   description: string;
   html_url: string;
   language: string;
};

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
            <Card className="p-4 flex-1">
               <p className="text-lg text-muted-foreground">Contact me</p>
            </Card>
         </div>
      </Section>
   );
};

const SideProject = (props: RepositoryProps) => {
   let IconComponent = Code;

   switch (props.language?.toLowerCase()) {
      case "html":
         IconComponent = CodeXml;
         break;
      case "javascript":
         IconComponent = Braces;
         break;
      case "java":
         IconComponent = FileCode;
         break;
      case "typescript":
         IconComponent = FileJson;
         break;
      default:
         IconComponent = Code;
   }

   return (
      <Link
         href={props.html_url}
         className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
         <span className="bg-accent text accent-foreground p-3 rounded-sm">
            <IconComponent />
         </span>
         <div>
            <p className="text-lg font-semibold">{props.name}</p>
            <p className="text-sm text-muted-foreground">{props.description}</p>
         </div>
      </Link>
   );
};

const WORKS: WorkProps[] = [
   {
      image: "https://media.licdn.com/dms/image/C4E0BAQFQ6rnD-yColA/company-logo_100_100/0/1661248943104/coutier_industrie_ralisations_industrielles_sur_mesure_logo?e=1729728000&v=beta&t=yNncv97D0Y7chwNP2WCIpog2RI3GUlRVVod8TFTFsKY",
      title: "Coutier Industrie",
      description: "Description",
      date: "2022 - 2023",
      url: "https://www.coutier-industrie.fr/",
      type: true, // true for IT, false for other;
   },
   {
      image: "https://media.licdn.com/dms/image/C4D0BAQE-gu-0QNOJgA/company-logo_100_100/0/1630531529668/bamolux_logo?e=1729728000&v=beta&t=CqGyogPuUc4mPwUUpnhWI4fqNdHiKFlc4iD4zyl7jMQ",
      title: "Bamolux",
      description: "Description",
      date: "2021 - 2022",
      url: "https://www.bamolux.lu/",
      type: true, // true for IT, false for other;
   },
];

type WorkProps = {
   image: string;
   title: string;
   description: string;
   date: string;
   url: string;
   type: boolean; // true for IT, false for other;
};

const Work = (props: WorkProps) => {
   return (
      <Link
         href={props.url}
         className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
         <img
            src={props.image}
            alt={props.title}
            className="w-12 h-12 object-contain rounded-md"
         />

         <div>
            <div className="flex items-center gap-2">
               <p className="text-lg font-semibold">{props.title}</p>
               {props.type && <Badge variant="outline">IT</Badge>}
            </div>
            <p className="text-sm text-muted-foreground">{props.description}</p>
            <div className="m-auto">
               <p className="text-xs  text-muted-foreground">{props.date}</p>
            </div>
         </div>
      </Link>
   );
};
