import { Badge } from "../ui/badge";
import Link from "next/link";
import { WorkProps } from "../../types/Experience";



export const Work = (props: WorkProps) => {
   return (
      <Link
         href={props.url}
         className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
         <img
            src={props.image}
            alt={props.title}
            className="w-12 h-12 object-contain rounded-md"
         />

         <div className="mr-auto">
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
