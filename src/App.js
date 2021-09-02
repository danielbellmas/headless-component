import "./styles.css";
import React from "react";
import classNames from "classnames";
import { Tooltip } from "@material-ui/core";

import Menu from "./menu";
import { BaseMenu, ALwaysOpenedMenu } from "./menus";

// button tooltip
// button position
// custom position
// sections
// close on click
// setMenuVisibility on single item

export default function App() {
  const items = [
    { text: "first item" },
    { text: "second item" },
    { text: "third item" },
  ];

  return <div className="App"></div>;
}
