import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import About from "./page/About";
import Home from "./page/Home";
import HistorySample from "./page/HistorySample";
import Profiles from "./Profiles";

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
          <Link to="/history">History</Link>
        </li>
        <li>
          <Link to="/profiles">Profile</Link>
        </li>
      </ul>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/history" component={HistorySample} />
        <Route path="/profiles" component={Profiles} />
        <Route
          render={({ location }) => (
            <div>
              <h2>このページは存在しません。</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
