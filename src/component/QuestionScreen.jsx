import React, { useContext, useEffect } from "react";
import Answer from "./question/Answer";
import Question from "./question/Question";
import RandomInfo from "./RandomInfo";
import { AppContext } from "./store/store";
import CircularProgress from "@mui/material/CircularProgress";

const QuestionScreen = () => {
  const { isLoading, questions, students, randomedStudent, randomedQuestion } =
    useContext(AppContext);

  console.log(
    "Student: ",
    students,
    "Questions: ",
    questions,
    "Randomed",
    randomedStudent,
    "Random Questions: ",
    randomedQuestion
  );

  return isLoading ? (
    <div className="loading">
      <CircularProgress color="success" />
    </div>
  ) : (
    <>
      <div className="question-screen">
        <RandomInfo />
        <div className="question-screen__question">
          <Question />
        </div>
        <div className="question-screen__answer">
          <Answer />
        </div>
      </div>
    </>
  );
};

export default QuestionScreen;
