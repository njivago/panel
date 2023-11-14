import { type Dispatch, createContext, useContext } from 'react';
import type { Theme } from './constants';

export type ThemeContextProps = {
  theme?: Theme;
  setTheme?: Dispatch<React.SetStateAction<Theme>>;
};

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export const ThemeContext = createContext<ThemeContextProps>({});
export const useThemeContext = () => useContext(ThemeContext);
