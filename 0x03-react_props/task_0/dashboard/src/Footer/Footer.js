import React from "react";
import './Footer.css';

export default function Footer(props) {
    return (
      <footer className="App-footer">
        <p>{props.text}</p>
      </footer>
    );
}
