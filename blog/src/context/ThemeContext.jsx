import React, { createContext, useState } from "react";

export const ColorModeContext = createContext();

export function ThemeContext({ children }) {
  const [theme, setTheme] = useState("dark");
  const [username, setUsername] = useState("");

  const colorModeHander = () => {
    setTheme((prev) => (prev === "dark" ? "white" : "dark"));
  };
  return (
    <ColorModeContext.Provider
      value={{
        theme: theme,
        changeTheme: colorModeHander,
        user: username,
        setUser: setUsername,
      }}
    >
      {children}
    </ColorModeContext.Provider>
  );
}

export default ThemeContext;
