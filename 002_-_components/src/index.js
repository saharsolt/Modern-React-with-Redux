import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail.js";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sahar"
        timeAgo="Today at 4:00PM"
        comment="Well done!"
        avatar={faker.image.image()}
      />
      <CommentDetail
        author="Neda"
        timeAgo="Today at 6:40AM"
        comment="Nice blog post!"
        avatar={faker.image.image()}
      />
      <CommentDetail
        author="Masoud"
        timeAgo="Yesterday at 8:15PM"
        comment="I like the subject"
        avatar={faker.image.image()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
