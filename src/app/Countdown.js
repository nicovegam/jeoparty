import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useInterval } from "./useInterval";
import ForwardIcon from "@material-ui/icons/Forward";

const useStyles = makeStyles((theme) => ({
  warning: {
    color: "#ff9800",
  },
  danger: {
    color: "#f44336",
  },
}));

export default function Countdown() {
  const classes = useStyles();
  const initialCount = 60;
  const [period, setPeriod] = useState(1);
  const [count, setCount] = useState(initialCount);

  const handleEndPeriod = () => {
    if (period === 1) {
      setCount(initialCount / 2);
    } else {
      setCount(initialCount / 4);
    }
    setPeriod(period + 1);
  };

  useInterval(() => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      handleEndPeriod();
    }
  }, 1000);

  return (
    <>
      <h1
        className={
          count < 6 ? classes.danger : count < 11 ? classes.warning : null
        }
      >
        {count} <ForwardIcon onClick={handleEndPeriod} />
      </h1>
    </>
  );
}
