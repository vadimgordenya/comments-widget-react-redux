import React from "react";
import ReactDOM from "react-dom";

import CommentsApp from "./containers/app";
import { createStore } from "redux";
import comments from "./reducers";

const initialState = JSON.parse(localStorage.getItem("commentsJSON")) || [
  { id: 1, author: "Vadzim", textComment: "some text" }
];
console.log(initialState);

const store = createStore(comments, initialState);

const rootElement = document.getElementById("root");
ReactDOM.render(<CommentsApp store={store} />, rootElement);
