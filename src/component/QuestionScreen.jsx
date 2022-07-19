import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import Answer from './question/Answer';
import Question from './question/Question';
import RandomInfo from './RandomInfo';
import { AppContext } from './store/store';
import CircularProgress from '@mui/material/CircularProgress';

const QuestionScreen = () => {
  const { isLoading, setIsLoading, setStudents, setQuestions } =
    useContext(AppContext);

  useEffect(() => {
    const fetchStudents = async () => {
      setIsLoading(true);
      const { data } = await axios.get(
        'https://62d64f7ed4406e5235680722.mockapi.io/api/v1/student'
      );
      setStudents(data);
    };
    const fetchQuestions = async () => {
      const { data } = await axios.get(
        'https://62d64f7ed4406e5235680722.mockapi.io/api/v1/question'
      );
      setQuestions(data);
      setIsLoading(false);
    };
    fetchStudents();
    fetchQuestions();
  }, [setIsLoading, setQuestions, setStudents]);

  //   console.log('Student: ', students, 'Questions: ', questions);
  return isLoading ? (
    <div className='loading'>
      <CircularProgress color='success' />
    </div>
  ) : (
    <>
      <div className='question-screen'>
        <RandomInfo />
        <div className='question-screen__question'>
          <Question />
        </div>
        <div className='question-screen__answer'>
          <Answer />
        </div>
      </div>
    </>
  );
};

export default QuestionScreen;
