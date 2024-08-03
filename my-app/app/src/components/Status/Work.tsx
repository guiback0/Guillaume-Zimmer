import { Badge } from "../ui/badge";
import Link from "next/link";
import { WorkProps } from "../../types/Experience";

export const WORKS: WorkProps[] = [
   {
      image: "https://media.licdn.com/dms/image/C4E0BAQFQ6rnD-yColA/company-logo_100_100/0/1661248943104/coutier_industrie_ralisations_industrielles_sur_mesure_logo?e=1729728000&v=beta&t=yNncv97D0Y7chwNP2WCIpog2RI3GUlRVVod8TFTFsKY",
      title: "Coutier",
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
