'use client';
import { createTheme } from '@mui/material/styles';

/* UKRI colours */
const UKRI_COLOURS = {
  blue: '#2E2D62',
  bright: {
    orange: '#FF6900', // pure orange
    yellow: '#FBBB10', // yellow
    green: '#67C04D', // light green
    blue: '#1E5DF8', // blue
    purple: '#BE2BBB', // bright purple
    red: '#E94D36', // light red
  },
  deep: {
    orange: '#C13D33', // pure orange
    yellow: '#F08900', // vivid yellow
    green: '#3E863E', // green
    blue: '#003088', // blue
    purple: '#8A1A9B', // bright purple
    red: '#A91B2E', // red
  },
};

const theme = createTheme({
  palette: {
    // Light/dark mode
    mode: 'light',
    primary: {
      main: UKRI_COLOURS.deep.blue,
    },
    secondary: {
      main: UKRI_COLOURS.deep.blue,
    },
    text: {
      secondary: 'rgba(0, 0, 0, 0.54)',
    },
    background: {
      default: '#FAFAFA',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
});

export default theme;
