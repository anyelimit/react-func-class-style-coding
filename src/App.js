import React, { useState } from "react";
import "./App.css";
import FuncComp from "./FuncComp";
import ClassComp from "./ClassComp";

function App() {
  const [_func, setFunc] = useState(true);
  const [_class, setClass] = useState(true);
  return (
    <div className="container">
      <h1>Hello World</h1>
      <button
        onClick={() => {
          setFunc(false);
        }}
      >
        remove func
      </button>
      <button
        onClick={() => {
          setClass(false);
        }}
      >
        remove class
      </button>
      {_func ? <FuncComp initNumber={2}></FuncComp> : null}
      {_class ? <ClassComp initNumber={2}></ClassComp> : null}
    </div>
  );
}

export default App;
