"use client";

import { createLocalStorageContext } from "@yakad/lib";

interface Settings {
    exampleFontSize: "small" | "medium" | "large";
    autoScroll: boolean;
}

const defaultSettings: Settings = {
    exampleFontSize: "medium",
    autoScroll: true,
};

const [SettingsProvider, useSettings] = createLocalStorageContext<Settings>(
    "settings",
    defaultSettings
);

export { SettingsProvider, useSettings };
