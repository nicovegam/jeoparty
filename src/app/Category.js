import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "@reach/router";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "33%",
  },
  ul: {
    listStyleType: "none",
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
}));

export default function Category({ category }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h2>{category.name}</h2>
      <ul className={classes.ul}>
        {category.questions.map((q) => (
          <li key={q.value}>
            {q.question && q.answer ? (
              <Button
                variant="contained"
                color={q.isUsed ? "secondary" : "primary"}
              >
                <Link
                  to={`/game/${category.name}/${q.value}`}
                  className={classes.link}
                >
                  {q.value}
                </Link>
              </Button>
            ) : (
              <Button variant="contained" disabled>
                {q.value}
              </Button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
