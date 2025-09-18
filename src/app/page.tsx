import Link from "next/link";
import { H1, Main, Screen } from "@yakad/ui";
import LangSelector from "@/components/LangSelector";

export default function Page() {
    return (
        <Screen>
            <Main align="center">
                <H1>Hi From Page</H1>
                <Link href="/settings">Go to Settings</Link>
                <LangSelector />
            </Main>
        </Screen>
    );
}
