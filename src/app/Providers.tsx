"use client";

import { ReactNode } from "react";
import { SettingsProvider } from "@/contexts/settingsContext";
import { OptionsProvider } from "@/contexts/optionsContext";
import { SelectedProvider } from "@/contexts/selectedContext";

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <SettingsProvider>
            <OptionsProvider>
                <SelectedProvider>{children}</SelectedProvider>
            </OptionsProvider>
        </SettingsProvider>
    );
}
