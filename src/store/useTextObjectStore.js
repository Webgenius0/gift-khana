import { create } from "zustand";


export const useTextObjectStore = create(
    (set) => ({
        currentFontFamily: "Arial",
        currentFontSize: null,
        currentTextColor: "#000000",

        setCurrentFontFamily: (fontFamily) => set({ currentFontFamily: fontFamily }),
        setCurrentFontSize: (fontSize) => set({ currentFontSize: fontSize }),

        setCurrentTextColor: (color) => set({ currentTextColor: color }),
        resetCurrentTextColor: () => set({ currentTextColor: "#000000" }),

        resetCurrentFontSize: () => set({ currentFontSize: 24 }),
        resetCurrentFontFamily: () => set({ currentFontFamily: "Arial" }),

        resetTextObjectStore: () => set({ currentFontSize: null, currentFontFamily: "Arial", currentTextColor: "#000000" }),
    })
);