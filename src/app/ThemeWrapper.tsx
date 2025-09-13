"use client";

import { Theme, ThemeProps } from "@yakad/ui";
import { useSettings } from "@/contexts/settingsContext";

export default function ThemeWrapper({
    children,
    ...restProps
}: Omit<ThemeProps, "darkstyle" | "color" | "zoom">) {
    const { settings } = useSettings();

    return (
        <Theme
            darkstyle={settings.darkStyle}
            color={settings.themeColor}
            zoom={settings.zoom}
            {...restProps}
        >
            {children}
        </Theme>
    );
}
