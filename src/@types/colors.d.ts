type DefaultColors = {
  primary: {
    darkest: string;
    dark: string;
    main: string;
  };
  common: {
    white: string;
    black: string;
    blue: string;
  };
};

type ColorTheme = {
  secondary: {
    light: string;
    main: string;
    dark: string;
    darkest: string;
  };
} & DefaultColors;

type Theme = {
  id: string;
  colors: ColorTheme;
};

export { Theme, DefaultColors, ColorTheme };
