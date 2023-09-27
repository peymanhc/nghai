import { Route, Router } from "react-router";
import React from "react";
import Routes from "./routes";
import { useDispatch, useSelector } from "react-redux";
import { ChangeLanguage } from "../Redux/Actions/Lang";
import { createBrowserHistory } from "history";

const Layout = () => {
  const dispatch = useDispatch();
  const languages = useSelector((state) => state.Lang);
  const browserHistory = createBrowserHistory();

  return (
    <Router history={browserHistory}>
      <Route path={"/"} component={Routes} />
    </Router>
  );
};

export default Layout;
