import { StorageProvider } from "@/contexts/storageContext";
import ThemeWrapper from "./ThemeWrapper";

export const runtime = "edge";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <StorageProvider>
                    <ThemeWrapper>
                        {children}
                        NEW TEXT FROM TEMPLATE REPO
                        {"ANOTHER NEW CHANGE FROM TEMPLATE REPO"}
                    </ThemeWrapper>
                </StorageProvider>
            </body>
        </html>
    );
}
