import { Card } from "../ui/card";
import { ArrowUpRight } from "lucide-react";
import { SocialsProps } from "../../types/Platform";
import Link from "next/link";
import { OpenDrawerButton } from "../../components/Contact/OpenDrawer";

export const Socials = (props: SocialsProps) => {
   const { wrapperType, ...rest } = props;

   const Wrapper = wrapperType === 'link' ? Link : OpenDrawerButton;

   return (
      <Wrapper href={wrapperType === 'link' ? rest.href : undefined}>
      <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
         <div className="relative">
            <img
               src={props.image}
               alt={props.name}
               className="w-10 h-10 object-contain rounded-full"
            />
            <img
               src={props.mediumImage}
               alt={props.name}
               className="w-4 h-4 absolute object-contain rounded-full -bottom-1 -right-1 "
            />
         </div>
         <div className="mr-auto">
            <div className="flex items-center gap-2">
               <p className="text-md font-semibold">{props.name}</p>
            </div>
            <p className="text-sm text-muted-foreground">{props.description}</p>
         </div>
         <ArrowUpRight
            className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform"
            size={16}
         />
      </Card>
      </Wrapper>
   );
};
