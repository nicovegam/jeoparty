import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Category from "./Category";
import { getCategories } from "../services/game";

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
  categories: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
}));

function Game() {
  const classes = useStyles();
  const categories = getCategories();

  return (
    <div className={classes.app}>
      <header className={classes.appHeader}>
        <div className={classes.categories}>
          {categories.map((category) => (
            <Category category={category} key={category.name}></Category>
          ))}
        </div>
      </header>
    </div>
  );
}

export default Game;
