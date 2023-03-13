import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export const ColorModeContext = createContext();

export function ThemeContext({ children }) {
  const [theme, setTheme] = useState("dark");
  const [username, setUsername] = useState(null);

  const colorModeHander = () => {
    setTheme((prev) => (prev === "dark" ? "white" : "dark"));
  };

  axios.interceptors.request.use(
    (config) => {
      const token = Cookies.get("token");
      if (!token) {
        return config;
      }
      config.headers.set("token", token);
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const LogOut = (config) => {
    setUsername(null);
    Cookies.remove("token");
    config.headers.remove("token");
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await axios.get(`http://localhost:8080/user/checkUser`);
        if (user.data.exp * 1000 <= Date.now()) {
          LogOut();
          return;
        } else setUsername(user.data.email);
      } catch (e) {
        console.log(e);
      }
    };
    getUser();
  }, []);

  return (
    <ColorModeContext.Provider
      value={{
        theme: theme,
        changeTheme: colorModeHander,
        username: username,
        setUsername: setUsername,
      }}
    >
      {children}
    </ColorModeContext.Provider>
  );
}

export default ThemeContext;
