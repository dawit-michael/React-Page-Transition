import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import gsap from "gsap";

// pages
import Page1 from "./page1";
import Page2 from "./page2";

export const Home = (props) => {
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

const route = [
  { path: "/", name: "home", Component: Home },
  { path: "/page1", name: "page1", Component: Page1 },
  { path: "/page2", name: "page2", Component: Page2 }
];

export default function App() {
  let loader = useRef(null);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    animateIn(loader);
    animateOut(loader);
  });
  return (
    <div className="App">
      <div ref={(el) => (loader = el)} className="loader"></div>

      <Router>
        {route.map((item) => {
          return (
            <Route
              path={item.path}
              name={item.name}
              component={item.Component}
              exact
            ></Route>
          );
        })}
      </Router>
    </div>
  );
}

const animateIn = (node) => {
  gsap.fromTo(
    node,
    {
      width: 0,
      duration: 0.8,
      ease: "power3.inOut"
    },
    {
      delay: 1,
      width: "100vw",
      duration: 0.8,
      ease: "power3.inOut"
    }
  );
  gsap.fromTo(
    node,
    {
      right: 0,
      width: "100vw",
      duration: 0.8,
      ease: "power3.inOut"
    },
    {
      right: 0,
      delay: 1,
      width: 0,
      duration: 0.8,
      ease: "power3.inOut"
    }
  );
};

const animateOut = (node) => {
  gsap.fromTo(
    node,
    {
      right: 0,
      width: 0,
      duration: 0.8,
      ease: "power3.inOut"
    },
    {
      left: 0,
      width: "100vw",
      duration: 0.8,
      ease: "power3.inOut"
    }
  );
  gsap.fromTo(
    node,
    {
      right: 0,
      width: "100vw",
      duration: 0.8,
      ease: "power3.inOut"
    },
    {
      left: 0,
      delay: 1,
      width: 0,
      duration: 0.8,
      ease: "power3.inOut"
    }
  );
};
