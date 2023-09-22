import { type FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from './ThemeContext';
import { Theme } from './constants';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
 
  const contextValues = useMemo(() => ({
    theme: theme,
    setTheme: setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={contextValues}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;