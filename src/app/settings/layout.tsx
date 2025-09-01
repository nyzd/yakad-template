import { Main, Screen } from "@yakad/ui";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Screen>
            <Main>{children}</Main>
        </Screen>
    );
}
