import React from "react";
import { Route } from "react-router-dom";
import About from "./page/About";
import Home from "./page/Home";

// <Route path="パス" component={コンポーネント} />
const App = () => {
  return (
    <div>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  );
};

export default App;
