import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import App from "./App";
import Home from "./containers/Home";
import About from "./containers/About";

import "./index.css";

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
    </Route>
  </Router>,
  document.getElementById("root")
);
