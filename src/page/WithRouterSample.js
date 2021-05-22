import React from "react";
import { withRouter } from "react-router-dom";

// withRouterはRoterで使用されたコンポーネントではなくても
// match, location, historyを使えるようにしてくれる
const WithRouterSample = ({ location, match, history }) => {
  return (
    <div>
      <h4>location</h4>
      <textarea
        value={JSON.stringify(location, null, 2)}
        rows={7}
        readOnly={true}
      />
      <h4>match</h4>
      <textarea
        value={JSON.stringify(match, null, 2)}
        rows={7}
        readOnly={true}
      />
      <button onClick={() => history.push("/")}>Homeへ</button>
    </div>
  );
};

// コンポーネントをwithRouterに渡す
export default withRouter(WithRouterSample);
