import { Section } from "./Shared/Section";
import Image from "next/image";
import MyFace from "@/public/images/my-face.jpg";
import { Button } from "./ui/button";
import { OpenDrawerButton } from "./Shared/OpenDrawer";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const Hero = () => {
   return (
      <Section className="flex max-md:flex-col items-start gap-4">
         <div className="flex flex-col md:flex-row flex-[3] w-full h-full">
            <div className="mr-4 flex-[3] w-full md:w-2/3 flex flex-col gap-2 order-1">
               <div className="flex justify-between items-center">
                  <h2 className="font-caption font-bold text-5xl text-primary">
                     Guillaume Zimmer
                  </h2>
                  <div className="md:hidden">
                     <Avatar>
                        <Image
                           src={MyFace}
                           alt="Guillaume's picture"
                           className="w-full h-auto max-w-xs rounded-xl object-cover"
                        />
                        <AvatarFallback>G</AvatarFallback>
                     </Avatar>
                  </div>
               </div>

               <div className="w-full mt-4 flex flex-col gap-2">
                  <h3 className="font-caption text-2xl">
                     Développeur Full Stack
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
                                Test
                            </Code>
                        </Link> */}
                  </p>
               </div>
               <div className="order-3 md:order-3">
                  <OpenDrawerButton>
                     <div className="flex justify-center ">
                        <Button className="w-full h-full scroll-m-20 text-xl font-semibold tracking-tight">
                           Contactez-moi
                        </Button>
                     </div>
                  </OpenDrawerButton>
               </div>
            </div>
            <div className="hidden md:flex flex-col flex-[2] order-2 md:order-2 md:w-1/3">
               <Image
                  src={MyFace}
                  alt="Guillaume's picture"
                  className="w-full h-auto max-w-xs rounded-xl object-cover"
               />
            </div>
         </div>
      </Section>
   );
};
