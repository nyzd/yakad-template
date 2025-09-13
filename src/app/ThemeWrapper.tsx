"use client";

import { Theme, ThemeProps } from "@yakad/ui";
import { usePreferences } from "@/contexts/preferencesContext";

export default function ThemeWrapper({
    children,
    ...restProps
}: Omit<ThemeProps, "darkstyle" | "color" | "zoom">) {
    const { Preferences } = usePreferences();

    return (
        <Theme
            darkstyle={Preferences.darkStyle}
            color={Preferences.themeColor}
            zoom={Preferences.zoom}
            {...restProps}
        >
            {children}
        </Theme>
    );
}
