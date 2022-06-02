import { createContext, useContext, useState, useEffect } from "react";

import { useAxios } from "../customHooks/useAxios";

const AuthContext = createContext({});
const AuthProvider = ({ children }) => {
  const { response, loading, error, fetchData } = useAxios();
  const [loginUser, setLoginUser] = useState({ email: "", password: "" });
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [encodedToken, setEncodedToken] = useState(null);

  useEffect(() => {
    let videoLibToken = localStorage.getItem("myToken");
    if (videoLibToken !== null) {
      setEncodedToken(videoLibToken);
    }
  }, []);

  const loginHandler = async (e) => {
    e.preventDefault();
    fetchData({
      method: "post",
      url: "/api/auth/login",
      data: { email: loginUser.email, password: loginUser.password },
    });
    setLoginUser({ email: "", password: "" });
    setIsUserLoggedIn(true);
  };

  const logOut = () => {
    localStorage.clear();
    setEncodedToken(null);
    setUser({});
  };

  useEffect(() => {
    if (response !== undefined) {
      localStorage.setItem("myToken", response.encodedToken);
      localStorage.setItem("user", JSON.stringify(response.foundUser));
      setUser(response.foundUser);
      setEncodedToken(response.encodedToken);
    }
  }, [response]);

  return (
    <AuthContext.Provider
      value={{
        loginHandler,
        isUserLoggedIn,
        loading,
        error,
        setLoginUser,
        loginUser,
        user,
        encodedToken,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
