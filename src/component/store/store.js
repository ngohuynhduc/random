import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [students, setStudents] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [isFetch, setIsFetch] = useState(false);
  const [randomedStudent, setRandomedStudent] = useState();
  const [randomedQuestion, setRandomedQuestion] = useState();
  const [collapse, setCollapse] = useState(false);
  const [open, setOpen] = useState(false);
  const [dialog, setDialog] = useState(false);

  const testFunc = () => {
    setCollapse(false);
    if (questions.length > 0) {
      const removeStudent = [...students].filter(
        (student) => randomedStudent.id !== student.id
      );
      setStudents(removeStudent);
      const removeQuestions = [...questions].filter(
        (question) => randomedQuestion.id !== question.id
      );
      setQuestions(removeQuestions);
      setOpen(true);
    } else {
      alert("Đã hết câu hỏi! Bấm Làm mới để đặt lại câu hỏi");
    }
  };

  const randomFucntion = () => {
    setIsLoading(true);
    setTimeout(() => {
      const randomStudent = Math.floor(Math.random() * students.length);
      setRandomedStudent(students[randomStudent]);
      const randomQuestion = Math.floor(Math.random() * questions.length);
      setRandomedQuestion(questions[randomQuestion]);
      setIsLoading(false);
    }, 3000);
  };
  const value = {
    dialog,
    setDialog,
    open,
    setOpen,
    randomFucntion,
    testFunc,
    setCollapse,
    collapse,
    randomedQuestion,
    setRandomedQuestion,
    isFetch,
    setIsFetch,
    students,
    setStudents,
    questions,
    setQuestions,
    isLoading,
    setIsLoading,
    setRandomedStudent,
    randomedStudent,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
