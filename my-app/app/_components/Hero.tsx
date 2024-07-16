import { Section } from "./Section";
import Image from "next/image";
import MyFace from "./images/my-face.jpg";

export const Hero = () => {
   return (
      <Section className="glex max-lg:flexcol items-start">
         <div className="flex-[2]">
            <h2>Guillaume Zimmer</h2>
            <h3>Full Stack Developer</h3>
            <p>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe a
               sit unde. Neque nihil iusto nam quae autem perferendis,
               reprehenderit, molestiae modi rerum provident minus laudantium
               debitis dolorum iure aliquam!
            </p>
         </div>
         <div className="flex-1">
            <Image
               src={MyFace}
               alt="Guillaume's picture"
               className="w-full h-auto"
            />
         </div>
      </Section>
   );
};
