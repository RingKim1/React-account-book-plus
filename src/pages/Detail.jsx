import { useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { modifyItem, removeItem } from "../redux/slices/expensesSlice";
import Swal from "sweetalert2";

const Ul = styled.ul`
  background-color: rgba(25, 100, 200, 0.4);
  border-radius: 5px;

  display: flex;
  flex-direction: column;

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

const Detail = () => {
  const expenses = useSelector((state) => state.expenses);
  const dispatch = useDispatch();

  const params = useParams();

  const item = expenses.find((el) => String(el.id) === params.id);
  const navigate = useNavigate();

  const dateRef = useRef();
  const categoryRef = useRef();
  const amountRef = useRef();
  const contentRef = useRef();

  console.log(dateRef);
  const removeItemBtn = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeItem(id));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        navigate("/");
      }
    });
  };

  const modifyItemBtn = () => {
    const payload = {
      id: params.id,
      dateRef: dateRef.current.value,
      categoryRef: categoryRef.current.value,
      amountRef: amountRef.current.value,
      contentRef: contentRef.current.value,
    };
    dispatch(modifyItem(payload));
  };

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
