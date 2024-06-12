import styled from "styled-components";

const Footer = () => {
  return <StFooter>©️2024 Ringkim1. All Rights Reserved</StFooter>;
};

export default Footer;

const StFooter = styled.footer`
  padding: 2rem 1rem;

  border-top: 1px solid gray;

  text-align: center;
  align-items: center;
  justify-content: center;

  p {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 0.5rem;
  }
`;
