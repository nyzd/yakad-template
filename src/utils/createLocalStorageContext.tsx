"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
    type Dispatch,
    type SetStateAction,
} from "react";

interface CreateContextOptions<T> {
    name: string;
    defaultValue: T;
    storageKey: string;
}

export interface ContextType<T> {
    value: T;
    setValue: Dispatch<SetStateAction<T>>;
}

export function createLocalStorageContext<T extends object>({
    name,
    defaultValue,
    storageKey,
}: CreateContextOptions<T>) {
    const LocalContext = createContext<ContextType<T> | undefined>(undefined);
    LocalContext.displayName = name;

    const Provider = ({ children }: { children: ReactNode }) => {
        const [value, setValue] = useState<T>(defaultValue);

        useEffect(() => {
            const stored = localStorage.getItem(storageKey);
            if (stored) {
                try {
                    const parsed = JSON.parse(stored) as T;
                    setValue((prev) => ({
                        ...prev,
                        ...parsed,
                    }));
                } catch (error) {
                    console.error(
                        `Failed to parse ${name} from localStorage`,
                        error
                    );
                }
            }
        }, []);

        useEffect(() => {
            localStorage.setItem(storageKey, JSON.stringify(value));
        }, [value]);

        return (
            <LocalContext.Provider value={{ value, setValue }}>
                {children}
            </LocalContext.Provider>
        );
    };

    const useValue = (): ContextType<T> => {
        const context = useContext(LocalContext);
        if (context === undefined) {
            throw new Error(`use${name} must be used within a ${name}Provider`);
        }
        return context;
    };

    return [Provider, useValue] as const;
}
