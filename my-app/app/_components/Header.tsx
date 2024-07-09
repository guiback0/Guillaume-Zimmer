import { Section } from "./Section";

export const Header = () => {
   return (
      <header className="sticky top-0 py-4">
         <Section className="flex items-baseline">
            <h1 className="text-lg font-bold text-primary">Guillaume Zimmer</h1>

            <div className="flex1"></div>
         </Section>
      </header>
   );
};
