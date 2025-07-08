// src/styles/theme.ts
import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  colors: {
    background: '#ffffff',
    text: '#333333',
    primary: '#2563eb', // A darker blue that works with white text
    primaryHover: '#535bf2',
    textSecondary: '#666666',
    borderColor: '#dddddd',
    inputBg: '#f8f9fa',
    cardBg: '#ffffff',
    techBg: '#f0f0f0',
    primaryDark: undefined,
    backgroundAlt: undefined,
    border: undefined,
    primaryLight: undefined,
    secondary: undefined,
    shadow: undefined,
    textTertiary: undefined,
    textPrimary: undefined,
    backgroundLight: undefined,
    backgroundLighter: undefined,
    backgroundAlt2: undefined,
    shadowHover: undefined
  },
  sectionBg: '#ffffff',
  title: 'light'
};

export const darkTheme: DefaultTheme = {
  colors: {
    background: '#121212',
    text: '#f8f9fa', // Light text for dark background
    primary: '#2563eb', // A darker blue that works with white text
    primaryHover: '#535bf2',
    textSecondary: '#aaaaaa',
    borderColor: '#444444',
    inputBg: '#2d2d2d',
    cardBg: '#1e1e1e',
    techBg: '#333333',
    backgroundAlt: undefined,
    border: '#444',
    primaryLight: undefined,
    secondary: '#535bf2',
    shadow: undefined,
    primaryDark: undefined,
    textTertiary: undefined,
    textPrimary: undefined,
    backgroundLight: undefined,
    backgroundLighter: undefined,
    backgroundAlt2: undefined,
    shadowHover: undefined
  },
  sectionBg: '#121212' // Dark background
  ,
  title: 'light'
};