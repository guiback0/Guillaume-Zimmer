import { Code, CodeXml, FileCode, Braces, FileJson, LucideIcon } from "lucide-react";

type IconProjectProps = {
   language: string;
};

const LANGUAGE_ICON_MAP: Record<string,LucideIcon> = {
   html: CodeXml,
   javascript: Braces,
   java: FileCode,
   typescript: FileJson,
   /* "1234": FileCode */
};

export const IconProject = (props: IconProjectProps) => {
   const IconComponent =
      LANGUAGE_ICON_MAP[props.language?.toLowerCase()] || Code;

   return <IconComponent />;
};
