import { Contact } from "./src/pages/Contact";
import { Header } from "./src/pages/Header";
import { Hero } from "./src/pages/Hero";
import { Skills } from "./src/pages/Skills";
import { Spacing } from "./src/components/Spacing";
import { Status } from "./src/pages/Status";
import { Language } from "./src/components/Language";


export default function Home() {
   return (
      <main>
         <Header />
         <Spacing size="sm" />
         <Hero />
         <Spacing size="sm" />
         <Status />
         <Spacing size="sm" />
         <Skills />
         <Spacing size="sm" />
         <Contact />
         <Spacing size="md" />
         <Language/>
        
      </main>
   );
}
