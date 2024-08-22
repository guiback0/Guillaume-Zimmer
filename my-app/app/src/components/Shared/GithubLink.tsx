import { cn } from "@/lib/utils";
import { GithubIcon } from "@/public/icons/GithubIcon";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export const GithubLink = () => {
    return (
        <Link
        href="https://github.com/guiback0"
        className={cn(
           buttonVariants({ variant: "outline" }),
           "w-full p-0 gap-2"
        )}>
        <span className="text-sm text-muted-foreground">
           Voir plus sur GitHub
        </span>
        <GithubIcon size={20} className="text-foreground" />
     </Link>
    );
 };
 