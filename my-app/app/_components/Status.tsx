import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { Code, LucideIcon } from "lucide-react";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export const Status = () => {
   return (
      <Section className="flex max-md:flex-col items-start gap-4">
         <div className="flex-[3] w-full">
            <Card className=" w-full p-4 flex flex-col gap-2">
               <p className="text-lg text-muted-foreground">Side Project</p>
               <div className="flex flex-col gap-4">
                  {SIDE_PROJECTS.map((project, index) => (
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

const SIDE_PROJECTS: SideProjectProps[] = [
   {
      logo: Code,
      title: "Kaza",
      description: "Description",
      url: "https://github.com/guiback0/kaza",
   },
   {
      logo: Code,
      title: "Sophie Bluel",
      description: "Description",
      url: "https://github.com/guiback0/sophie-bluel",
   },
   {
      logo: Code,
      title: "Mon Vieux Grimoir",
      description: "Description",
      url: "https://github.com/guiback0/mon-vieux-grimoir",
   },
];

type SideProjectProps = {
   logo: LucideIcon;
   title: string;
   description: string;
   url: string;
};

const SideProject = (props: SideProjectProps) => {
   return (
      <Link
         href={props.url}
         className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
         <span className="bg-accent text accent-foreground p-3 rounded-sm">
            <props.logo />
         </span>
         <div>
            <p className="text-lg font-semibold">{props.title}</p>
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
