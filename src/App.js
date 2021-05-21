import React from "react";
import { Route, Link } from "react-router-dom";
import About from "./page/About";
import Home from "./page/Home";

// <Route path="パス" component={コンポーネント} />
const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Route exact={true} path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  );
};

export default App;
