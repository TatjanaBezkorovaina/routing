import { createContext } from "react";

export const themes = {
  dark: {
    color: "#E5F3FF",
    background: "#392620",
  },
  light: {
    color: "#392620",
    background: "#E5F3FF",
  },
};

export const ThemeContext = createContext(themes.light);
