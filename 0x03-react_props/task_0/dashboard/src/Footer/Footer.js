import React from "react";
import './Footer.js';

export default function Footer(props) {
    return (
      <footer className="App-footer">
        <p>{props.text}</p>
      </footer>
    );
}
