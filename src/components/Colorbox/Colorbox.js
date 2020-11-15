import React from "react";
import "./Colorbox.scss";

function Colorbox(props) {
  function placeMarker(row, column) {
    console.log("Marker placed at " + (row + " " + column));
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
        className={`Colorbox colored-${props.Row}-${props.Column}`}
        onClick={() => placeMarker(props.Row, props.Column)}
      ></div>
    );
  }
}

export default Colorbox;
