import { defaultColors } from './default.theme';
import { ColorTheme, Theme } from '../../@types/colors';

const PURPLE_COLORS_THEME: ColorTheme = {
  ...defaultColors,
  secondary: {
    light: '#c86bfa',
    main: '#7800c7',
    dark: '#590094',
    darkest: '#3A0061',
  },
};

const PURPLE_THEME_ID = 'purple';

const PURPLE_THEME: Theme = {
  id: PURPLE_THEME_ID,
  colors: PURPLE_COLORS_THEME,
};

export { PURPLE_THEME, PURPLE_THEME_ID, PURPLE_COLORS_THEME };
