import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

const Root = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(Root, document.getElementById("root"));

serviceWorker.unregister();
