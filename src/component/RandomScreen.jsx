import React, { useContext } from "react";
import ButtonGroup from "./button/ButtonGroup";
import QuestionScreen from "./QuestionScreen";
import { AppContext } from "./store/store";
import Title from "./Title";

const RandomScreen = () => {
  const { isFetch } = useContext(AppContext);

  return (
    <div className="App">
      <div className="container">
        <Title />
        <ButtonGroup />
        {isFetch && <QuestionScreen />}
      </div>
    </div>
  );
};

export default RandomScreen;
