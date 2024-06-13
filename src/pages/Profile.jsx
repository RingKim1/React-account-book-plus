import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import auth from "../axios/authApi";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";

// 질문 : 전체다 새로 짜야 하는 코드,,
const Profile = () => {
  const {
    nickname,
    setNickname,
    newNickname,
    setNewNickname,
    userInfo,
    setUserInfo,
    isAuthenticated,
  } = useAuth();

  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("user"));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem("accessToken");
    const formData = new FormData();
    formData.append("nickname", newNickname);

    const { data } = await auth.patch("/profile", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    if (data.success) {
      setUserInfo((prevState) => ({
        ...prevState,
        nickname: data.nickname,
      }));
      alert("닉네임이 변경되었습니다.");
      setNewNickname("");
    } else {
      alert("닉네임 변경에 실패했습니다.");
    }
  };

  useEffect(() => {
    if (!isAuthenticated) {
      alert("로그인이 필요합니다.");
      navigate("/login");
    } else {
      const fetchUserInfo = async () => {
        try {
          const token = localStorage.getItem("accessToken");
          const { data } = await auth.get("/user", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUserInfo(data);
        } catch (error) {
          console.error("Failed to fetch user info:", error);
        }
      };
      fetchUserInfo();
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <H2>Profile</H2>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="nickname">닉네임 변경({user.nickname})</Label>
        <Input
          placeholder="닉네임(1~10글자)"
          id="nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <Button1 type="submit">프로필 업데이트</Button1>
      </Form>
    </>
  );
};

export default Profile;

const H2 = styled.h2`
  text-align: center;
  font-size: 50px;
  font-weight: 700;

  margin: 20px auto;
`;

const Form = styled.form`
  width: 300px;
  height: 150px;

  background-color: white;
  border-radius: 5px;
  margin: 20px auto;
  padding: 3%;

  text-align: center;
  align-items: center;
  justify-content: center;
`;

const Label = styled.label`
  color: black;

  margin: 20px auto;

  font-size: 20px;
  font-weight: 600;
`;

const Input = styled.input`
  width: 98%;
  height: 30px;
  margin: 20px auto;
  color: black;

  border: none;
  border-bottom: 1px solid lightslategray;
`;

const Button1 = styled.button`
  background-color: blue;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: none;

  margin: 10px 0;
  cursor: pointer;
`;

const Button2 = styled.button`
  background-color: lightslategray;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;
