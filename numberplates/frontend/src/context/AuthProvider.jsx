import React, { useCallback } from "react";
import { createContext, useContext, useMemo } from "react";
import { fakeAuthProvider } from "./Auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  // call this function when you want to authenticate the user
  let login = useCallback(
    (newUser, callback) => {
      return fakeAuthProvider.signin(() => {
        setUser(newUser);
        callback();
      });
    },
    [setUser]
  );

  // call this function to sign out logged in user
  let logout = useCallback(
    (callback) => {
      return fakeAuthProvider.signout(() => {
        setUser(null);
        callback();
      });
    },
    [setUser]
  );

  const value = useMemo(
    () => ({
      user,
      login,
      logout
    }),
    [user, login, logout]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
