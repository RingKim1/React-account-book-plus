import styled from "styled-components";

const P = styled.p`
  background-color: transparent;
  margin: 30px;
`;

const NoItem = () => {
  return <P>지출 내역이 없습니다.</P>;
};

export default NoItem;
