/* eslint-disable @typescript-eslint/ban-types */
import { useMemo } from 'react';
import { Theme } from '../@types/colors';

import { useThemeContext } from '../contexts/ThemeContext';

type Generator<T extends {}> = (theme: Theme) => T;

const useThemeObject = <T extends {}>(fn: Generator<T>) => {
  const { theme } = useThemeContext();

  const ThemeAwareObject = useMemo(() => fn(theme), [fn, theme]);

  return ThemeAwareObject;
};

export { useThemeObject };
