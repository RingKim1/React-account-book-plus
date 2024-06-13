import { CgProfile } from "react-icons/cg";
import styled from "styled-components";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const User = () => {
  const { logout, nickname } = useAuth();
  const user = JSON.parse(sessionStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("정말로 로그아웃 하시겠습니까?");
    if (confirmLogout) {
      logout();
      navigate("/login");
    }
  };

  return user ? (
    <Div>
      {user.nickname}
      {user.avatar ? (
        <Img src={user.avatar} onClick={() => navigate("/profile")} />
      ) : (
        <Profile onClick={() => navigate("/profile")} />
      )}
      <Button onClick={handleLogout}>로그아웃</Button>
    </Div>
  ) : (
    <div></div>
  );
};

export default User;

const Div = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  border: none;
  border-radius: 20px;
  width: 35px;
  height: 35px;

  background-size: cover;
  margin: 0 10px;

  cursor: pointer;
`;

const Profile = styled(CgProfile)`
  border: none;
  border-radius: 20px;
  width: 35px;
  height: 35px;

  background-size: cover;
  margin: 0 10px;

  cursor: pointer;
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;

  height: 30px;
  background-color: lightcoral;
  cursor: pointer;
`;
