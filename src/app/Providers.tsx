"use client";

import { ReactNode } from "react";
import { PreferencesProvider } from "@/contexts/preferencesContext";
import { SettingsProvider } from "@/contexts/settingsContext";

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <PreferencesProvider>
            <SettingsProvider>{children}</SettingsProvider>
        </PreferencesProvider>
    );
}
