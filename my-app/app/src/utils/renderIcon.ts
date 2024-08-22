import { ICON_MAP } from "../utils/skillIconsMap";

export function renderIcon(iconName: string) {
    const IconComponent = ICON_MAP[iconName];
    if (IconComponent) {
        return <IconComponent size={42} className="m-auto" />;
    }
    return null;
}
