import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('Purple');

  const themeHandler = () => {
    if (theme === 'Purple') {
      setTheme('Blue');
    } else if (theme === 'Blue') {
      setTheme('Gray');
    } else {
      setTheme('Purple');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, themeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};
