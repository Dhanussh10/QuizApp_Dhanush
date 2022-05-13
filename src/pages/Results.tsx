import React, { useContext } from "react";
import { AppContext } from "../App";
import finalscore from "../components/finalscore";
import QuestionCard, { QuestionType } from "../components/QuestionCard";
import questions from "../questions.json";
import StyledTextFeild from "../pages/InputDetailsForm";
const Results = () => {
  const [appData] = useContext(AppContext);
  const score = useContext;
  type QuestionCardProp = {
    id: number;
    question: string;
    questionType: QuestionType;
    answers: Array<any>;
  };

  return (
    <div>
      <h1>Results:</h1>
      <h3>The values that you entered are given below</h3>
      {Object.entries(appData.answers).map(([currentIndex, answer]: any) => (
        <p key={currentIndex}>{answer.value}</p>
      ))}
      <h3>The correct answers are:</h3>
      <p>For first question answer is - Every 15 days</p>
      <p>For second question answer is - string, boolean</p>
      <p>For third question answer is - componentDidmount</p>
      <p>For Fourth question answer is - The silk road</p>
      <p>For fifth question answer is - Joe Biden</p>
      <p>
        For sixth question answer is - The Mauryan dynasty, The mughul Empire,
        The monghol empire, The quing dynasty
      </p>
      <p>For seaventh question answer is - KGF CHAPTER-2</p>

      <h3>The total marks secured is </h3>
    </div>
  );
};

export default Results;
