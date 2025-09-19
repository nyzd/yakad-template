"use client";

import { Card, CardProps } from "@yakad/ui";
import React, { useRef, useState, useEffect } from "react";
import { InteractiveSurface } from "./InteractiveSurface";

export interface DropDawnProps extends CardProps {
    trigger?: "click" | "rightClick";
    dropdawnchildren?: React.ReactNode;
    children?: React.ReactElement<{
        onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    }>;
}

export const DropDawn = ({
    trigger = "click",
    style,
    dropdawnchildren,
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
                    trigger === "rightClick" && setShowDropDawn(true)
                }
            >
                {children &&
                    React.cloneElement(children, {
                        onClick: (e: React.MouseEvent<HTMLElement>) => {
                            children.props.onClick?.(e);
                            trigger === "click" && toggleShowDropDawn();
                        },
                    })}
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
                    {dropdawnchildren}
                </Card>
            </InteractiveSurface>
        </>
    );
};
