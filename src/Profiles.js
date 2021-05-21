import React from "react";
import { Link, Route } from "react-router-dom";
import Profile from "./page/Profile";

const Profiles = () => {
  return (
    <div>
      <h3>ユーザー一覧：</h3>
      <ul>
        <li>
          <Link to="/profiles/twan">twan</Link>
        </li>
        <li>
          <Link to="/profiles/anveloper">anveloper</Link>
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
