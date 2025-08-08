'use client'; // This is required for client-side components

import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState, createContext } from 'react';

const inter = Inter({ subsets: ['latin'] });

// Create the ThemeContext
export const ThemeContext = createContext({
  darkMode: false,
  setDarkMode: () => {},
});

// Define your themes
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
});

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
          <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </ThemeContext.Provider>
      </body>
    </html>
  );
}