import React, { createContext, useContext } from "react";

export const AuthContext = createContext();

//login hiigegu shalgah
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
