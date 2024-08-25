import { Section } from "../Shared/Section";
import { OpenDrawerButton } from "../Shared/OpenDrawer";
import { Button } from "../ui/button";

export const Contact = () => {
   return (
      <Section>
         <OpenDrawerButton>
            <div className="flex justify-center">
               <Button className="w-full h-full scroll-m-20 text-2xl font-semibold tracking-tight">
                  Contactez-moi
               </Button>
            </div>
         </OpenDrawerButton>
      </Section>
   );
};
