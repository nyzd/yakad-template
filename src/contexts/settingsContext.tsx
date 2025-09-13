"use client";

import { createLocalStorageContext } from "@/utils/createLocalStorageContext";

interface Settings {
    arabicFontSize: "small" | "medium" | "large";
    autoScroll: boolean;
}

const defaultSettings: Settings = {
    arabicFontSize: "medium",
    autoScroll: true,
};

const [SettingsProvider, useSettingsContext] = createLocalStorageContext({
    name: "Settings",
    defaultValue: defaultSettings,
    storageKey: "Settings",
});

export { SettingsProvider };

export const useSettings = () => {
    const { value, setValue } = useSettingsContext();
    return { Settings: value, setSettings: setValue };
};
