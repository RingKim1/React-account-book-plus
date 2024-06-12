import { Link } from "react-router-dom";
import styled from "styled-components";

const Li = styled.li`
  background-color: rgba(25, 100, 200, 0.4);
  border: 1px solid gray;
  border-radius: 5px;

  width: 80%;
  margin: 10px;
  padding: 10px;
`;

const DivDate = styled.div`
  background-color: transparent;
`;
const DivContent = styled.div`
  background-color: transparent;
  width: 100%;
  margin: 5px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const P = styled.p`
  background-color: transparent;
  margin: 5px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    white-space: normal;
    overflow: visible;
    text-overflow: initial;
  }
`;
const P2 = styled.p`
  background-color: transparent;
  margin: 5px;
  white-space: nowrap;
`;
const Span = styled.span`
  background-color: transparent;
  color: orange;
  font-weight: 800;
`;

const DetailItem = ({ expense }) => {
  return (
    <Li>
      <Link to={`/detail/${expense.id}`}>
        <DivDate>{expense.date}</DivDate>
        <DivContent>
          <P>
            <Span>{expense.category}</Span> - {expense.content}
          </P>
          <P2>{expense.amount + `원`}</P2>
        </DivContent>
      </Link>
    </Li>
  );
};

export default DetailItem;
