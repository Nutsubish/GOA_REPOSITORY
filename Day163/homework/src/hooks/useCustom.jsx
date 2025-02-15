import { useState, useEffect } from "react";

export function useCustom() {
  const [user, setUser] = useState(nul);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const register = (email, password) => {
    const newUser = { email, password };
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
  };

  const login = (email, password) => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser && savedUser.email == email && savedUser.password == password) {
      setUser(savedUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return { user, register, login, logout };
}
