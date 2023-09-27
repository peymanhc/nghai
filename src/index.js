import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes/routes";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
