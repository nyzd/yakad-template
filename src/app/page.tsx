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
    WithDropdawn,
} from "@yakad/ui";
import classNames from "classnames";

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
            <Main>
                <Container size="md" align="space">
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
                    <WithDropdawn dropdawnChildren={<Dropdawn />} blur>
                        <Button variant="filled">Select</Button>
                    </WithDropdawn>
                    <Card
                        style={{
                            gap: "12px",
                        }}
                    >
                        <Card>
                            <Card>
                                <Link href="/settings">
                                    <Button variant="outlined">
                                        Go to Settings
                                    </Button>
                                </Link>
                                <H3>Level 3 Card</H3>
                            </Card>
                            <H2>Level 2 Card</H2>
                        </Card>
                        <H1>Level 1 Card</H1>
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
                    </Card>
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
                </Container>
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
