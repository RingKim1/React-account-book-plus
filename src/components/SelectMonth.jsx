import styled from "styled-components";
import MonthBtn from "./MonthBtn";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { isClick } from "../redux/slices/activeIndexSlice";

const Section = styled.section`
  background-color: rgba(25, 100, 200, 0.4);
  border-radius: 5px;
`;

const SelectMonth = () => {
  const activeIndex = useSelector((state) => state.activeIndex);
  const dispatch = useDispatch();

  const Month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  // activeIndex의 상태가 바뀌면 해당 값을 로컬 스토리지에 저장 후
  // 클릭된 상태를 유지하기 위해
  useEffect(() => {
    localStorage.setItem("index", activeIndex);
    return () => {};
  }, [activeIndex]);

  return (
    <Section>
      {Month.map((el, index) => (
        <MonthBtn
          key={el}
          Month={el}
          active={activeIndex === index}
          onClick={() => dispatch(isClick(index))}
        />
      ))}
    </Section>
  );
};

export default SelectMonth;
