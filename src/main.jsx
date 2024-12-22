import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import UseStateScreen from "./routes/UseStateScreen.jsx";
import Layout from "./routes/Layout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<App />} />
          <Route path={"state/useState"} element={<UseStateScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
