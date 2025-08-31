"use client";

import { Container, Main, Screen } from "@yakad/ui";
import { useStorage } from "@/contexts/storageContext";

export default function Layout({ children }: { children: React.ReactNode }) {
    const { storage } = useStorage();

    return (
        <Screen>
            <Main>{children}</Main>
        </Screen>
    );
}
