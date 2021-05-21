import React from "react";
import { Route, Link } from "react-router-dom";
import About from "./page/About";
import Home from "./page/Home";
import Profile from "./page/Profile";

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
        <li>
          <Link to="/profile/twan">twan profile</Link>
        </li>
        <li>
          <Link to="/profile/anveloper">anveloper profile</Link>
        </li>
      </ul>
      <Route exact={true} path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/profile/:username" component={Profile} />
    </div>
  );
};

export default App;
