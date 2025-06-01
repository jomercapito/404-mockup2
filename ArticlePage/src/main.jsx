import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ArticlePage from "./pages/ArticlePage.jsx";
import IndividualPage from "./pages/IndividualPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <IndividualPage />
    {/* <ArticlePage /> */}
  </StrictMode>
);
