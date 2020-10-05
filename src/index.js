import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = () => {
  return (
    <div>
      <div id="background">
        <img src="./images/ironhack-logo.svg" alt="" />
        <img src="./images/menu-top.svg" alt="" />
        <div id="container">
          <h1 id="title">Say hello to ReactJS</h1>
          <p id="para">
            You will learn how to use the most popular frontend library, and
            become a super Ninja developer
          </p>
          <a href="#" id="btn">
            Awesome!
          </a>
        </div>
      </div>
      <div id="values">
        <div className="values-container">
          <img src="./images/icon1.png" alt="" />
          <h3 id="value-title">Declarative</h3>
          <p id="value-point">
            React makes it painless to create interactive UIs.
          </p>
        </div>
        <div className="values-container">
          <img src="./images/icon2.png" alt="" />
          <h3 id="value-title">Components</h3>
          <p id="value-point">
            Build encapsulated components that manage their state.
          </p>
        </div>
        <div className="values-container">
          <img src="./images/icon3.png" alt="" />
          <h3 id="value-title">Single-Way</h3>
          <p id="value-point">
            A set of immutable values are passed to the component's.
          </p>
        </div>
        <div className="values-container">
          <img src="./images/icon4.png" alt="" />
          <h3 id="value-title">JSX</h3>
          <p id="value-point">
            Statically-typed, designed to run on modern browsers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
