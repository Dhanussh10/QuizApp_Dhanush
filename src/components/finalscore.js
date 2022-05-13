import React, { Component } from "react";
import ReactDom from "react-dom";
import Questions from "./pages/Questions";

const score = 0;
class finalscore extends Component {
  constructor() {
    this.state = {
      score: 0
    };
  }
  computeAnswer = (answer, isCorrect) => {
    if (answer === isCorrect) {
      this.setState({
        score: this.state.score + 1
      });
    }
  };
}
export default finalscore;
