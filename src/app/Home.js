import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "@reach/router";
import Button from "@material-ui/core/Button";
import { setCategories } from "../services/game";
import categories from "../game";

const useStyles = makeStyles((theme) => ({
  app: {
    textAlign: "center",
  },
  appHeader: {
    backgroundColor: "#282c34",
    minHeight: "100vh",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
}));

export default function Category({ category }) {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <header className={classes.appHeader}>
        <Button variant="contained" color="primary">
          <Link
            to="/game/"
            onClick={() => setCategories(categories)}
            className={classes.link}
          >
            EMPEZAR
          </Link>
        </Button>
      </header>
    </div>
  );
}
