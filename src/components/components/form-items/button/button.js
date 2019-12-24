import React from 'react';
import "./button.scss";

const Button = (props) => {
  const classes = ["button"];
  props.secondary && classes.push("button--secondary");

  return (
    <button className={classes.join(" ")}> { props.text } </button>
  );
}

export default Button;
