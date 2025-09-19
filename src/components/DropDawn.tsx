"use client";

import { useRef, useState, useEffect, cloneElement } from "react";
import { Card, CardProps, InteractiveSurface } from "@yakad/ui";

export interface DropDawnProps extends CardProps {
    trigger?: "onClick" | "onRightClick";
    triggerchildren?: React.ReactElement<{
        onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    }>;
}

export const DropDawn = ({
    trigger = "onClick",
    triggerchildren,
    style,
    children,
    ...restProps
}: DropDawnProps) => {
    const toggleElementRef = useRef<HTMLElement | null>(null);
    const dropDawnRef = useRef<HTMLDivElement | null>(null);
    const [showDropDawn, setShowDropDawn] = useState(false);
    const [top, setTop] = useState<number>(0);
    const [left, setLeft] = useState<number>(0);

    const toggleShowDropDawn = () => setShowDropDawn((prev) => !prev);

    // Position popup
    useEffect(() => {
        if (toggleElementRef.current && dropDawnRef.current) {
            const buttonRect = toggleElementRef.current.getBoundingClientRect();
            const dropDawnRect = dropDawnRef.current.getBoundingClientRect();
            const padding = 10;

            let top = buttonRect.bottom + padding;
            let left =
                buttonRect.left + buttonRect.width / 2 - dropDawnRect.width / 2;

            // Prevent overflow bottom
            if (top + dropDawnRect.height > window.innerHeight) {
                top = buttonRect.top - dropDawnRect.height - padding;
            }

            // Prevent overflow right
            if (left + dropDawnRect.width > window.innerWidth - padding) {
                left = window.innerWidth - dropDawnRect.width - padding;
            }

            // Prevent overflow left
            if (left < padding) {
                left = padding;
            }

            setTop(top);
            setLeft(left);
        }
    }, [showDropDawn, children]);

    return (
        <>
            <InteractiveSurface
                ref={toggleElementRef}
                onRightClick={() =>
                    trigger === "onRightClick" && setShowDropDawn(true)
                }
            >
                {triggerchildren ? (
                    cloneElement(triggerchildren, {
                        onClick: (e: React.MouseEvent<HTMLElement>) => {
                            triggerchildren.props.onClick?.(e);
                            trigger === "onClick" && toggleShowDropDawn();
                        },
                    })
                ) : (
                    <button onClick={toggleShowDropDawn}>
                        Add DropDawn Trigger Children
                    </button>
                )}
            </InteractiveSurface>
            <InteractiveSurface onOutsideClick={() => setShowDropDawn(false)}>
                <Card
                    ref={dropDawnRef}
                    {...restProps}
                    style={{
                        position: "fixed",
                        top: top,
                        left: left,
                        width: "auto",
                        maxWidth: "calc(100% - 4rem)",
                        maxHeight: "min(50vh, 50rem)",
                        overflowY: "auto",
                        zIndex: 2,
                        visibility: showDropDawn ? "visible" : "hidden",
                        ...style,
                    }}
                >
                    {children}
                </Card>
            </InteractiveSurface>
        </>
    );
};
