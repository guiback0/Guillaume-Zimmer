import { Section } from "../components/Section";
import { OpenDrawerButton } from "../components/Contact/OpenDrawer";
import { Button } from "../components/ui/button";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";

export const Contact = () => {
   return (
      <Section>
         <OpenDrawerButton>
            <div className="flex justify-center"><Button className="w-full h-full scroll-m-20 text-2xl font-semibold tracking-tight"> Contactez-moi</Button></div>
            
         </OpenDrawerButton>
      </Section>
   );
};
