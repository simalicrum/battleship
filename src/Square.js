import React from "react";

function Square(props) {
  return (
    <button
      className={props.isShip ? "square ship" : "square noship"}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

export default Square;
