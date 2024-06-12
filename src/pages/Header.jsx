import styled from "styled-components";

const StHeader = styled.header`
  padding: 1rem;
  display: flex;
  border-bottom: 1px solid gray;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 1rem 0.5rem;
  }
`;

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;

  margin: 0px 20px;
`;

const Header = () => {
  return (
    <StHeader>
      <H1>account book</H1>
    </StHeader>
  );
};

export default Header;
