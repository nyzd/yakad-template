"use client";

import { Button, Card } from "@yakad/ui";
import React, { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";

const LANGS = ["English", "Spanish", "French", "German", "Japanese"];

export default function LangSelector() {
    const buttonRef = useRef<HTMLButtonElement | null>(null);
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
        if (showPopup && buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            const popupWidth = 200;
            const popupHeight = LANGS.length * 40;
            const padding = 10;

            let top = rect.bottom + padding;

            // Center the popup horizontally relative to the button
            let left = rect.left + rect.width / 2 - popupWidth / 2;

            // Adjust if it goes off-screen
            if (top + popupHeight > window.innerHeight) {
                top = rect.top - popupHeight - padding;
            }

            if (left + popupWidth > window.innerWidth) {
                left = window.innerWidth - popupWidth - padding;
            }

            if (left < padding) {
                left = padding;
            }

            // Adjust for screen height
            if (top + popupHeight > window.innerHeight) {
                top = rect.top - popupHeight - padding;
            }

            // Adjust for screen width
            if (left + popupWidth > window.innerWidth) {
                left = window.innerWidth - popupWidth - padding;
            }

            setPopupStyles({
                position: "fixed",
                top,
                left,
                width: popupWidth,
                minWidth: "10rem",
                maxHeight: 200,
                overflowY: "auto",
                zIndex: 2,
            });
        }
    }, [showPopup]);

    return (
        <>
            <Button
                ref={buttonRef}
                variant="filled"
                onClick={togglePopup}
                className="px-4 py-2 bg-blue-600 text-white rounded"
            >
                Select Language
            </Button>

            {showPopup &&
                typeof window !== "undefined" &&
                createPortal(
                    <Card style={popupStyles}>
                        {LANGS.map((lang, i) => (
                            <Button
                                key={i}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => {
                                    console.log("Selected:", lang);
                                    setShowPopup(false);
                                }}
                            >
                                {lang}
                            </Button>
                        ))}
                    </Card>,
                    document.body
                )}
        </>
    );
}
