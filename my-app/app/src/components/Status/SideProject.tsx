import Link from "next/link";
import { IconProject } from "../Status/IconProject";
import { RepositoryProps } from "../../domain/types/repository";
import { useEffect, useState } from "react";

export const SideProject = (props: RepositoryProps) => {
   return (
      <Link
         href={props.html_url}
         className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
         <span className="bg-accent text accent-foreground p-3 rounded-sm">
            <IconProject language={props.language} />
         </span>
         <div>
            <p className="text-lg font-semibold">{props.name}</p>
            <p className="text-sm text-muted-foreground">{props.description}</p>
         </div>
      </Link>
   );
};
