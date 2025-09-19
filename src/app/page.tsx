import Link from "next/link";
import { Button, H1, Main, Screen } from "@yakad/ui";
import { DropDawn } from "@/components/DropDawn";

export default function Page() {
    return (
        <Screen>
            <Main align="center">
                <H1>Hi From Page</H1>
                <Link href="/settings">Go to Settings</Link>
                <DropDawn
                    triggerchildren={<Button variant="filled">Select</Button>}
                >
                    <Button>TTTT</Button>
                    <Button>Test</Button>
                    <Button>Test</Button>
                    <Button>Test</Button>
                    <Button>Test</Button>
                    <Button>Test</Button>
                </DropDawn>
                <DropDawn />
            </Main>
        </Screen>
    );
}
