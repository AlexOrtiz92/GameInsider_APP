import React from "react";
import ReactDOM from "react-dom";
// import App from './App';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/home";
import UserSpace from "./components/userSpace";

const Root = (
  <BrowserRouter>
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/userSpace" component={UserSpace} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(Root, document.getElementById("root"));
