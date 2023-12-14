import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage.jsx";
import { ListPage } from "./pages/ListPage.jsx";
import { PostPage } from "./pages/PostPage.jsx";
import "./styles/reset.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/post" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
