import React, { Component } from "react";
import { render } from "react-dom";
import RouteConfigExample from "./src/router";
import { Provider } from "react-redux";
import store from "./store";

const Root = ({ store }) => (
  <Provider store={store}>
    <RouteConfigExample />
  </Provider>
);
render(<Root store={store} />, document.getElementById("root"));
