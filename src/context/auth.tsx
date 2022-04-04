import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  isLoggedIn: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext({} as AuthContextType);

export const useAuth = () => useContext(AuthContext);

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const AuthContextProvider: React.FC = ({ children }) => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function login(email: string, password: string) {
    setIsLoggedIn(true);
    localStorage.setItem("token", "123456");
  }

  function logout() {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    navigate("/login");
  }

  async function checkLogin() {
    await sleep(1000);

    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
