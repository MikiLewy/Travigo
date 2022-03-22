import { Breakpoints } from 'interfaces/Breakpoints';
const breakpoints: Breakpoints = {
  sm: 576,
  md: 768,
  l: 992,
  xl: 1200,
  xxl: 1400,
};

export const queries = {
  phone: `(min-width: ${breakpoints.sm}px)`,
  tablet: `(min-width: ${breakpoints.md}px)`,
  biggerTablet: `(min-width: ${breakpoints.l}px)`,
  laptop: `(min-width: ${breakpoints.xl}px)`,
  desktop: `(min-width: ${breakpoints.xxl}px)`,
};
