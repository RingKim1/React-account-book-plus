import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [newNickname, setNewNickname] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  const token = sessionStorage.getItem("accessToken");

  const [isAuthenticated, setIsAuthenticated] = useState(!!token);

  const login = (data) => {
    sessionStorage.setItem("user", JSON.stringify(data));
    sessionStorage.setItem("accessToken", data.accessToken);
    setIsAuthenticated(true);
  };

  const logout = () => {
    // sessionStorage.removeItem("accessToken");
    sessionStorage.clear();
    setIsAuthenticated(false);
  };

  // 질문 : token을 사라지게 하면 바로 감지해서 인증 여부를 바꾸고, 바로 로그인 페이지로 이동하는..?
  useEffect(() => {
    // console.log(token);
    token ? setIsAuthenticated(true) : setIsAuthenticated(false);
  }, [token]);

  // useEffect(() => {
  //   isAuthenticated ? navigate("/") : navigate("/login");
  // }, [isAuthenticated]);

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
    newNickname,
    setNewNickname,
    userInfo,
    setUserInfo,
  };
};

export default useAuth;
