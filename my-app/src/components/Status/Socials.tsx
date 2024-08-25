/* eslint-disable @next/next/no-img-element */
import { Card } from "../ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { OpenDrawerButton } from "../Shared/OpenDrawer";
import { SocialProps } from "../../domain/types/social";

export const Socials = ({socials }: { socials: SocialProps }) => {
   const Wrapper = socials.wrapperType === "link" ? Link : OpenDrawerButton;

   return (
      <Wrapper href={socials.wrapperType === "link" && socials.href ? socials.href : "/"}>
         <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
            <div className="relative">
               <img
                  src={socials.image}
                  alt={socials.name}
                  className="w-10 h-10 object-contain rounded-full"
               />
               <img
                  src={socials.mediumImage}
                  alt={socials.name}
                  className="w-4 h-4 absolute object-contain rounded-full -bottom-1 -right-1"
               />
            </div>
            <div className="mr-auto">
               <div className="flex items-center gap-2">
                  <p className="text-md font-semibold">{socials.name}</p>
               </div>
               <p className="text-sm text-muted-foreground">{socials.description}</p>
            </div>
            <ArrowUpRight
               className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform"
               size={16}
            />
         </Card>
      </Wrapper>
   );
};
