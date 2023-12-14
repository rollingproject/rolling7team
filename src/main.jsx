import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { LandingPage } from "./pages/LandingPage.jsx";
import { ListPage } from "./pages/ListPage.jsx";
import { PostPage } from "./pages/PostPage.jsx";
import "./styles/reset.css";
import { PostByIdPage } from "./pages/PostByIdPage.jsx";
import { PostByIdEditPage } from "./pages/PostByIdEditPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/" element={<PostByIdEditPage />} />
        {/* <Route path="/" element={<LandingPage />} /> */}
        <Route path="/list" element={<ListPage />} />
        <Route path="/post/:recipientId" element={<PostByIdPage />} />
        <Route path="/post" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
