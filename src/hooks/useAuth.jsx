import { useState } from "react";

const useAuth = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const token = sessionStorage.getItem("accessToken");

  const [isAuthenticated, setIsAuthenticated] = useState(!!token);

  const login = (token) => {
    sessionStorage.setItem("accessToken", token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    // sessionStorage.removeItem("accessToken");
    sessionStorage.clear();
    setIsAuthenticated(false);
  };

  return {
    id,
    password,
    nickname,
    setId,
    setPassword,
    setNickname,
    token,
    login,
    logout,
    isAuthenticated,
  };
};

export default useAuth;
