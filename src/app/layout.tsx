import Providers from "./Providers";
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
                <Providers>
                    <ThemeWrapper>{children}</ThemeWrapper>
                </Providers>
            </body>
        </html>
    );
}
