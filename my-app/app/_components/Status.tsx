import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { LucideIcon } from "lucide-react";
import { Code } from "lucide-react";
import Link from "next/link";

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
            </Card>
            <Card className="p-4 flex-1">
               <p className="text-lg text-muted-foreground">Contact me</p>
            </Card>
         </div>
      </Section>
   );
};

const SIDE_PROJECTS = [
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
