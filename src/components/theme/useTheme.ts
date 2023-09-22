import { LOCAL_STORAGE_THEME_KEY, useThemeContext } from "./ThemeContext";
import { Theme } from "./constants";

type UseTheme = {
  toggleTheme: () => void;
  theme: Theme;
};

export function useTheme(): UseTheme {
  const { theme, setTheme } = useThemeContext();

  const toggleTheme = () => {
    const themePicker = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

    setTheme(themePicker);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, themePicker);
  };

  return {
    theme,
    toggleTheme,
  };
}