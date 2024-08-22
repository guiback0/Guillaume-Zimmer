import { Section } from "../components/Shared/Section";
import Image from "next/image";
import MyFace from "@/public/images/my-face.jpg";
import { Code } from "../components/Shared/Code";
import { GithubIcon } from "../../../public/icons/GithubIcon";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { OpenDrawerButton } from "../components/Shared/OpenDrawer";

export const Hero = () => {
   return (
      <Section className="flex max-md:flex-col items-start gap-4">
         <div className="flex flex-col flex-[3] w-full">
            <div className=" w-full p-4 flex flex-col gap-2">
               <div className="flex-[3] w-full flex flex-col gap-1">
                  <h2 className="font-caption font-bold text-5xl text-primary">
                     Guillaume Zimmer
                  </h2>
                  <h3 className="font-caption text-2xl">
                     Full Stack Developer
                  </h3>
                  <p className="text-base">
                     Après avoir commencé dans la construction métallique et
                     gestion de chantier la , je me consacre désormais avec
                     passion au développement full stack. Je serais ravi de
                     partager mon portfolio et de discuter de cette nouvelle
                     étape de ma carrière.
                     {/* <Link href="https://github.com/guiback0">
                        <Code className="inline-flex items-center gap-1">
                           <GithubIcon
                              size={16}
                              className="inline"></GithubIcon>
                           LP CMAO
                        </Code>
                     </Link> */}
                  </p>
               </div>
            </div>
            <OpenDrawerButton>
               <div className="flex justify-center">
                  <Button className="w-full h-full scroll-m-20 text-xl font-semibold tracking-tight">
                     Contactez-moi
                  </Button>
               </div>
            </OpenDrawerButton>
         </div>
         

         <div className="flex flex-col flex-[2] gap-4">
            <Image
               src={MyFace}
               alt="Guillaume's picture"
               className="w-full h-auto max-w-xs rounded-xl object-cover"
            />
         </div>
      </Section>
   );
};
