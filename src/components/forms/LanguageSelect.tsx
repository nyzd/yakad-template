"use client";

import { forwardRef } from "react";
import { LangCodeType, langName } from "@yakad/lib";
import { Select, SelectProps } from "@yakad/ui";
import { useSettings } from "@/contexts/settingsContext";

const acceptedLangCodes: LangCodeType[] = ["en", "ar", "fa", "tr"];

export const LanguageSelect = forwardRef<
    HTMLSelectElement,
    Omit<SelectProps, "name" | "value">
>(function LanguageSelect({ placeholder, onChange, ...restProps }, ref) {
    const { settings, setSettings } = useSettings();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setSettings((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <Select
            ref={ref}
            name="language"
            placeholder={placeholder || "Language"}
            value={settings.language}
            onChange={(e) => {
                handleChange(e);
                onChange?.(e);
            }}
            {...restProps}
        >
            {acceptedLangCodes.map((value) => (
                <option key={value} value={value}>
                    {langName(value)}
                </option>
            ))}
        </Select>
    );
});
