import teste from "./components/myFirstComponent/index";
import React from "react";
import ReactDom from "react-dom";

ReactDom.render(
  <div>
    <h1>TITULINHO</h1>
    <teste></teste>
  </div>
  ,document.getElementById('root')

);