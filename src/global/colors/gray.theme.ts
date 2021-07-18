import { defaultColors } from './default.theme';
import { ColorTheme, Theme } from '../../@types/colors';

const GRAY_COLORS_THEME: ColorTheme = {
  ...defaultColors,
  secondary: {
    light: '#A9A9A9',
    main: '#555555',
    dark: '#333333',
    darkest: '#111111',
  },
};

const GRAY_THEME_ID = 'gray';

const GRAY_THEME: Theme = {
  id: GRAY_THEME_ID,
  colors: GRAY_COLORS_THEME,
};

export { GRAY_THEME, GRAY_THEME_ID, GRAY_COLORS_THEME };
