import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import auth from "../axios/authApi";
import useAuth from "../hooks/useAuth";

const Signup = () => {
  const navigate = useNavigate();
  const { id, password, nickname, setId, setPassword, setNickname } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await auth.post("/register", {
      id,
      password,
      nickname,
    });
    if (data.success) {
      alert("sign up success");
      navigate("/login");
    } else {
      alert("Signup failed");
    }
  };

  return (
    <>
      <H2>Sign Up</H2>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="id">로그인 아이디</Label>
        <Input
          placeholder="아이디(4~10글자)"
          id="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <Label htmlFor="password">비밀번호</Label>
        <Input
          placeholder="비밀번호(4~15글자)"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <Label htmlFor="nickname">닉네임</Label>
        <Input
          placeholder="닉네임(1~10글자)"
          id="nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <Button1 type="button" onClick={() => navigate("/login")}>
          로그인
        </Button1>
        <Button2 type="submit">회원가입</Button2>
      </Form>
    </>
  );
};

export default Signup;

const H2 = styled.h2`
  text-align: center;
  font-size: 50px;
  font-weight: 700;

  margin: 20px auto;
`;

const Form = styled.form`
  width: 300px;
  height: 400px;

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
  background-color: lightsteelblue;
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
