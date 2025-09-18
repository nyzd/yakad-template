"use client";

import { Button, Card, CardProps } from "@yakad/ui";
import React, { useRef, useState, useEffect, forwardRef } from "react";
import { createPortal } from "react-dom";
import styles from "./DropDawn.module.css";
import classNames from "classnames";

export interface DropDawnProps extends CardProps {}

export const DropDawn = forwardRef<HTMLDivElement, CardProps>(
    ({ className, children, ...restProps }, ref) => {
        const buttonRef = useRef<HTMLButtonElement | null>(null);
        const popupRef = useRef<HTMLDivElement | null>(null);
        const [showPopup, setShowPopup] = useState(false);
        const [popupStyles, setPopupStyles] = useState<React.CSSProperties>({});

        const togglePopup = () => setShowPopup((prev) => !prev);

        // Close on outside click
        useEffect(() => {
            const handleClickOutside = (event: MouseEvent) => {
                if (
                    buttonRef.current &&
                    !buttonRef.current.contains(event.target as Node)
                ) {
                    setShowPopup(false);
                }
            };
            if (showPopup) {
                document.addEventListener("mousedown", handleClickOutside);
            }
            return () =>
                document.removeEventListener("mousedown", handleClickOutside);
        }, [showPopup]);

        // Position popup
        useEffect(() => {
            if (buttonRef.current && popupRef.current) {
                const buttonRect = buttonRef.current.getBoundingClientRect();
                const popupRect = popupRef.current.getBoundingClientRect();
                const padding = 10;

                let top = buttonRect.bottom + padding;
                let left =
                    buttonRect.left +
                    buttonRect.width / 2 -
                    popupRect.width / 2;

                // Prevent overflow bottom
                if (top + popupRect.height > window.innerHeight) {
                    top = buttonRect.top - popupRect.height - padding;
                }

                // Prevent overflow right
                if (left + popupRect.width > window.innerWidth - padding) {
                    left = window.innerWidth - popupRect.width - padding;
                }

                // Prevent overflow left
                if (left < padding) {
                    left = padding;
                }

                setPopupStyles({
                    top,
                    left,
                });
            }
        }, []);

        const joinedClassNames = classNames(
            styles.dropDawn,
            { [styles.collapsed]: !showPopup },
            className
        );

        return (
            <>
                <Button ref={buttonRef} variant="filled" onClick={togglePopup}>
                    Select Language
                </Button>
                {typeof window !== "undefined" &&
                    createPortal(
                        <Card
                            ref={popupRef}
                            className={joinedClassNames}
                            style={{
                                position: "fixed",
                                top: 0,
                                left: 0,
                                ...popupStyles,
                                width: "auto",
                                minWidth: "5rem",
                                maxWidth: "calc(100% - 2rem)",
                                maxHeight: "50vh",
                                overflowY: "auto",
                                zIndex: 2,
                                visibility: showPopup ? "visible" : "hidden",
                            }}
                        >
                            {children}
                        </Card>,
                        document.body
                    )}
            </>
        );
    }
);
