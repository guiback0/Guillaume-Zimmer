import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";

export const Skills = () => {
   return (
      <Section>
         <Badge variant={"outline"} className="">
            Skills
         </Badge>
         <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            What I do
         </h2>
      </Section>
   );
};
