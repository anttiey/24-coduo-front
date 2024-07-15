import { DefaultTheme } from 'styled-components';

const color = {
  primary: {
    light: '#F1FBFA',
    main: '#00E0C8',
  },
  secondary: '#FFC453',
};

const fontSize = {
  sm: '12px',
  base: '14px',
  md: '16px',
  lg: '24px',
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
