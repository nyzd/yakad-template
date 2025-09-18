"use client";

import { Card, CardProps } from "@yakad/ui";
import React, { useRef, useState, useEffect } from "react";

export interface DropDawnProps extends CardProps {
    dropdawnclassName?: string;
    dropdawnstyles?: React.CSSProperties;
    dropdawnchildren?: React.ReactNode;
}

export const DropDawn = ({
    dropdawnclassName,
    dropdawnstyles,
    dropdawnchildren,
    children,
    ...restProps
}: DropDawnProps) => {
    const toggleDivRef = useRef<HTMLDivElement | null>(null);
    const dropDawnRef = useRef<HTMLDivElement | null>(null);
    const [showDropDawn, setShowDropDawn] = useState(false);
    const [top, setTop] = useState<number>(0);
    const [left, setLeft] = useState<number>(0);

    const togglePopup = () => setShowDropDawn((prev) => !prev);

    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                toggleDivRef.current &&
                !toggleDivRef.current.contains(event.target as Node)
            ) {
                setShowDropDawn(false);
            }
        };
        if (showDropDawn) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, [showDropDawn]);

    // Position popup
    useEffect(() => {
        if (toggleDivRef.current && dropDawnRef.current) {
            const buttonRect = toggleDivRef.current.getBoundingClientRect();
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
            <div {...restProps} ref={toggleDivRef} onClick={togglePopup}>
                {children}
            </div>
            <Card
                ref={dropDawnRef}
                className={dropdawnclassName}
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
                    ...dropdawnstyles,
                }}
            >
                {dropdawnchildren}
            </Card>
        </>
    );
};
