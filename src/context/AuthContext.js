import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAxios } from "../customHooks/useAxios";
import { loginLogoutToast } from "../customHooks/Toastify";
import axios from "axios";

const AuthContext = createContext({});
const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const authInitialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const { response, authLoading, error, fetchData } = useAxios();
  const [loginUser, setLoginUser] = useState({ email: "", password: "" });
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [encodedToken, setEncodedToken] = useState(null);
  const [signupUser, setSignUpUser] = useState(authInitialState);

  let from = location.state?.from?.pathname || "/";

  const loginHandler = async (e) => {
    e.preventDefault();
    fetchData({
      method: "post",
      url: "/api/auth/login",
      data: { email: loginUser.email, password: loginUser.password },
    });
    setLoginUser({ email: "", password: "" });
    setIsUserLoggedIn(true);
    navigate(from, { replace: true });
    loginLogoutToast("Login successful");
  };

  const logOut = () => {
    localStorage.clear();
    setEncodedToken(null);
    setIsUserLoggedIn(false);
    setUser({});
    loginLogoutToast("Logged out");
  };

  useEffect(() => {
    if (response !== undefined) {
      localStorage.setItem("myToken", response.encodedToken);
      localStorage.setItem("user", JSON.stringify(response.foundUser));
      setUser(response.foundUser);
      setEncodedToken(response.encodedToken);
    }
  }, [response]);

  useEffect(() => {
    let videoLibToken = localStorage.getItem("myToken");
    if (videoLibToken !== null) {
      setEncodedToken(videoLibToken);
    }
  }, []);

  const signUpHandler = async (e, email, password, firstName, lastName) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/signup", {
        email,
        password,
        firstName,
        lastName,
      });
      localStorage.setItem("myToken", response.data.encodedToken);
      setUser(response.data.createdUser);
      setSignUpUser({ email: "", password: "", firstName: "", lastName: "" });
      navigate("/login");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        loginHandler,
        isUserLoggedIn,
        authLoading,
        error,
        setLoginUser,
        loginUser,
        user,
        encodedToken,
        logOut,
        signupUser,
        setSignUpUser,
        signUpHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
