import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import "./App.css";
import { RouteConfig } from "./Components/Routes";

function AppRoutes() {
  // useRoutes must be called inside a component rendered within <BrowserRouter>
  const element = useRoutes(RouteConfig);
  return element;
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
