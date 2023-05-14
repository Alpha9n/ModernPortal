const themeKey = "theme";
export const themes = ["dark", "light", "OS"] as const;
export type ThemeTypes = typeof themes[number];

export interface Theme {
    value: ThemeTypes;
}

export const isThemeValue = (target: any): target is ThemeTypes => {
    return themes.includes(target);
}

export const setTheme = (theme: ThemeTypes) => {
    chrome.storage.sync.set({ themeKey: theme });
}

export const getTheme = (): string => {
    let result
    chrome.storage.sync.get(themeKey, (obj) => {
        result = obj.theme;
    });
    if (typeof result === "string") return result;
    return ''
}