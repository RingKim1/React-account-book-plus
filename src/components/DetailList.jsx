import { useSelector } from "react-redux";
import styled from "styled-components";
import DetailItem from "./DetailItem";
import NoItem from "./NoItem";
import expensesApi from "../axios/expensesApi";
import { useQuery } from "@tanstack/react-query";

const DetailList = () => {
  // const expenses = useSelector((state) => state.expenses);
  const activeIndex = useSelector((state) => state.activeIndex);

  const fetchExpenses = async () => {
    const response = await expensesApi.get();
    return response.data;
  };

  const {
    data: expenses,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["expenses"],
    queryFn: fetchExpenses,
  });

  if (isPending) {
    return <div>로딩중입니다...</div>;
  }

  if (isError) {
    return <div>데이터 조회 중 오류가 발생했습니다.</div>;
  }

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

const Ul = styled.ul`
  background-color: rgba(25, 100, 200, 0.4);
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  align-items: center;
`;
