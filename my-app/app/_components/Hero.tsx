import { Section } from "./Section";
import Image from "next/image";
import MyFace from "./images/my-face.jpg";
import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import { GithubIcon } from "./icons/GithubIcon";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
   return (
      <span
         className={cn(
            "bg-accent/30 font-mono border border-accent p-1 text-primary rounder-sm",
            className
         )}
         {...props}
      />
   );
};

export const Hero = () => {
   return (
      <Section className="flex max-md:flex-col items-start">
         <div className="flex-[2]">
            <h2 className="font-caption text-5xl text-primary">
               Guillaume Zimmer
            </h2>
            <h3 className="font-caption text-2xl">Full Stack Developer</h3>
            <p>
               Lorem, ipsum dolor sit amet
               <Code className="inline-flex items-center gap-1">
                  <GithubIcon size={16} className="inline"></GithubIcon>
                  consectetur
               </Code>
               adipisicing elit. Saepe a sit unde. Neque nihil iusto nam quae
               autem perferendis, reprehenderit, molestiae modi rerum provident
               minus laudantium debitis dolorum iure aliquam!
            </p>
         </div>
         <div className="flex-1">
            <Image
               src={MyFace}
               alt="Guillaume's picture"
               className="w-full h-auto max-w-xs"
            />
         </div>
      </Section>
   );
};
