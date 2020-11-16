import React, { useState } from "react";
import "./Colorbox.scss";

function Colorbox(props) {
  const [selected, setselected] = useState(false);

  function toggleMarker(row, column) {
    console.log("Marker placed at " + (row + " " + column));
    setselected(!selected);
  }
  if (props.Row === 0 && props.Column === 0) {
    return <div className="Colorbox"></div>;
  } else if (props.Row === 0 && props.Column !== 0) {
    return (
      <div
        className="Colorbox"
        style={{ backgroundColor: "black", color: "white" }}
      >
        {props.Column}
      </div>
    );
  } else if (props.Row !== 0 && props.Column === 0) {
    return (
      <div
        className="Colorbox"
        style={{ backgroundColor: "black", color: "white" }}
      >
        {String.fromCharCode(props.Row + 96)}
      </div>
    );
  } else {
    return (
      <div
        className={`Colorbox colored-${props.Row}-${props.Column} ${
          selected ? "shaking" : ""
        }`}
        onClick={() => toggleMarker(props.Row, props.Column)}
      ></div>
    );
  }
}

export default Colorbox;
