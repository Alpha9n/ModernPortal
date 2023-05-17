import { useColorMode } from '@chakra-ui/react';

const themeKey = 'theme';
export const themes = ['dark', 'light', 'OS'] as const;
export type ThemeTypes = typeof themes[number];

export interface Theme {
    value: ThemeTypes;
};

export const isThemeValue = (target: any): target is ThemeTypes => {
    return themes.includes(target);
};

export const setTheme = (theme: ThemeTypes) => {
    chrome.storage.sync.set({ 'theme': theme });
};

export const getTheme = (func: Function = () => { }): ThemeTypes => {
    try {
        chrome.storage.sync.get(themeKey)
            .then(async (getData) => {
                console.log(getData[themeKey]);
                let returnData = isThemeValue(getData[themeKey]) ? func(getData[themeKey]) : func('OS');
                if (returnData === undefined && isThemeValue(getData[themeKey])) {
                    returnData = getData[themeKey]
                }
                return returnData;
            });
    } catch (error) {
    }
    return 'OS';
};