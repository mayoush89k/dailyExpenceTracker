import React from "react";
import "./Menu.css";

export default function Menu() {
  return (
    <menu>
      <a href="https://daily-expense-tracking.netlify.app/">
        <img src="logo.svg" />
      </a>
      <ul>
        <li>Home</li>
        <li>Monthly Diagram</li>
        <li>How Does it Work</li>
        <li>Add New</li>
      </ul>
    </menu>
  );
}
