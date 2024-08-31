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
         <h3 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Je travail sur ...
         </h3>
         <SkillsCarousel skills={skills} />
      </Section>
   );
};
