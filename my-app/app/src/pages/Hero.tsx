import { Section } from "../components/Section";
import Image from "next/image";
import MyFace from "../images/my-face.jpg";
import { Code } from "../components/Code";
import { GithubIcon } from "../icons/GithubIcon";
import Link from "next/link";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { OpenDrawerButton } from "../components/Contact/OpenDrawer";

export const Hero = () => {
   return (
      <Section className="flex max-md:flex-col items-start gap-4">
         <div className="flex-[3] w-full">
            <div className=" w-full p-4 flex flex-col gap-2">
               <div className="flex-[3] w-full flex flex-col fap-2">
                  <h2 className="font-caption font-bold text-5xl text-primary">
                     Guillaume Zimmer
                  </h2>
                  <h3 className="font-caption text-2xl">
                     Full Stack Developer
                  </h3>
                  <p className="text-base">
                     Diplômé d'un Bac +3 en Conception Mécanique Aidé par
                     Ordinateur{" "}
                     <Link href="https://github.com/guiback0">
                        <Code className="inline-flex items-center gap-1">
                           <GithubIcon
                              size={16}
                              className="inline"></GithubIcon>
                           LP CMAO
                        </Code>
                     </Link>{" "}
                     et d’un Bac +2 en Génie Mécanique et Productique (DUT GMP),
                     ma carrière a débuté dans le domaine de la gestion de
                     chantier et de construction métallique. Aujourd'hui, je
                     suis passionné par ma reconversion en tant que développeur
                     full stack. Je suis enthousiaste à l'idée de partager mon
                     portfolio et d'échanger avec vous sur cette nouvelle
                     aventure professionnelle.
                  </p>
               </div>
            </div>
         </div>

         <div className="flex flex-col flex-[2] gap-4">
            <Image
               src={MyFace}
               alt="Guillaume's picture"
               className="w-full h-auto max-w-xs rounded-xl object-cover"
            />
            <OpenDrawerButton>
               <Button className=" w-full">Contactez-moi</Button>
            </OpenDrawerButton>
         </div>
      </Section>
   );
};
