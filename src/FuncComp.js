import React, { useState, useEffect } from "react";
import "./App.css";

const funcStyle = "color:violet";
function FuncComp(props) {
  const [_number, setNumber] = useState(props.initNumber);
  const [_date, setDate] = useState("");
  const onChangeNumber = () => {
    setNumber(Math.random());
  };
  const onChangeDate = () => {
    setDate(new Date().toString());
  };

  //sideEffect
  //두번째 parameter에 [_number]을 넣으면 그 값이 변화 될때만 함수 호출. date가 변해도 함수 호출X
  //두번째 parameter에 빈 배열을 넣으면 rendering할 때 한번만 실행하고 그 뒤에는 실행X(componentWillUnmount)
  useEffect(() => {
    console.log(
      "%cfunc => useEffect(componentDidMount & componentDidUpdate)",
      funcStyle
    );
    document.title = _number;
    return () => {
      console.log(
        "%cfunc => useEffect(clean up, []:componentWillUnmount)",
        funcStyle
      );
    };
  }, [_number]);

  console.log("%cfunc => render", funcStyle);
  return (
    <div className="container">
      <h5>Function Style Component</h5>
      <p>Number: {_number}</p>
      <button onClick={onChangeNumber}>random</button>
      <p>Date : {_date}</p>
      <button onClick={onChangeDate}>date</button>
    </div>
  );
}

export default FuncComp;
