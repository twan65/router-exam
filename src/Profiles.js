import React from "react";
import { NavLink, Route } from "react-router-dom";
import Profile from "./page/Profile";

const Profiles = () => {
  const activeStyle = {
    background: "black",
    color: "white",
  };

  return (
    <div>
      <h3>ユーザー一覧：</h3>
      <ul>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/twan" active>
            twan
          </NavLink>
        </li>
        <li>
          <NavLink ctiveStyle={activeStyle} to="/profiles/anveloper">
            anveloper
          </NavLink>
        </li>
      </ul>

      <Route
        path="/profiles"
        exact
        render={() => <div>ユーザーを選択してください。</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default Profiles;
