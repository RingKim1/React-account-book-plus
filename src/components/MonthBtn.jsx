import styled from "styled-components";

const Button = styled.button`
  height: 50px;
  width: 120px;
  margin: 10px;

  /* background-color: rgba(255, 255, 255, 0.89); */
  border-radius: 15px;
  background-color: ${(props) =>
    props.$active ? "lightsteelblue" : "rgba(255, 255, 255, 0.89)"};
  color: ${(props) => (props.$active ? "blue" : "black")};
  font-size: 1rem;
  font-weight: 600;

  cursor: pointer;
`;

const MonthBtn = ({ Month, active, onClick }) => {
  return (
    <Button $active={active} onClick={onClick}>
      {Month}월
    </Button>
  );
};

export default MonthBtn;
