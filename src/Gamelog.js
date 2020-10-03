import React from "react";

function Gamelog(props) {
  return (
    <div id="gamelog">
      {props.gamelog.map((i) => (
        <div>{i}</div>
      ))}
    </div>
  );
}

export default Gamelog;
