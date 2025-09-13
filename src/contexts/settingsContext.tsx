"use client";

import { createLocalStorageContext } from "@yakad/lib";

interface Settings {
    arabicFontSize: "small" | "medium" | "large";
    autoScroll: boolean;
}

const defaultSettings: Settings = {
    arabicFontSize: "medium",
    autoScroll: true,
};

const [SettingsProvider, useSettings] = createLocalStorageContext<Settings>(
    "settings",
    defaultSettings
);

export { SettingsProvider, useSettings };
