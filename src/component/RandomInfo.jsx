import React, { useContext } from "react";
import { AppContext } from "./store/store";

const RandomInfo = () => {
  const { randomedStudent, randomedQuestion } = useContext(AppContext);
  return (
    <div className="random-info">
      <h2 className="random-info__name">
        Tên học sinh: {randomedStudent?.name} - STT: {randomedStudent?.id}
      </h2>
      <h2 className="random-info__question">
        Câu hỏi số: {randomedQuestion?.id}
      </h2>
    </div>
  );
};

export default RandomInfo;
