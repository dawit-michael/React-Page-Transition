import React from "react";
import { withRouter } from "react-router-dom";

const Home = (props) => {
  const openProject = (path) => {
    props.history.push(path);
  };
  return (
    <div>
      {" "}
      <button
        className="button purple"
        onClick={() => {
          openProject("/page1");
        }}
      >
        go to page1
      </button>
    </div>
  );
};
export default withRouter(Home);
