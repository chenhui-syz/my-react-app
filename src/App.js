import React from "react";

// 两种方式实现clock
// import ClassComponent from "./pages/ClassComponents"
import {FunctionComponent} from "./pages/FunctionComponent"

function App() {
  return (
    <div className="App">
      {/* <ClassComponent></ClassComponent> */}
      <FunctionComponent></FunctionComponent>
      </div>
  );
}

export default App;
