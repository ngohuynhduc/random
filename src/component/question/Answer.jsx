import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Button,
  Collapse,
  Snackbar,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { AppContext } from "../store/store";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Answer = () => {
  const {
    collapse,
    setCollapse,
    randomedQuestion,
    testFunc,
    randomFucntion,
    open,
    setOpen,
    questions,
  } = useContext(AppContext);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <div className="result">
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Đã xóa!
        </Alert>
      </Snackbar>
      <div className="result__button">
        <Button
          variant="contained"
          color="success"
          onClick={() => setCollapse((prev) => !prev)}
        >
          Kết quả
        </Button>
        <Button variant="contained" color="error" onClick={() => testFunc()}>
          Xóa câu hỏi
        </Button>
        <Button
          variant="contained"
          disabled={questions.length > 0 ? false : true}
          onClick={() => randomFucntion()}
        >
          Tiếp tục
        </Button>
      </div>
      <div className="result__content">
        <Collapse in={collapse} style={{ minWidth: "100%" }}>
          {randomedQuestion &&
            randomedQuestion.answerContent.map((answer, index) => (
              <Accordion key={index}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography style={{ fontSize: "18px" }}>
                    {answer.answerTitle}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    style={{ fontSize: "20px", whiteSpace: "pre-line" }}
                  >
                    {answer.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
        </Collapse>
      </div>
    </div>
  );
};

export default Answer;
