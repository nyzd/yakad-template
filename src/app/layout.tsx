import { StorageProvider } from "@/contexts/storageContext";
import ThemeWrapper from "./ThemeWrapper";

export const runtime = "edge";

export const metadata = {
    title: "Natiq Account",
    description: "Natiq Account",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <StorageProvider>
                    <ThemeWrapper>{children}</ThemeWrapper>
                </StorageProvider>
            </body>
        </html>
    );
}
