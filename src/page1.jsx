import React from "react";
import { withRouter } from "react-router-dom";
const Page1 = (props) => {
  const openProject = (path) => {
    props.history.push(path);
  };
  return (
    <div className="page cheery">
      <button
        className="button"
        onClick={() => {
          openProject("/page2");
        }}
      >
        GO TO PAGE 2
      </button>
    </div>
  );
};
export default withRouter(Page1);
