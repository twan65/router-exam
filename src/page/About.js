import React from "react";
import qs from "qs";

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, // 先端の?を省略
  });
  const showDetail = query.detail === "true";

  return (
    <div>
      <h1>紹介</h1>
      <p>React Router練習プロジェクトです。</p>
      {showDetail && <p>detailをtrueに設定しました。</p>}
    </div>
  );
};

export default About;
