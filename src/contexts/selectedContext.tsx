"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
    Dispatch,
    SetStateAction,
} from "react";

interface Selected {
    mushafUUID: string;
    ayahUUID: string | undefined;
    translationUUID: string;
    translationByWordUUID: string;
    recitationUUID: string;
}

const defaultSelected: Selected = {
    mushafUUID: "hafs",
    ayahUUID: "test",
    translationUUID: "UUID",
    translationByWordUUID: "UUID",
    recitationUUID: "UUID",
};

interface SelectedContextType {
    selected: Selected;
    setSelected: Dispatch<SetStateAction<Selected>>;
}

const SelectedContext = createContext<SelectedContextType | undefined>(
    undefined
);

const LOCAL_STORAGE_KEY = "selected";

export const SelectedProvider = ({ children }: { children: ReactNode }) => {
    const [selected, setSelected] = useState<Selected>(defaultSelected);

    useEffect(() => {
        const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (stored) {
            try {
                const parsed = JSON.parse(stored) as Selected;
                setSelected(parsed);
            } catch (error) {
                console.error(
                    "Failed to parse selected from localStorage",
                    error
                );
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(selected));
    }, [selected]);

    return (
        <SelectedContext.Provider value={{ selected, setSelected }}>
            {children}
        </SelectedContext.Provider>
    );
};

export const useSelected = (): SelectedContextType => {
    const context = useContext(SelectedContext);
    if (!context) {
        throw new Error("useSelected must be used within a SelectedProvider");
    }
    return context;
};
