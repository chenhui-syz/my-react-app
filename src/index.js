//React负责逻辑控制，数据 -> VDOM
import React from "react";
//ReactDom渲染实际DOM，VDOM -> DOM
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));