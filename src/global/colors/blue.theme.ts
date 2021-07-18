import { defaultColors } from './default.theme';
import { ColorTheme, Theme } from '../../@types/colors';

const BLUE_COLORS_THEME: ColorTheme = {
  ...defaultColors,
  secondary: {
    light: '#4a638d',
    main: '#0f3655',
    dark: '#062741',
    darkest: '#152238',
  },
};

const BLUE_THEME_ID = 'blue';

const BLUE_THEME: Theme = {
  id: BLUE_THEME_ID,
  colors: BLUE_COLORS_THEME,
};

export { BLUE_THEME, BLUE_THEME_ID, BLUE_COLORS_THEME };
