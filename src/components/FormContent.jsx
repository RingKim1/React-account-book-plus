import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Div = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const Input = styled.input`
  background-color: #333;

  border-radius: 5px;
  margin: 10px;
`;

const FormContent = ({ FormContent, value, setValue, type }) => {
  // 포커스
  // const focusRef = useRef(null);

  // useEffect(() => {
  //   console.log(focusRef);
  //   // focusRef.current.focus();
  //   // focusRef !== null ?? focusRef.current.focus();
  // }, []);
  return (
    <Div>
      {FormContent}
      <Input
        // ref={FormContent === "날짜" ? focusRef : null}
        type={type}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </Div>
  );
};

export default FormContent;
