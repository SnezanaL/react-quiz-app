import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QuizProvider } from "./context/quizContext.jsx";
import App from "./components/App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </React.StrictMode>
);
