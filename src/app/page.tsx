import Link from "next/link";
import { Button, H1, Main, Screen } from "@yakad/ui";
import { DropDawn } from "@/components/DropDawn";

export default function Page() {
    return (
        <Screen>
            <Main align="center">
                <H1>Hi From Page</H1>
                <Link href="/settings">Go to Settings</Link>
                <DropDawn>
                    <Button variant="outlined">Test</Button>
                    <Button variant="outlined">Test</Button>
                    <Button variant="outlined">Test</Button>
                    <Button variant="outlined">Test</Button>
                    <Button variant="outlined">Test</Button>
                    <Button variant="outlined">Test</Button>
                </DropDawn>
            </Main>
        </Screen>
    );
}
