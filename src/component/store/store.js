import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [students, setStudents] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [isFetch, setIsFetch] = useState(false);

  const value = {
    isFetch,
    setIsFetch,
    students,
    setStudents,
    questions,
    setQuestions,
    isLoading,
    setIsLoading,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
