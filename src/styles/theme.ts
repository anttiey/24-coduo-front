import { DefaultTheme } from 'styled-components';

const color = {
  primary: {
    light: '#F1FBFA',
    main: '#00E0C8',
    dark: '#00758B',
  },
  secondary: '#FFC453',
};

const fontSize = {
  sm: '1.2rem',
  base: '1.4rem',
  md: '1.6rem',
  lg: '2.4rem',
};

const fontWeight = {
  light: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
};

export type ColorTypes = typeof color;
export type FontSizeTypes = typeof fontSize;
export type FontWeightTypes = typeof fontWeight;

export const theme: DefaultTheme = {
  color,
  fontSize,
  fontWeight,
};
