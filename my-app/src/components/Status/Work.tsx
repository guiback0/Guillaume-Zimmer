/* eslint-disable @next/next/no-img-element */
import { Badge } from "../ui/badge";
import Link from "next/link";
import { WorkProps } from "../../domain/types/work";

export const Work = ({ works }: { works: WorkProps }) => {

   return (
      <Link
         href={works.url}
         className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
         <img
            src={works.image}
            alt={works.title}
            className="w-12 h-12 object-contain rounded-md"
         />

         <div className="mr-auto">
            <div className="flex items-center gap-2">
               <p className="text-lg font-semibold">{works.title}</p>
               {works.type && <Badge variant="outline">IT</Badge>}
            </div>
            <p className="text-sm text-muted-foreground">{works.description}</p>
            <div className="m-auto">
               <p className="text-xs  text-muted-foreground">{works.date}</p>
            </div>
         </div>
      </Link>
   );
};
