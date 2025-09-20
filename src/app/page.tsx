import Link from "next/link";
import { Button, H1, Main, Row, Screen, Spacer, WithDropdawn } from "@yakad/ui";

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
            <Main align="center">
                <Row>
                    zzz
                    <WithDropdawn dropdawnChildren={<Dropdawn />}>
                        <Button variant="filled">zzYzz</Button>
                    </WithDropdawn>
                    <Spacer />
                    <WithDropdawn dropdawnChildren={<Dropdawn />}>
                        <Button variant="filled">zzYzz</Button>
                    </WithDropdawn>
                    zzz
                </Row>
                <Row>
                    ZZZZZZZZZZZZZZZZZ
                    <WithDropdawn dropdawnChildren={<Dropdawn />}>
                        <Button variant="filled">zzYzz</Button>
                    </WithDropdawn>
                    <Spacer />
                    <WithDropdawn dropdawnChildren={<Dropdawn />}>
                        <Button variant="filled">zzYzz</Button>
                    </WithDropdawn>
                    ZZZZZZZZZZZZZZZZZ
                </Row>
                <H1>Hi From Page</H1>
                <Link href="/settings">Go to Settings</Link>
                <WithDropdawn dropdawnChildren={<Dropdawn />} blur>
                    <Button variant="filled">Select</Button>
                </WithDropdawn>
                <div
                    style={{
                        padding: "1rem",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: "12px",
                    }}
                >
                    {colorVars.map((varName) => (
                        <div
                            key={varName}
                            style={{
                                backgroundColor: `rgb(var(${varName}))`,
                                color: "white",
                                padding: "1rem",
                                borderRadius: "8px",
                                width: "300px",
                                boxShadow: "0 0 6px rgba(0,0,0,0.3)",
                                fontFamily: "monospace",
                                textAlign: "center",
                                userSelect: "none",
                            }}
                        >
                            {varName}
                        </div>
                    ))}
                </div>
                <Row>
                    zzz
                    <WithDropdawn dropdawnChildren={<Dropdawn />} blur>
                        <Button variant="filled">zzYzz</Button>
                    </WithDropdawn>
                    <Spacer />
                    <WithDropdawn dropdawnChildren={<Dropdawn />} blur>
                        <Button variant="filled">zzYzz</Button>
                    </WithDropdawn>
                    zzz
                </Row>
            </Main>
        </Screen>
    );
}

const Dropdawn = () => (
    <div style={{ width: "200px" }}>
        <Button>TTTT</Button>
        <Button>Test</Button>
        <Button>Test</Button>
        <Button>Test</Button>
        <Button>Test</Button>
        <Button>Test</Button>
    </div>
);
