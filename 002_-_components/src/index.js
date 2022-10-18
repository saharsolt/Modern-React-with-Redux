import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail.js";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
