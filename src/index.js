import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Outlet } from "react-router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <Provider store={store}>
    <App />
  </Provider>

);
