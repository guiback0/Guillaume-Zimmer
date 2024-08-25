import * as React from "react";
import { LANGUAGE_ICON_MAP } from "../../utils/languageIconMap";
import { IconProjectProps } from "../../domain/types/project";
import { Code } from "lucide-react";

export const IconProject = (props: IconProjectProps) => {
  const IconComponent =
    LANGUAGE_ICON_MAP[props.language?.toLowerCase()] || Code;

  return <IconComponent />;
};
