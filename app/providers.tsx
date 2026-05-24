"use client";

import type { ReactNode } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#181c2c",
    },
    secondary: {
      main: "#ae2f34",
    },
    background: {
      default: "#fdf9ef",
      paper: "#fcfaf2",
    },
    text: {
      primary: "#1c1c16",
      secondary: "#46464c",
    },
  },
  typography: {
    fontFamily: "var(--font-body), system-ui, sans-serif",
    h1: {
      fontFamily: "var(--font-display), sans-serif",
      fontWeight: 800,
    },
    h2: {
      fontFamily: "var(--font-display), sans-serif",
      fontWeight: 800,
    },
    button: {
      fontFamily: "var(--font-mono), monospace",
      textTransform: "none",
      fontWeight: 400,
    },
  },
  shape: {
    borderRadius: 12,
  },
});

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
}