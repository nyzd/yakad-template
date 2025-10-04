import Link from "next/link";
import { Button, Main, Screen, Text } from "@yakad/ui";

export default function Page() {
    return (
        <Screen>
            <Main align="space">
                <Text variant="heading2">Hi from Yakad Template!</Text>
                <Link href="/settings">
                    <Button variant="filled">Settings</Button>
                </Link>
            </Main>
        </Screen>
    );
}
