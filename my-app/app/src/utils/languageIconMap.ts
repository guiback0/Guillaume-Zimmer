import {
   Code,
   CodeXml,
   FileCode,
   Braces,
   FileJson,
   LucideIcon,
 } from "lucide-react";
 
 export const LANGUAGE_ICON_MAP: Record<string, React.ComponentType<any>> = {
   html: CodeXml,
   javascript: Braces,
   java: FileCode,
   typescript: FileJson,
   // Ajoutez d'autres icônes ici si nécessaire
 };
 