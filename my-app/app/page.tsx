import { Contact } from "./src/pages/Contact";
import { Header } from "./src/pages/Header";
import { Hero } from "./src/pages/Hero";
import { Skills } from "./src/pages/Skills";
import { Spacing } from "./src/components/Spacing";
import { Status } from "./src/pages/Status";

export default function Home() {
   return (
      <main>
         <Header />
         <Spacing size="md" />
         <Hero />
         <Spacing size="md" />
         <Status />
         <Spacing size="md" />
         <Skills />
         <Spacing size="md" />
         <Contact />
         <Spacing size="md" />
      </main>
   );
}
