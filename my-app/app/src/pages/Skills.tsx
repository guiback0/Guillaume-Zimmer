import { Badge } from "../components/ui/badge";
import { Section } from "../components/Shared/Section";
import { SkillsCarousel } from "../components/Skills/Carousel";

export const Skills = () => {
   return (
      <Section className="flex flex-col items-start gap-4">
         <Badge variant={"outline"} className="">
            Skills
         </Badge>
         <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            I'm working on ...
         </h2>
         <SkillsCarousel />
      </Section>
   );
};
