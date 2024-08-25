import { ReactIcon } from "../../public/icons/ReactIcon";
import { CSSIcon } from "../../public/icons/CSSIcon";
import { HTMLIcon } from "../../public/icons/HTMLIcon";
import { JavaIcon } from "../../public/icons/JavaIcon";
import { JavascriptIcon } from "../../public/icons/Javascript";
import { SassIcon } from "../../public/icons/SassIcon";
import { TailwindIcon } from "../../public/icons/TailwindIcon";
import { TypescriptIcon } from "../../public/icons/Typescript";
import { MongoDBIcon } from "../../public/icons/MongoDBIcon";

export const ICON_MAP: Record<string, React.ComponentType<any>> = {
  HTMLIcon,
  CSSIcon,
  JavascriptIcon,
  TypescriptIcon,
  ReactIcon,
  SassIcon,
  TailwindIcon,
  MongoDBIcon,
  JavaIcon,
};
