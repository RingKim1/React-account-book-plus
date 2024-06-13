import { useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { modifyItem, removeItem } from "../redux/slices/expensesSlice";
import Swal from "sweetalert2";
import expensesApi from "../axios/expensesApi";
import { useMutation, useQuery } from "@tanstack/react-query";

const Detail = () => {
  // const expenses = useSelector((state) => state.expenses);
  // const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();

  const user = JSON.parse(sessionStorage.getItem("user"));

  const dateRef = useRef();
  const categoryRef = useRef();
  const amountRef = useRef();
  const contentRef = useRef();

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

  const item = expenses.find((el) => String(el.id) === params.id);

  console.log(item.createdUserId);

  const removeItemBtn = async (id) => {
    if (user.userId !== item.createdUserId) {
      return alert("해당 지출에 대한 수정 및 삭제 권한이 없습니다.");
    }
    await expensesApi.delete(`/${id}`);
    navigate("/");
  };

  const modifyItemBtn = async () => {
    if (user.userId !== item.createdUserId) {
      return alert("해당 지출에 대한 수정 및 삭제 권한이 없습니다.");
    }
    await expensesApi.put(`/${params.id}`, {
      id: params.id,
      date: dateRef.current.value,
      category: categoryRef.current.value,
      amount: amountRef.current.value,
      content: contentRef.current.value,
      createdBy: user.nickname,
      createdUserId: user.userId,
    });
    navigate("/");
  };

  const { mutate } = useMutation({
    mutationFn: removeItemBtn,
    modifyItemBtn,
    onSuccess: () => {
      queryClient.invalidateQueries(["expenses"]);
    },
  });

  return (
    <>
      <Ul>
        <Li>
          날짜
          <Input
            placeholder={`yyyy-mm-dd`}
            defaultValue={item.date}
            ref={dateRef}
          ></Input>
        </Li>
        <Li>
          항목
          <Input defaultValue={item.category} ref={categoryRef}></Input>
        </Li>
        <Li>
          금액
          <Input defaultValue={item.amount} ref={amountRef}></Input>
        </Li>
        <Li>
          내용
          <Input2 defaultValue={item.content} ref={contentRef}></Input2>
        </Li>
        <ButtonWrapper>
          <button>
            <Link to={`/`}>Home</Link>
          </button>
          <div>
            <button onClick={() => modifyItemBtn()}>수정</button>
            <button onClick={() => removeItemBtn(params.id)}>삭제</button>
          </div>
        </ButtonWrapper>
      </Ul>
    </>
  );
};

export default Detail;

const Ul = styled.ul`
  background-color: rgba(25, 100, 200, 0.4);
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  text-align: center;
  align-items: center;
  justify-content: center;

  padding-top: 20px;
`;

const Li = styled.li`
  background-color: transparent;
  text-align: start;

  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Input = styled.input`
  background-color: white;
  text-align: start;
  color: black;
  width: 500px;
  height: 30px;

  margin: 10px 0;
  padding: 5px;
`;

const Input2 = styled.input`
  background-color: white;
  text-align: start;
  color: black;
  width: 500px;
  height: 100px;

  margin: 10px 0;
  padding: 5px;
`;

const ButtonWrapper = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: row;

  width: 90%;
  justify-content: space-around;
`;
