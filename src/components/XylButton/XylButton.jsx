import React from "react";
import "./XylButton.css";

import useSound from "use-sound";

export default function XylButton(props) {
  const [playSound] = useSound(props.sound);
  return (
    <div className="container">
      <div
        onClick={() => {
          playSound();
        }}
        className="button"
        style={{ backgroundColor: props.color, height: props.height }}
      >
        <p id="text">{props.text}</p>
      </div>
      <h1 id="number">{props.number}</h1>
    </div>
  );
}
