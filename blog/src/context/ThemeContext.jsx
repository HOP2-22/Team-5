import React, { createContext, useState } from "react";

export const ThemeContext = createContext({
  color: "#1a1a00",
  theme: "white",
  setColor: () => {},
  setTheme: () => {},
  changeTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("white");
  const [color, setColor] = useState("#1a1a00");
  const changeTheme = () => {
    theme === "white" ? setTheme("black") : setTheme("white");
    color === "#1a1a00" ? setColor("white") : setColor("#1a1a00");
  };

  return (
    <ThemeContext.Provider
      value={{
        color,
        theme,
        setColor,
        setTheme,
        changeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;

// import React, { createContext, useState } from 'react'
// export const Context = createContext({
//     isLoginSign: false,
//     isLogin: true,
//     error: '',
//     userInfo: '',
//     drop: '',
//     isHistory: false,
//     setError: () => {},
//     setDrop: () => {},
//     setIsLogin: () => {},
//     setIsLoginSign: () => {},
//     setIsHistory: () => {}
// })
// export const Provider = ({children}) => {
//     const [drop, setDrop] = useState(false);
//     const [isLoginSign, setIsLoginSign] = useState(false);
//     const [isLogin, setIsLogin] = useState(true);
//     const [isHistory, setIsHistory] = useState(false);
//     return(
//         <Context.Provider value={{ isLoginSign, setIsLoginSign, isLogin, setIsLogin, drop, setDrop, isHistory, setIsHistory }}>
//             {children}
//         </Context.Provider>
//     )
// }
