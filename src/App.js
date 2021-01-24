import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Transition } from "react-transition-group";
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

  let loader = useRef(null);

  // state variables

  const [isLoading, setLoading] = useState(true);

  //
  useEffect(() => {
    animateIn(loader);
  });

  // enter animation
  const onEnter = () => {};
  // exit animation
  const onExit = () => {
    // to keep the page at the top
    window.scroll(0, 0);
    animateIn(loader);
  };

  return (
    <div className="App">
      <div ref={(el) => (loader = el)} className="loader"></div>
      {/* Router to manage routes between pages */}
      <Router>
        {route.map((item) => {
          return (
            <Route key={item.name} path={item.path} exact>
              {({ match }) => {
                return (
                  <Transition
                    /* Normally, AComponent would move right into the entered state 
                  without passing through the entering state on first mount. 
                  To change that, we need to add a prop called
                  appear to the Transition component used in AComponent*/
                    appear
                    in={match != null} //check if route matches
                    timeout={200}
                    onEnter={() => {
                      console.log("enter 1");
                    }}
                    onExit={() => {
                      console.log("exit 2");
                    }}
                    onEntering={() => {
                      console.log("entering 3");
                    }}
                    onExiting={() => {
                      console.log("exiting 4");
                    }}
                    // onEnter={() => onEnter()}

                    mountOnEnter={true}
                    unmountOnExit={true}
                  >
                    {(state) => {
                      return <item.Component></item.Component>;
                    }}
                  </Transition>
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

// animation when component is unmounted

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
