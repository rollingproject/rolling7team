import ReactDOM from "react-dom/client";
import Nav from "./Nav.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage.jsx";
import { ListPage } from "./pages/ListPage.jsx";
import { PostPage } from "./pages/PostPage.jsx";
import "./styles/reset.css";
import { PostByIdPage } from "./pages/PostByIdPage.jsx";
import { PostByIdEditPage } from "./pages/PostByIdEditPage.jsx";
import { MessagePage } from "./pages/MessagePage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/list" element={<ListPage />} />
      <Route path="/post/:recipientId" element={<PostByIdPage />} />
      <Route path="/post/:recipientId/edit" element={<PostByIdEditPage />} />
      <Route path="/post/:recipientId/message" element={<MessagePage />} />
      <Route path="/post" element={<PostPage />} />
    </Routes>
  </BrowserRouter>
);
