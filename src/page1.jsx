import React from "react";
import { withRouter } from "react-router-dom";
const Page1 = (props) => {
  const openProject = (path) => {
    props.history.push(path);
  };
  return (
    <div className="page">
      <button
        className="button blue"
        onClick={() => {
          openProject("/page2");
        }}
      >
        go to page2
      </button>
    </div>
  );
};
export default withRouter(Page1);
