import { type Dispatch, createContext, useContext } from 'react';
import { Theme } from './constants';

export type ThemeContextProps = {
  theme?: Theme;
  setTheme?: Dispatch<React.SetStateAction<Theme>>;
};

export const ThemeContext = createContext<ThemeContextProps>({});

export const useThemeContext = () => useContext(ThemeContext);

export const LOCAL_STORAGE_THEME_KEY = 'theme';