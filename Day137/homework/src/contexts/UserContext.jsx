import React, { createContext, useState } from "react";


export const UserContext = createContext();


export const DataContext = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);


  const login = () => {
    setIsLoggedIn(true);
    setUser({ name: "Nika", email: "Nutsubidze" });
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
