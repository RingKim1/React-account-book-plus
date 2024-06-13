import styled from "styled-components";
import Navbar from "../Navbar";
import User from "../User";
import { useState } from "react";
import { BsList } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <StHeader>
      <NavBtn onClick={toggleNav} />
      <Navbar isNavOpen={isNavOpen} toggleNav={toggleNav} />
      <H1 onClick={() => navigate("/")}>account book</H1>
      <User />
    </StHeader>
  );
};

export default Header;

const StHeader = styled.header`
  padding: 1rem;
  display: flex;
  border-bottom: 1px solid gray;

  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 1rem 0.5rem;
  }
`;

const NavBtn = styled(BsList)`
  width: 35px;
  height: 35px;

  font-weight: 800;
  color: white;

  cursor: pointer;
`;

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;

  margin: 0px 20px;

  cursor: pointer;
`;
