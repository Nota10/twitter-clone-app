import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { Theme } from '../../@types/colors';
import { BLUE_THEME, BLUE_THEME_ID } from '../../global/colors/blue.theme';
import { GRAY_THEME, GRAY_THEME_ID } from '../../global/colors/gray.theme';
import {
  PURPLE_THEME,
  PURPLE_THEME_ID,
} from '../../global/colors/purple.theme';

type ThemeContextProps = {
  theme: Theme;
  toggleTheme(theme: string): void;
};

export const ThemeContext = createContext<ThemeContextProps>({
  theme: PURPLE_THEME,
  toggleTheme: () => {
  },
});

type ThemeProviderProps = {
  initialValue: Theme;
  children: ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  initialValue,
  children,
}) => {
  const [theme, setTheme] = useState<Theme>(initialValue);

  const toggleTheme = useCallback((theme: string) => {
    let choosenTheme: Theme = {} as Theme;

    if (theme === PURPLE_THEME_ID) {
      choosenTheme = PURPLE_THEME;
    }

    if (theme === BLUE_THEME_ID) {
      choosenTheme = BLUE_THEME;
    }

    if (theme === GRAY_THEME_ID) {
      choosenTheme = GRAY_THEME;
    }

    setTheme(choosenTheme);
  }, []);

  const MemoizedValue = useMemo(() => {
    const value: ThemeContextProps = {
      theme,
      toggleTheme,
    };
    return value;
  }, [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={MemoizedValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
