import Link from "next/link";
import { Button, H1, Main, Row, Screen } from "@yakad/ui";
import { DropDawn } from "@/components/DropDawn";

export default function Page() {
    return (
        <Screen>
            <Main align="center">
                <H1>Hi From Page</H1>
                <Link href="/settings">Go to Settings</Link>
                <DropDawn
                    dropdawnchildren={
                        <>
                            <Button>Test</Button>
                            <Button>Test</Button>
                            <Button>Test</Button>
                            <Button>Test</Button>
                            <Button>Test</Button>
                            <Button>Test</Button>
                        </>
                    }
                >
                    <Button variant="filled">Select</Button>
                </DropDawn>
                <DropDawn
                    dropdawnchildren={
                        <>
                            <Button>Test</Button>
                            <Button>Test</Button>
                            <Button>Test</Button>
                            <Button>Test</Button>
                            <Button>Test</Button>
                            <Button>Test</Button>
                        </>
                    }
                >
                    <Button variant="filled">Select</Button>
                </DropDawn>
                <DropDawn
                    dropdawnchildren={
                        <>
                            <Button>Test</Button>
                            <Button>Test</Button>
                            <Button>Test</Button>
                            <Button>Test</Button>
                            <Button>Test</Button>
                            <Button>Test</Button>
                        </>
                    }
                >
                    <Button variant="filled">Select</Button>
                </DropDawn>
                <DropDawn
                    dropdawnchildren={
                        <>
                            <Button>Test</Button>
                            <Button>Test</Button>
                            <Button>Test</Button>
                            <Button>Test</Button>
                            <Button>Test</Button>
                            <Button>Test</Button>
                        </>
                    }
                >
                    <Button variant="filled">Select</Button>
                </DropDawn>
            </Main>
        </Screen>
    );
}
