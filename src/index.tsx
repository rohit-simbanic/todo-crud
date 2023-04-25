import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Pages/Home/Home";
import { FluentProvider, teamsLightTheme } from "@fluentui/react-components";
import { AppProvider } from "./Context/TodoContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AppProvider>
    <FluentProvider theme={teamsLightTheme}>
      <Home />
    </FluentProvider>
  </AppProvider>
);
