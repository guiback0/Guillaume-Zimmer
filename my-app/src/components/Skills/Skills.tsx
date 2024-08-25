/* eslint-disable react/no-unescaped-entities */
import { Badge } from "../ui/badge";
import { Section } from "../Shared/Section";
import { SkillsCarousel } from "./Carousel";
import { SkillsProps } from "../../domain/types/skill";

export const Skills = ({ skills }: { skills: SkillsProps[] }) => {
   return (
      <Section className="flex flex-col items-start gap-4">
         <Badge variant={"outline"} className="">
            Skills
         </Badge>
         <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            I'm working on ...
         </h2>
         <SkillsCarousel skills={skills} />
      </Section>
   );
};
