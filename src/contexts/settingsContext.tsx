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

const [SettingsProvider, useSettings] = createLocalStorageContext<Settings>({
    name: "Settings",
    defaultValue: defaultSettings,
    storageKey: "Settings",
});

export { SettingsProvider, useSettings };
