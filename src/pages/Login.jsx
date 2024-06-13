import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useAuth from "../hooks/useAuth";
import auth from "../axios/authApi";

const Login = () => {
  const { id, password, setId, setPassword, login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await auth.post("/login", {
      id,
      password,
    });
    if (data.success) {
      alert("로그인 되었습니다.");
      login(data);
      navigate("/");
    } else {
      alert("로그인에 실패하였습니다.");
    }
  };
  return (
    <>
      <H2>Login</H2>
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
        <Button1 type="submit">로그인</Button1>
        <Button2 type="button" onClick={() => navigate("/signup")}>
          회원가입
        </Button2>
      </Form>
    </>
  );
};

export default Login;

const H2 = styled.h2`
  text-align: center;
  font-size: 50px;
  font-weight: 700;

  margin: 20px auto;
`;

const Form = styled.form`
  width: 300px;
  height: 300px;

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
