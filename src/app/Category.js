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
}));

export default function Category({ category }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h2>{category.name}</h2>
      <ul className={classes.ul}>
        {category.questions.map((q) => (
          <li key={q.value}>
            <Button
              variant="contained"
              color={q.isUsed ? "secondary" : "primary"}
            >
              <Link to={`/${category.name}/${q.value}`}>{q.value}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
