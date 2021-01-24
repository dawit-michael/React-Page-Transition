import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import gsap from "gsap";

// pages
import Home from "./Home";
import Page1 from "./page1";
import Page2 from "./page2";

const route = [
  { path: "/", name: "home", Component: Home },
  { path: "/page1", name: "page1", Component: Page1 },
  { path: "/page2", name: "page2", Component: Page2 }
];

export default function App() {
  // accessing nodes using useRef

  let loader,
    loading = useRef(null);

  //
  useEffect(() => {
    // animateIn(loader);
  });

  // enter animation
  const onEnter = () => {
    // to keep the page at the top
    window.scroll(0, 0);
    animateIn(loader, loading);
  };
  // exit animation
  const onExit = () => {
    // to keep the page at the top
    window.scroll(0, 0);
    animateOut(loader, loading);
  };

  return (
    <div className="App">
      <div ref={(el) => (loader = el)} className="loader">
        <h1 ref={(el) => (loading = el)}> loading</h1>
      </div>
      {/* Router to manage routes between pages */}

      <Router>
        <div className="header">
          <Link to="/page1" className="button cheery link-item">
            PAGE1
          </Link>
          <Link to="/page2" className="button purple link-item">
            PAGE2
          </Link>
        </div>
        {route.map((item) => {
          return (
            <Route key={item.name} path={item.path} exact>
              {({ match }) => {
                return (
                  <CSSTransition
                    /* Normally, AComponent would move right into the entered state 
                  without passing through the entering state on first mount. 
                  To change that, we need to add a prop called
                  appear to the Transition component used in AComponent*/
                    appear
                    in={match != null} //check if route matches
                    classNames="fadeTranslate"
                    timeout={1200}
                    // play animation when component is exiting
                    onExiting={() => {
                      onEnter();
                    }}
                    // play animation when component has enterd
                    onEntered={() => {
                      onExit();
                    }}
                    mountOnEnter={true}
                    unmountOnExit={true}
                  >
                    {<item.Component></item.Component>}
                  </CSSTransition>
                );
              }}
            </Route>
          );
        })}
      </Router>
    </div>
  );
}

// animation when component is mounted

const animateIn = (node, node2) => {
  gsap.fromTo(
    node,
    {
      left: 0,
      ease: "power3.inOut"
    },
    {
      // delay: 1,
      width: "100vw",
      duration: 1,
      ease: "power3.inOut"
    }
  );
  gsap.to(node2, {
    delay: 0.8,
    opacity: 1,
    duration: 0.8,
    ease: "power3.inOut"
  });
};

// animation when component is unmounted

const animateOut = (node, node2) => {
  gsap.to(node, {
    left: "100%",
    delay: 1.4,
    width: 0,
    duration: 0.8,
    ease: "power3.inOut"
  });
  gsap.to(node2, {
    delay: 0.8,
    opacity: 0,
    duration: 0.8,
    ease: "power3.inOut"
  });
};
