import React from "react";
import { withRouter } from "react-router-dom";
const Page2 = (props) => {
  const openProject = (path) => {
    props.history.push(path);
  };
  return (
    <div>
      <button
        className="button blue"
        onClick={() => {
          openProject("/page1");
        }}
      >
        go to page1
      </button>
    </div>
  );
};
export default withRouter(Page2);
