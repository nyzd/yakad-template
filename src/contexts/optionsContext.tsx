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

interface Options {
    arabicFont: "test";
    arabicFontSize: "small" | "medium" | "large";
    translationFontSize: "small" | "medium" | "large";
    playing: boolean;
    playBoxShow: boolean;
    recitationStatus: boolean;
    ayahRepeat: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | "infinite";
    delay: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    playBackRate: 0.25 | 0.5 | 0.75 | 1 | 1.25 | 1.5 | 1.75 | 2;
    limitMode:
        | "continuous"
        | "surah"
        | "ayah"
        | "juz"
        | "hizb"
        | "ruku"
        | "page"
        | "time";
    limitRange: number;
    limitRepeat: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | "infinite";
    autoScroll: boolean;
}

const defaultOptions: Options = {
    arabicFont: "test",
    arabicFontSize: "medium",
    translationFontSize: "medium",
    playing: false,
    playBoxShow: false,
    recitationStatus: true,
    ayahRepeat: 0,
    delay: 0,
    playBackRate: 1,
    limitMode: "continuous",
    limitRange: 1,
    limitRepeat: 0,
    autoScroll: true,
};

interface OptionsContextType {
    options: Options;
    setOptions: Dispatch<SetStateAction<Options>>;
}

const OptionsContext = createContext<OptionsContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = "options";

export const OptionsProvider = ({ children }: { children: ReactNode }) => {
    const [options, setOptions] = useState<Options>(defaultOptions);

    useEffect(() => {
        const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (stored) {
            try {
                const parsed = JSON.parse(stored) as Options;
                setOptions((prev) => ({
                    ...prev,
                    ...parsed,
                }));
            } catch (error) {
                console.error(
                    "Failed to parse options from localStorage",
                    error
                );
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(options));
    }, [options]);

    return (
        <OptionsContext.Provider value={{ options, setOptions }}>
            {children}
        </OptionsContext.Provider>
    );
};

export const useOptions = (): OptionsContextType => {
    const context = useContext(OptionsContext);
    if (!context) {
        throw new Error("useOptions must be used within an OptionsProvider");
    }
    return context;
};
