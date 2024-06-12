import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import FormContent from "./FormContent";
import { useDispatch, useSelector } from "react-redux";
import { addExpense } from "../redux/slices/expensesSlice";

const StForm = styled.form`
  background-color: rgba(25, 100, 200, 0.4);
  border-radius: 5px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
`;

const Button = styled.button`
  cursor: pointer;
`;

const Form = () => {
  // 상태 관리
  const [date, setDate] = useState(new Date());
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);
  const [content, setContent] = useState("");

  const expenses = useSelector((state) => state.expenses);
  const dispatch = useDispatch();

  // 컴포넌트 분리를 위해 생성
  const FormContents = [
    {
      name: "날짜",
      value: date,
      setValue: setDate,
      type: "date",
    },
    {
      name: "항목",
      value: category,
      setValue: setCategory,
      type: "text",
    },
    {
      name: "금액",
      value: amount,
      setValue: setAmount,
      type: "number",
    },
    {
      name: "내용",
      value: content,
      setValue: setContent,
      type: "text",
    },
  ];

  const addExpenseBtn = (e) => {
    e.preventDefault();

    if (amount <= 0) {
      alert("금액을 제대로 입력해 주세요");
      return;
    }

    if (!category.trim() || !content.trim()) {
      alert("항목 또는 내용을 입력해 주세요");
      return;
    }
    dispatch(
      addExpense({
        id: uuidv4(),
        date,
        category,
        amount,
        content,
      })
    );
  };
  return (
    <StForm onSubmit={addExpenseBtn}>
      {FormContents.map((el) => (
        <FormContent
          key={el.name}
          FormContent={el.name}
          value={el.value}
          setValue={el.setValue}
          type={el.type}
        />
      ))}
      <Button type="submit">저장</Button>
    </StForm>
  );
};

export default Form;
