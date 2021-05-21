import React, { Component } from "react";

class HistorySample extends Component {
  // 前のページに遷移
  handleGoBack = () => {
    this.props.history.goBack();
  };

  // Homeに遷移
  handleGoHome = () => {
    this.props.history.push("/");
  };

  componentDidMount() {
    // ページに変化があるたびにアラートする
    this.unblock = this.props.history.block("本当に戻りますか？");
  }

  componentWillUnmount() {
    // コンポーネントがunmountになると問わない
    if (this.unblock) {
      this.unblock();
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleGoBack}>戻る</button>
        <button onClick={this.handleGoHome}>Homeへ</button>
      </div>
    );
  }
}

export default HistorySample;
