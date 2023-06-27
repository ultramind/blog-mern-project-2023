import { useState } from "react";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import { Routes, Route } from "react-router-dom";
import ArticleDetails from "./pages/articleDetail/ArticleDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App font-opensans">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:id" element={<ArticleDetails />} />
      </Routes>
    </div>
  );
}

export default App;
