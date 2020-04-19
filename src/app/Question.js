import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "@reach/router";
import { getQuestion, setQuestionUsed } from "../services/game";
import Countdown from "./Countdown";

const useStyles = makeStyles((theme) => ({
  app: {
    textAlign: "center",
  },
  appHeader: {
    backgroundColor: "#282c34",
    minHeight: "100vh",

    fontSize: "calc(10px + 2vmin)",
    color: "white",
  },
  question: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  column: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
  },
  imageContainer: {},
  image: {
    width: "auto",
    maxHeight: "70vh",
  },
  hide: {
    display: "none",
  },
}));

function Question(props) {
  const classes = useStyles();
  const question = getQuestion(props.category, props.value);
  const [showAnswer, setShowAnswer] = useState(question.isUsed);

  const handleShow = () => {
    setShowAnswer(true);
    setQuestionUsed(props.category, props.value, true);
  };

  return (
    <div className={classes.app}>
      <header className={classes.appHeader}>
        <Link to="/game/">Volver</Link>
        <div className={classes.question}>
          <div className={classes.column}>
            <h2>{question.question}</h2>
            <div className={classes.imageContainer}>
              <img
                className={classes.image}
                src={
                  question.localImage
                    ? require(`../assets/${question.localImage}`)
                    : question.image
                }
              />
            </div>
          </div>
          <div className={classes.column}>
            <div className={classes.answer}>
              <div className={showAnswer ? classes.hide : {}}>
                <Countdown />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleShow}
                >
                  Mostrar respuesta
                </Button>
              </div>

              <span className={showAnswer ? {} : classes.hide}>
                {question.answer}
              </span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Question;
