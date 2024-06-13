import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import authApi from "../axios/authApi";
import { useQuery } from "@tanstack/react-query";

const useAuth = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [avatar, setAvatar] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

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

  // 질문 : 닉네임 수정시 상태를 변경하도록 하는 로직..
  // const fetchAuth = async () => {
  //   const response = await authApi.get("/user", {
  //     Authorization: `Bearer ${token}`,
  //   });
  //   return response.data;
  // };

  // const {
  //   data: data,
  //   isPending,
  //   isError,
  // } = useQuery({
  //   queryKey: ["user"],
  //   queryFn: fetchAuth,
  // });

  // useEffect(() => {
  //   fetchAuth();
  //   sessionStorage.setItem("user", JSON.stringify(data));
  // }, [nickname]);

  useEffect(() => {
    // console.log(token);
    token ? setIsAuthenticated(true) : setIsAuthenticated(false);
  }, [token]);

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
    token,
    avatar,
    setAvatar,
    avatarUrl,
    setAvatarUrl,
  };
};

export default useAuth;
