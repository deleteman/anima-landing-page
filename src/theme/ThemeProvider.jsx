import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material";
import React from "react";

const appTheme = createTheme({
  palette: {
    primary: {
      main: "rgba(4, 56, 115, 1)",
    },
    secondary: {
      main: "rgba(255, 228, 146, 1)",
    },
    error: {
      main: "rgba(220, 27, 36, 1)",
    },
    background: {
      default: "rgba(255, 255, 255, 1)",
    },
    text: {
      primary: "rgba(33, 37, 41, 1)",
      secondary: "rgba(255, 255, 255, 1)",
    },
  },
  typography: {
    fontFamily: "Inter, Helvetica",
    h1: {
      fontSize: "72px",
      fontWeight: 700,
      letterSpacing: "-1.44px",
      lineHeight: "normal",
    },
    h2: {
      fontSize: "64px",
      fontWeight: 700,
      letterSpacing: "-1.28px",
      lineHeight: "normal",
    },
    h3: {
      fontSize: "54px",
      fontWeight: 700,
      letterSpacing: "-1.08px",
      lineHeight: "normal",
    },
    h4: {
      fontSize: "36px",
      fontWeight: 700,
      letterSpacing: "-0.72px",
      lineHeight: "normal",
    },
    h5: {
      fontSize: "28px",
      fontWeight: 700,
      letterSpacing: "-0.56px",
      lineHeight: "36px",
    },
    body1: {
      fontSize: "18px",
      fontWeight: 400,
      letterSpacing: "-0.36px",
      lineHeight: "30px",
    },
    body2: {
      fontSize: "16px",
      fontWeight: 400,
      letterSpacing: "-0.32px",
      lineHeight: "20px",
    },
    button: {
      fontSize: "18px",
      fontWeight: 500,
      letterSpacing: "-0.36px",
      lineHeight: "23px",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.typography.body1,
        }),
        head: ({ theme }) => ({
          ...theme.typography.h5,
        }),
        body: ({ theme }) => ({
          ...theme.typography.body1,
        }),
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: ({ theme }) => ({
          ...theme.typography.body1,
        }),
        secondary: ({ theme }) => ({
          ...theme.typography.body2,
        }),
      },
    },
  },
});

export const ThemeProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={appTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
