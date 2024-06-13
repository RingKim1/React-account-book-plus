import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import authApi from "../axios/authApi";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";

const Profile = () => {
  const {
    nickname,
    setNickname,
    avatar,
    setAvatar,
    avatarUrl,
    setAvatarUrl,
    token,
  } = useAuth();

  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("user"));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await authApi.patch(
      "/profile",
      {
        nickname: nickname,
        avatar: avatar,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (data.success) {
      setNickname(nickname);
      setAvatar(avatarUrl);
      alert("프로필이 변경되었습니다.");
      navigate("/");
    }
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
    setAvatarUrl(URL.createObjectURL(file));
  };
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
        <Label htmlFor="avatar">아바타 변경</Label>
        <Input2 type="file" id="avatar" onChange={handleAvatarChange} />
        {avatarUrl && <AvatarPreview src={avatarUrl} />}
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
  height: 350px;

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

const Input2 = styled.input`
  width: 98%;
  height: 30px;
  margin: 20px auto;
  color: black;

  border: none;
`;

const AvatarPreview = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;

  background-size: cover;
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
