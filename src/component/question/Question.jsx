import React, { useContext, useEffect } from "react";
import question from "../../asset/image/question.png";
import sad from "../../asset/image/sad.jpg";
import cau1 from "../../asset/image/Cau1.png";
import { AppContext } from "../store/store";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Question = () => {
  const { randomedQuestion, questions, dialog, setDialog, randomedStudent } =
    useContext(AppContext);
  console.log("ID: ", randomedQuestion.id);
  const handleClose = () => {
    setDialog(false);
    // setIsLoading(false);
  };
  useEffect(() => {
    setDialog(true);
  }, [setDialog]);
  return questions.length > 0 ? (
    <>
      <Dialog
        open={dialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Chúc mừng! :)</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Chúc mừng bạn:{" "}
            <span className="red-color">{randomedStudent?.name}</span> <br />
            STT: <span className="red-color">{randomedStudent?.id}</span>
            <br />
            Câu hỏi số:{" "}
            <span className="red-color">{randomedQuestion?.id}</span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
      <div className="question">
        <div className="question__image">
          <img src={question} alt="q" className="question__img" />
        </div>
        <div className="question__content">
          {`${randomedQuestion?.questionContent}`}
          {randomedQuestion?.id === "1" && (
            <div className="question1__image">
              <img src={cau1} alt="q" className="question1__img" />
            </div>
          )}
        </div>
      </div>
    </>
  ) : (
    <>
      <h2>Hết câu hỏi rùi :( </h2>
      <div className="question">
        <img src={sad} alt="sad" className="question__img--sad" />
      </div>
    </>
  );
};

export default Question;
