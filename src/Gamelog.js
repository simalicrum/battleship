import React from "react";

function Gamelog(props) {
  return (
    <div id="gamelog">
      {props.gamelog.map((i, index) => (
        <div key={index}>{i}</div>
      ))}
    </div>
  );
}

export default Gamelog;
