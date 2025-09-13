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

export function createLocalStorageContext<T extends object>({
    name,
    defaultValue,
    storageKey,
}: CreateContextOptions<T>) {
    type ContextType = {
        [K in Lowercase<typeof name>]: T;
    } & {
        [K in `set${Capitalize<typeof name>}`]: Dispatch<SetStateAction<T>>;
    };

    const LocalContext = createContext<ContextType | undefined>(undefined);
    LocalContext.displayName = name;

    const Provider = ({ children }: { children: ReactNode }) => {
        const [state, setState] = useState<T>(defaultValue);

        const contextValue = {
            [name.toLowerCase()]: state,
            [`set${name}`]: setState,
        } as ContextType;

        useEffect(() => {
            const stored = localStorage.getItem(storageKey);
            if (stored) {
                try {
                    const parsed = JSON.parse(stored) as T;
                    setState((prev) => ({
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
            localStorage.setItem(storageKey, JSON.stringify(state));
        }, [state]);

        return (
            <LocalContext.Provider value={contextValue}>
                {children}
            </LocalContext.Provider>
        );
    };

    const useValue = (): ContextType => {
        const context = useContext(LocalContext);
        if (context === undefined) {
            throw new Error(`use${name} must be used within a ${name}Provider`);
        }
        return context;
    };

    return [Provider, useValue] as const;
}
