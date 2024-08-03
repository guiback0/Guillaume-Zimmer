import { buttonVariants } from "../components/ui/button";
import { Section } from "../components/Section";
import { GithubIcon } from "../icons/GithubIcon";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LinkedinIcon } from "../icons/LinkedinIcon";

export const Header = () => {
   return (
      <header className="sticky top-0 py-4">
         <Section className="flex items-baseline">
            <h1 className="text-lg font-bold text-primary">Guillaume Zimmer</h1>
            <div className="flex-1" />
            <ul className="flex items-center gap-2">
               <Link
                  href="https://github.com/guiback0"
                  className={cn(
                     buttonVariants({ variant: "outline" }),
                     "size-6 p-0"
                  )}>
                  <GithubIcon size={16} className="text-foreground" />
               </Link>
               <Link
                  href="https://www.linkedin.com/in/guillaume-zimmer/"
                  className={cn(
                     buttonVariants({ variant: "outline" }),
                     "size-6 p-0"
                  )}>
                  <LinkedinIcon size={16} className="text-foreground" />
               </Link>
            </ul>
         </Section>
      </header>
   );
};
