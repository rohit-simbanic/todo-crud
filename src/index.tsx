import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Pages/Home/Home";
import { FluentProvider, teamsLightTheme } from "@fluentui/react-components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <FluentProvider theme={teamsLightTheme}>
    <Home />
  </FluentProvider>
);
