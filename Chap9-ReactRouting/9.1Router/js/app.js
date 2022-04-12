import React from "react";
import { render } from "react-dom";
import { Router } from "./router";

const mapping = {
  "#profile": React.createElement(
    "div",
    null,
    "Profile (",
    React.createElement(
      "a",
      { href: "#" },
      "home"
    ),
    ")"
  ),
  "#accounts": React.createElement(
    "div",
    null,
    "Accounts (",
    React.createElement(
      "a",
      { href: "#" },
      "home"
    ),
    ")"
  ),
  "*": React.createElement(
    "div",
    null,
    "Dashboard",
    React.createElement("br", null),
    React.createElement(
      "a",
      { href: "#profile" },
      "Profile"
    ),
    React.createElement("br", null),
    React.createElement(
      "a",
      { href: "#accounts" },
      "Accounts"
    )
  )
};

render(React.createElement(Router, { mapping: mapping }), document.getElementById("content"));
