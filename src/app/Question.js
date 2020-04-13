import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "@reach/router";
import { getQuestion } from "../services/categories";

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
  },
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
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className={classes.app}>
      <header className={classes.appHeader}>
        <Link to="/">Volver</Link>
        <div className={classes.question}>
          <div className={classes.column}>
            <h2>{question.question}</h2>
            <img className={classes.image} src={question.image} />
          </div>
          <div className={classes.column}>
            <button
              type="button"
              onClick={() => {
                setShowAnswer(true);
                question.isUsed = true;
              }}
              className={showAnswer ? classes.hide : {}}
            >
              Mostrar respuesta
            </button>
            <span className={showAnswer ? {} : classes.hide}>
              {question.answer}
            </span>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Question;
