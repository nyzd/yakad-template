"use client";

import { ThemeColor, DarkStyle } from "@yakad/ui";
import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
    Dispatch,
    SetStateAction,
} from "react";

interface Settings {
    darkStyle: DarkStyle;
    themeColor: ThemeColor;
    zoom?: number;
    language: string;
}

const defaultSettings: Settings = {
    darkStyle: "system",
    themeColor: (process.env.THEME_COLOR as ThemeColor) || "blue",
    zoom: 100,
    language: "en",
};

interface SettingsContextType {
    settings: Settings;
    setSettings: Dispatch<SetStateAction<Settings>>;
}

const SettingsContext = createContext<SettingsContextType | undefined>(
    undefined
);

const LOCAL_STORAGE_KEY = "settings";

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
    const [settings, setSettings] = useState<Settings>(defaultSettings);

    useEffect(() => {
        const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (stored) {
            try {
                const parsed = JSON.parse(stored) as Settings;
                setSettings(parsed);
            } catch (error) {
                console.error(
                    "Failed to parse settings from localStorage",
                    error
                );
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(settings));
    }, [settings]);

    return (
        <SettingsContext.Provider value={{ settings, setSettings }}>
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettings = (): SettingsContextType => {
    const context = useContext(SettingsContext);
    if (!context) {
        throw new Error("useSettings must be used within a SettingsProvider");
    }
    return context;
};
