import React from "react";
import "../../assets/css/Card.css";

//--composition
function Card(props:any) {
  const classes = "card " + props.className;
  return <div className={classes}>
    {props.children}
  </div>
}

export default Card;