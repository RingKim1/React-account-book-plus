import styled from "styled-components";
import DetailItem from "./DetailItem";
import NoItem from "./NoItem";
import { useSelector } from "react-redux";

const Ul = styled.ul`
  background-color: rgba(25, 100, 200, 0.4);
  border-radius: 5px;

  display: flex;
  flex-direction: column;
`;

const DetailList = () => {
  const expenses = useSelector((state) => state.expenses);
  const activeIndex = useSelector((state) => state.activeIndex);

  const filteredExpenses = expenses
    // 해당 월에 해당하는 것만 걸러주는 필터
    .filter(
      (expense) => Number(expense.date[5] + expense.date[6]) === activeIndex + 1
    )
    .map((expense) => <DetailItem key={expense.id} expense={expense} />);

  return (
    <section>
      <Ul>{filteredExpenses.length === 0 ? <NoItem /> : filteredExpenses}</Ul>
    </section>
  );
};

export default DetailList;
