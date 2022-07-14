import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

let button = document.querySelector("button");

let h1 = document.querySelector("h1");

let body = document.querySelector("body");

button.addEventListener("click", alterarId);

function alterarId() {
  if (body.id !== "titulo") {
    body.id = "titulo";
    h1.innerHTML = "HELLO WORLD!!";
  } else if (body.id === "titulo") {
    body.id = "titul1";
    h1.innerHTML = "Hello World! ";
  }
}
