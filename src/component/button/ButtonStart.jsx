import { Button } from "@mui/material";
import axios from "axios";
import React, { useContext } from "react";
import { AppContext } from "../store/store";

const ButtonStart = () => {
  const {
    setIsLoading,
    setStudents,
    setQuestions,
    setIsFetch,
    setRandomedStudent,
    setRandomedQuestion,
  } = useContext(AppContext);

  const fetchStudents = async () => {
    setIsLoading(true);
    const { data } = await axios.get(
      "https://62d64f7ed4406e5235680722.mockapi.io/api/v1/student"
    );
    const random = Math.floor(Math.random() * data.length);
    setRandomedStudent(data[random]);
    setStudents(data);
  };
  const fetchQuestions = async () => {
    const { data } = await axios.get(
      "https://62d64f7ed4406e5235680722.mockapi.io/api/v1/question"
    );
    const random = Math.floor(Math.random() * data.length);
    setQuestions(data);
    setRandomedQuestion(data[random]);
    setIsLoading(false);
  };

  // const RandomFunc = () => {
  //   const random =
  //     students.length > 0 && Math.floor(Math.random() * students.length);
  //   // setRandomedStudent(random);
  //   setIsFetch((prev) => !prev);
  // };

  // console.log("Student: ", students, "Questions: ", questions);
  return (
    <Button
      variant="contained"
      color="success"
      onClick={() => {
        fetchStudents();
        fetchQuestions();
        setIsFetch((prev) => !prev);
      }}
    >
      Bắt đầu
    </Button>
  );
};

export default ButtonStart;
