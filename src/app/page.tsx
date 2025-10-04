import Link from "next/link";
import {
    Button,
    Card,
    Container,
    H1,
    H2,
    H3,
    Main,
    Row,
    Screen,
    Spacer,
    Text,
    WithDropdawn,
} from "@yakad/ui";

const colorVars = [
    "--primaryColor",
    "--primaryContainerColor",
    "--secondaryColor",
    "--secondaryContainerColor",
    "--tertiaryColor",
    "--errorColor",
    "--errorContainerColor",
    "--onPrimaryColor",
    "--onPrimaryContainerColor",
    "--onSecondaryColor",
    "--onSecondaryContainerColor",
    "--onTertiaryColor",
    "--onErrorColor",
    "--onErrorContainerColor",
    "--surfaceColor",
    "--surfaceVariantColor",
    "--surfaceDimColor",
    "--surfaceBrightColor",
    "--surfaceContainerLowestColor",
    "--surfaceContainerLowColor",
    "--surfaceContainerColor",
    "--surfaceContainerHightColor",
    "--surfaceContainerHighestColor",
    "--onSurfaceColor",
    "--onSurfaceRGBColor",
    "--onSurfaceVariantColor",
    "--outlineColor",
    "--outlineVariantColor",
];

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
