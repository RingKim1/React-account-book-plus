import { BsList } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Navbar = ({ isNavOpen, toggleNav }) => {
  const navigate = useNavigate();
  return (
    <Nav $isNavOpen={isNavOpen}>
      <NavBtn onClick={toggleNav} />
      <Button onClick={() => navigate("/")}>Home</Button>
      <Button onClick={() => navigate("/Profile")}>Profile</Button>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: ${({ $isNavOpen }) => ($isNavOpen ? "0" : "-250px")};
  width: 200px;
  height: 100%;
  background-color: #333;
  color: white;
  transition: left 0.3s ease;

  border: 1px solid wheat;

  @media (max-width: 768px) {
    width: 100%;
  }

  display: flex;
  flex-direction: column;

  align-items: start;
`;

const NavBtn = styled(BsList)`
  width: 35px;
  height: 35px;

  margin: 1rem;

  font-weight: 800;
  color: white;

  cursor: pointer;
`;

const Button = styled.button`
  border: none;
  margin: 5px 10px;

  cursor: pointer;

  & :hover {
    color: lightskyblue;
  }
`;
