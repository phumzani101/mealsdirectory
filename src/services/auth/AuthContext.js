import React, { createContext, useEffect, useState } from "react";
import {
  loadUserRequest,
  loginRequest,
  registerRequest,
  signOutRequest,
} from "./index";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = ({ email, password }) => {
    setIsLoading(true);
    loginRequest({ email, password })
      .then((userCredential) => {
        setIsLoading(false);
        setUser(userCredential.user);
      })
      .catch(() => {
        setIsLoading(false);
        setError("Invalid login");
      });
  };

  const register = ({ email, password, confirmPassword }) => {
    setIsLoading(true);
    if (confirmPassword !== password) {
      setError("Password does not match");
      setIsLoading(false);
      return;
    }
    registerRequest({ email, password })
      .then((userCredential) => {
        setUser(userCredential.user);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Failed to register, please try again");
        setIsLoading(false);
        console.log(err);
      });
  };

  const logout = () => {
    signOutRequest();
    setUser(null);
  };

  useEffect(() => {
    loadUserRequest(setUser);
  }, []);

  console.log("user", user);
  return (
    <AuthContext.Provider
      value={{
        isAuth: !!user,
        user,
        isLoading,
        error,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
