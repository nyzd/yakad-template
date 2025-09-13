"use client";

import { ThemeColor, DarkStyle } from "@yakad/ui";
import { createLocalStorageContext } from "@/utils/createLocalStorageContext";

interface Preferences {
    darkStyle: DarkStyle;
    themeColor: ThemeColor;
    zoom?: number;
    language: string;
}

const defaultPreferences: Preferences = {
    darkStyle: "system",
    themeColor: (process.env.THEME_COLOR as ThemeColor) || "blue",
    zoom: 100,
    language: "en",
};

const [PreferencesProvider, usePreferencesContext] = createLocalStorageContext({
    name: "Preferences",
    defaultValue: defaultPreferences,
    storageKey: "preferences",
});

export { PreferencesProvider };

export const usePreferences = () => {
    const { value, setValue } = usePreferencesContext();
    return { Preferences: value, setPreferences: setValue };
};
