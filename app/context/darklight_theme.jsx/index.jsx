"use client";

import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, settheme] = useState(false);
  return (
    <ThemeContext.Provider value={[theme, settheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
